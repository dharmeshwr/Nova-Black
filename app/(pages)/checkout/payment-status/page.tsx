import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  ClockIcon,
  WarningCircleIcon,
  XCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  type PaytmStatusResult,
  getPaytmTransactionStatus,
  parsePaytmOrderId,
  getCheckoutAmount,
} from "@/lib/paytm";
import { getServiceBySlug } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Payment Status",
  description: "Verify the final status of your checkout payment.",
  robots: {
    index: false,
    follow: false,
  },
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function getStatusContent(status: string, verificationFailed: boolean) {
  if (verificationFailed) {
    return {
      icon: WarningCircleIcon,
      eyebrow: "Verification failed",
      title: "We could not verify this payment response.",
      description:
        "The callback checksum did not match. Please contact us before retrying or sharing payment details.",
      color: "text-amber-300",
      border: "border-amber-300/20",
      background: "bg-amber-300/10",
    };
  }

  if (status === "success") {
    return {
      icon: CheckCircleIcon,
      eyebrow: "Payment successful",
      title: "Your payment has been received.",
      description:
        "We will verify the project details and contact you with the next steps.",
      color: "text-emerald-300",
      border: "border-emerald-300/20",
      background: "bg-emerald-300/10",
    };
  }

  if (status === "pending") {
    return {
      icon: ClockIcon,
      eyebrow: "Payment pending",
      title: "Your payment is still being processed.",
      description:
        "This can happen when bank confirmation is delayed. Refresh this page after a few minutes.",
      color: "text-sky-300",
      border: "border-sky-300/20",
      background: "bg-sky-300/10",
    };
  }

  if (status === "failure") {
    return {
      icon: XCircleIcon,
      eyebrow: "Payment failed",
      title: "The payment was not completed.",
      description:
        "No confirmed payment was recorded for this order. You can return to checkout and try again.",
      color: "text-red-300",
      border: "border-red-300/20",
      background: "bg-red-300/10",
    };
  }

  return {
    icon: WarningCircleIcon,
    eyebrow: "Status unavailable",
    title: "We could not confirm the final payment state.",
    description:
      "The payment gateway returned an unexpected status. Please contact us with the order id.",
    color: "text-zinc-300",
    border: "border-zinc-700",
    background: "bg-zinc-900/60",
  };
}

export default async function PaymentStatusPage({
  searchParams,
}: {
  searchParams: Promise<{
    orderId?: string;
    status?: string;
    verified?: string;
  }>;
}) {
  const { orderId, status: callbackStatus, verified } = await searchParams;
  const verificationFailed = verified === "false";
  const parsedOrder = orderId ? parsePaytmOrderId(orderId) : null;
  const service = parsedOrder ? getServiceBySlug(parsedOrder.slug) : null;
  const checkoutAmount = parsedOrder ? getCheckoutAmount(parsedOrder.slug) : null;
  const statusResult: PaytmStatusResult | null =
    orderId && !verificationFailed
      ? await getPaytmTransactionStatus(orderId).catch((error) => ({
        orderId,
        status: "unknown" as const,
        gatewayStatus: callbackStatus,
        message:
          error instanceof Error
            ? error.message
            : "Unable to verify payment status.",
      }))
      : null;
  const finalStatus =
    statusResult?.status ??
    (callbackStatus === "TXN_SUCCESS"
      ? "success"
      : callbackStatus === "PENDING"
        ? "pending"
        : callbackStatus === "TXN_FAILURE"
          ? "failure"
          : "unknown");
  const statusContent = getStatusContent(finalStatus, verificationFailed);
  const StatusIcon = statusContent.icon;
  const receiptUrl = new URLSearchParams();

  if (orderId) receiptUrl.set("orderId", orderId);
  if (callbackStatus) receiptUrl.set("status", callbackStatus);
  if (verificationFailed) receiptUrl.set("verified", "false");

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-zinc-50 pt-32">
      <section className="px-6 md:px-12 pb-16 border-b border-zinc-900">
        <div className="max-w-screen-xl mx-auto">
          <Link
            href={service ? `/checkout/${service.slug}` : "/services"}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-200 transition-colors group mb-12"
          >
            <ArrowLeftIcon
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to checkout
          </Link>

          <br />
          <div
            className={`inline-flex items-center gap-2 border ${statusContent.border} ${statusContent.background} ${statusContent.color} px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest mb-8`}
          >
            <StatusIcon size={15} weight="fill" />
            {statusContent.eyebrow}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.92] max-w-4xl">
            {statusContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-zinc-400">
            {statusContent.description}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 border border-zinc-900">
            <div className="p-6 md:p-8 border-b border-zinc-900">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
                Gateway verification
              </span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                {statusResult?.gatewayStatus ?? callbackStatus ?? "Unknown"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 font-light">
                {statusResult?.message ??
                  (verificationFailed
                    ? "Callback checksum verification failed."
                    : "No live gateway response was available.")}
              </p>
            </div>

            <dl className="divide-y divide-zinc-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-6 md:p-8">
                <dt className="text-xs font-mono uppercase tracking-widest text-zinc-600">
                  Order ID
                </dt>
                <dd className="md:col-span-2 font-mono text-sm text-zinc-300 break-all">
                  {orderId ?? "Not provided"}
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-6 md:p-8">
                <dt className="text-xs font-mono uppercase tracking-widest text-zinc-600">
                  Transaction ID
                </dt>
                <dd className="md:col-span-2 font-mono text-sm text-zinc-300 break-all">
                  {statusResult?.transactionId ?? "Unavailable"}
                </dd>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-6 md:p-8">
                <dt className="text-xs font-mono uppercase tracking-widest text-zinc-600">
                  Payment mode
                </dt>
                <dd className="md:col-span-2 text-sm text-zinc-300">
                  {statusResult?.paymentMode ?? "Unavailable"}
                </dd>
              </div>
            </dl>
          </div>

          <aside className="lg:col-span-5 border border-zinc-900 bg-zinc-950">
            <div className="p-6 md:p-8 border-b border-zinc-900">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
                Order summary
              </span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                {service?.title ?? "Checkout order"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500 font-light">
                {service?.tagline ??
                  "Service details could not be recovered from this order id."}
              </p>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between gap-6 text-sm">
                <span className="text-zinc-500">Expected amount</span>
                <span className="font-mono text-zinc-300">
                  {checkoutAmount ? formatCurrency(checkoutAmount.total) : "Unknown"}
                </span>
              </div>
              <div className="flex items-center justify-between gap-6 text-sm">
                <span className="text-zinc-500">Gateway amount</span>
                <span className="font-mono text-zinc-300">
                  {statusResult?.amount ? `INR ${statusResult.amount}` : "Unknown"}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 border-t border-zinc-900">
              <Link
                href={`/api/paytm/receipt?${receiptUrl.toString()}`}
                className="mb-4 inline-flex w-full items-center justify-between border border-zinc-700 bg-zinc-900 text-zinc-50 px-6 py-4 text-sm font-medium uppercase tracking-widest hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-300"
              >
                Download PDF
                <CheckCircleIcon size={16} weight="light" />
              </Link>
              <Link
                href={service ? `/checkout/${service.slug}` : "/services"}
                className="inline-flex w-full items-center justify-between border border-zinc-700 bg-zinc-50 text-zinc-950 px-6 py-4 text-sm font-medium uppercase tracking-widest hover:bg-zinc-950 hover:text-zinc-50 transition-all duration-300"
              >
                Return to checkout
                <ArrowLeftIcon size={16} weight="light" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
