import { NextResponse } from "next/server";
import {
  getCheckoutAmount,
  getPaytmTransactionStatus,
  parsePaytmOrderId,
} from "@/lib/paytm";
import { createSimplePdf } from "@/lib/pdf";
import { getServiceBySlug } from "@/lib/services-data";

export const runtime = "nodejs";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(amount);
}

function statusFromCallback(status: string | null) {
  if (status === "TXN_SUCCESS") return "success";
  if (status === "TXN_FAILURE") return "failure";
  if (status === "PENDING") return "pending";

  return "unknown";
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const orderId = url.searchParams.get("orderId") ?? "";
  const callbackStatus = url.searchParams.get("status");
  const verificationFailed = url.searchParams.get("verified") === "false";
  const parsedOrder = orderId ? parsePaytmOrderId(orderId) : null;
  const service = parsedOrder ? getServiceBySlug(parsedOrder.slug) : null;
  const checkoutAmount = parsedOrder ? getCheckoutAmount(parsedOrder.slug) : null;
  const liveStatus =
    orderId && !verificationFailed
      ? await getPaytmTransactionStatus(orderId).catch(() => null)
      : null;
  const finalStatus = verificationFailed
    ? "verification failed"
    : liveStatus?.status ?? statusFromCallback(callbackStatus);
  const generatedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
  const pdf = createSimplePdf("Payment Receipt", [
    `Generated: ${generatedAt}`,
    `Order ID: ${orderId || "Unavailable"}`,
    `Payment status: ${finalStatus}`,
    `Gateway status: ${liveStatus?.gatewayStatus ?? callbackStatus ?? "Unavailable"}`,
    `Gateway message: ${liveStatus?.message ?? "Unavailable"}`,
    `Service: ${service?.title ?? "Unavailable"}`,
    `Expected amount: ${
      checkoutAmount ? formatCurrency(checkoutAmount.total) : "Unavailable"
    }`,
    `Gateway amount: ${
      liveStatus?.amount ? `INR ${liveStatus.amount}` : "Unavailable"
    }`,
    `Transaction ID: ${liveStatus?.transactionId ?? "Unavailable"}`,
    `Bank transaction ID: ${liveStatus?.bankTransactionId ?? "Unavailable"}`,
    `Payment mode: ${liveStatus?.paymentMode ?? "Unavailable"}`,
    "",
    "This PDF is generated from the live payment status available to the website at download time.",
    "For verification issues or pending payments, contact Nova Black with the order ID above.",
  ]);
  const filename = orderId
    ? `nova-black-payment-${orderId}.pdf`
    : "nova-black-payment-receipt.pdf";

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
