import { NextResponse } from "next/server";
import { initiatePaytmTransaction } from "@/lib/paytm";

export const runtime = "nodejs";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { slug, name, email, mobile } = body;

    if (
      !isNonEmptyString(slug) ||
      !isNonEmptyString(name) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(mobile)
    ) {
      return NextResponse.json(
        { error: "Missing required checkout details." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 }
      );
    }

    const normalizedMobile = mobile.replace(/\D/g, "");

    if (!/^\d{10}$/.test(normalizedMobile)) {
      return NextResponse.json(
        { error: "Enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    const payment = await initiatePaytmTransaction(slug.trim(), {
      name: name.trim(),
      email: email.trim(),
      mobile: normalizedMobile,
    });

    return NextResponse.json(payment);
  } catch (error) {
    console.error("Paytm initiate error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to start Paytm payment.",
      },
      { status: 500 }
    );
  }
}
