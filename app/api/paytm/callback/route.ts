import { NextResponse } from "next/server";
import { verifyPaytmCallback } from "@/lib/paytm";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const formData = await req.formData();
  const fields: Record<string, string> = {};

  formData.forEach((value, key) => {
    fields[key] = String(value);
  });

  const orderId = fields.ORDERID ?? fields.orderId ?? "";
  const callbackStatus = fields.STATUS ?? fields.status ?? "unknown";
  const redirectUrl = new URL("/checkout/payment-status", req.url);

  if (orderId) {
    redirectUrl.searchParams.set("orderId", orderId);
  }

  redirectUrl.searchParams.set("status", callbackStatus);

  try {
    const isVerified = verifyPaytmCallback(fields);

    if (!isVerified) {
      redirectUrl.searchParams.set("verified", "false");
    }
  } catch {
    redirectUrl.searchParams.set("verified", "false");
  }

  return NextResponse.redirect(redirectUrl, { status: 303 });
}
