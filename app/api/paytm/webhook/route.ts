import { NextResponse } from "next/server";
import { verifyPaytmCallback } from "@/lib/paytm";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const formData = await req.formData();
  const fields: Record<string, string> = {};

  formData.forEach((value, key) => {
    fields[key] = String(value);
  });

  const isVerified = verifyPaytmCallback(fields);

  if (!isVerified) {
    console.warn("Paytm webhook checksum mismatch", {
      orderId: fields.ORDERID ?? fields.orderId,
      status: fields.STATUS ?? fields.status,
    });

    return NextResponse.json({ ok: false }, { status: 400 });
  }

  console.info("Paytm webhook received", {
    orderId: fields.ORDERID ?? fields.orderId,
    status: fields.STATUS ?? fields.status,
    txnId: fields.TXNID ?? fields.txnId,
  });

  return NextResponse.json({ ok: true });
}
