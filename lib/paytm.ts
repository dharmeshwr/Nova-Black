import "server-only";

import crypto from "crypto";
import {
  Config,
  EChannelId,
  EncDecUtil,
  MerchantProperties,
  Money,
  Payment,
  PaymentDetailBuilder,
  PaymentStatusDetailBuilder,
  UserInfo,
} from "paytm-pg-node-sdk";
import { getServiceCheckoutPackage, getServiceBySlug } from "@/lib/services-data";

type PaytmEnvironment = "test" | "prod";

export interface PaytmConfig {
  env: PaytmEnvironment;
  mid: string;
  key: string;
  website: string;
  channelId: string;
  industryType: string;
  callbackUrl: string;
  showPaymentPageUrl: string;
}

export interface PaytmCustomer {
  name: string;
  email: string;
  mobile: string;
}

export interface PaytmStatusResult {
  orderId: string;
  status: "success" | "failure" | "pending" | "unknown";
  gatewayStatus?: string;
  amount?: string;
  transactionId?: string;
  bankTransactionId?: string;
  paymentMode?: string;
  message?: string;
  raw?: Record<string, unknown>;
}

const sdkEnvironmentByPaytmEnv: Record<PaytmEnvironment, string> = {
  test: "STAGE",
  prod: "PROD",
};

const showPaymentPageBaseUrlByEnv: Record<PaytmEnvironment, string> = {
  test: "https://securestage.paytmpayments.com/theia/api/v1/showPaymentPage",
  prod: "https://secure.paytmpayments.com/theia/api/v1/showPaymentPage",
};

export function getCheckoutAmount(slug: string) {
  const checkoutPackage = getServiceCheckoutPackage(slug);

  if (!checkoutPackage) return null;

  const subtotal = checkoutPackage.lineItems.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const tax = Math.round(subtotal * checkoutPackage.taxRate);

  return {
    subtotal,
    tax,
    total: subtotal + tax,
    amountString: (subtotal + tax).toFixed(2),
  };
}

export function getPaytmConfig(): PaytmConfig {
  const env = (process.env.PAYTM_ENV ?? "test").toLowerCase();

  if (env !== "test" && env !== "prod") {
    throw new Error("PAYTM_ENV must be either test or prod.");
  }

  const prefix = env === "prod" ? "PAYTM_PROD" : "PAYTM_TEST";
  const mid = process.env[`${prefix}_MID`];
  const key = process.env[`${prefix}_KEY`];
  const website =
    process.env[`${prefix}_WEBSITE`] ?? (env === "prod" ? "DEFAULT" : "WEBSTAGING");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!mid || !key || !website || !siteUrl) {
    throw new Error(
      `Missing Paytm configuration. Required: ${prefix}_MID, ${prefix}_KEY, ${prefix}_WEBSITE, NEXT_PUBLIC_SITE_URL.`
    );
  }

  const baseUrl = siteUrl.replace(/\/$/, "");

  return {
    env,
    mid,
    key,
    website,
    channelId: process.env.PAYTM_CHANNEL_ID ?? "WEB",
    industryType: process.env.PAYTM_INDUSTRY_TYPE ?? "Retail",
    callbackUrl: `${baseUrl}/api/paytm/callback`,
    showPaymentPageUrl: showPaymentPageBaseUrlByEnv[env],
  };
}

function configurePaytmSdk(config: PaytmConfig) {
  const mutableConfig = Config as typeof Config & {
    logfile: string;
    logLevel: number;
  };

  mutableConfig.logfile = process.env.PAYTM_SDK_LOGFILE ?? "/tmp/paytm-sdk.log";
  mutableConfig.logLevel = 3;

  if (!MerchantProperties.isInitialized) {
    MerchantProperties.initialize(
      sdkEnvironmentByPaytmEnv[config.env],
      config.mid,
      config.key,
      config.website
    );
  }

  MerchantProperties.setEnvironment(sdkEnvironmentByPaytmEnv[config.env]);
  MerchantProperties.setMid(config.mid);
  MerchantProperties.setMerchantKey(config.key);
  MerchantProperties.setWebsite(config.website);
  MerchantProperties.setCallbackUrl(config.callbackUrl);
}

export function buildPaytmOrderId(slug: string) {
  const random = crypto.randomBytes(3).toString("hex").toUpperCase();

  return `NB-${slug}-${Date.now()}-${random}`;
}

export function parsePaytmOrderId(orderId: string) {
  const parts = orderId.split("-");

  if (parts.length < 5 || parts[0] !== "NB") return null;

  const random = parts.at(-1);
  const timestamp = parts.at(-2);
  const slug = parts.slice(1, -2).join("-");

  if (!slug || !timestamp || !random || !/^\d{13}$/.test(timestamp)) {
    return null;
  }

  return {
    slug,
    timestamp: Number(timestamp),
    random,
  };
}

export async function initiatePaytmTransaction(
  slug: string,
  customer: PaytmCustomer
) {
  const service = getServiceBySlug(slug);
  const checkoutAmount = getCheckoutAmount(slug);

  if (!service || !checkoutAmount) {
    throw new Error("Invalid service selected for checkout.");
  }

  const config = getPaytmConfig();
  configurePaytmSdk(config);

  const orderId = buildPaytmOrderId(slug);
  const txnAmount = Money.constructWithCurrencyAndValue(
    "INR",
    checkoutAmount.amountString
  );
  const custId = `CUST-${crypto
    .createHash("sha256")
    .update(`${customer.email}|${customer.mobile}`)
    .digest("hex")
    .slice(0, 16)}`;
  const userInfo = new UserInfo(custId);

  userInfo.setEmail(customer.email);
  userInfo.setMobile(customer.mobile);
  userInfo.setFirstName(customer.name.trim().split(/\s+/)[0] ?? customer.name);
  userInfo.setLastName(customer.name.trim().split(/\s+/).slice(1).join(" "));

  const paymentDetail = new PaymentDetailBuilder(
    EChannelId.WEB,
    orderId,
    txnAmount,
    userInfo
  )
    .setWorkFlow("Payment")
    .build();
  const sdkResponse = await Payment.createTxnToken(paymentDetail);
  const responseObject = sdkResponse.getResponseObject();
  const responseBody = responseObject?.getBody?.();
  const jsonResponse = sdkResponse.getJsonResponse?.();
  const parsedResponse = jsonResponse ? JSON.parse(jsonResponse) : null;
  const txnToken =
    responseBody?.getTxnToken?.() ?? parsedResponse?.body?.txnToken ?? null;

  if (!txnToken) {
    const resultMessage =
      responseBody?.getResultInfo?.()?.getResultMsg?.() ??
      parsedResponse?.body?.resultInfo?.resultMsg ??
      "Paytm did not return a transaction token.";

    throw new Error(resultMessage);
  }

  const target = `${config.showPaymentPageUrl}?mid=${encodeURIComponent(
    config.mid
  )}&orderId=${encodeURIComponent(orderId)}`;

  return {
    target,
    fields: {
      mid: config.mid,
      orderId,
      txnToken,
    },
  };
}

function checksumParamValue(value: string | undefined) {
  if (!value || value.toLowerCase() === "null") return "";

  return value;
}

function buildFormChecksumString(params: Record<string, string>) {
  return Object.keys(params)
    .sort()
    .map((key) => checksumParamValue(params[key]))
    .join("|");
}

export function verifyPaytmCallback(params: Record<string, string>) {
  const config = getPaytmConfig();
  configurePaytmSdk(config);

  const checksumKey = Object.keys(params).find(
    (key) => key.toUpperCase() === "CHECKSUMHASH"
  );
  const checksum = checksumKey ? params[checksumKey] : undefined;

  if (!checksum) return false;

  const paramsToVerify = Object.fromEntries(
    Object.entries(params).filter(([key]) => key.toUpperCase() !== "CHECKSUMHASH")
  );

  try {
    return EncDecUtil.verifySignature(
      buildFormChecksumString(paramsToVerify),
      config.key,
      checksum
    );
  } catch {
    return false;
  }
}

export async function getPaytmTransactionStatus(
  orderId: string
): Promise<PaytmStatusResult> {
  const config = getPaytmConfig();
  configurePaytmSdk(config);

  const statusDetail = new PaymentStatusDetailBuilder(orderId).build();
  const sdkResponse = await Payment.getPaymentStatus(statusDetail);
  const jsonResponse = sdkResponse.getJsonResponse?.();
  const parsedResponse = jsonResponse ? JSON.parse(jsonResponse) : null;
  const body = parsedResponse?.body ?? sdkResponse.getResponseObject?.()?.getBody?.();
  const resultInfo = body?.resultInfo ?? body?.getResultInfo?.()?.toJSON?.();
  const gatewayStatus =
    body?.resultInfo?.resultStatus ?? resultInfo?.resultStatus ?? body?.STATUS;

  return {
    orderId,
    status: mapPaytmStatus(gatewayStatus),
    gatewayStatus,
    amount: body?.txnAmount ?? body?.getTxnAmount?.(),
    transactionId: body?.txnId ?? body?.getTxnId?.(),
    bankTransactionId: body?.bankTxnId ?? body?.getBankTxnId?.(),
    paymentMode: body?.paymentMode ?? body?.getPaymentMode?.(),
    message:
      body?.resultInfo?.resultMsg ??
      resultInfo?.resultMsg ??
      body?.RESPMSG ??
      "Payment status could not be verified.",
    raw: body,
  };
}

function mapPaytmStatus(status: string | undefined): PaytmStatusResult["status"] {
  if (status === "TXN_SUCCESS" || status === "S") return "success";
  if (status === "TXN_FAILURE" || status === "F") return "failure";
  if (status === "PENDING" || status === "P") return "pending";

  return "unknown";
}
