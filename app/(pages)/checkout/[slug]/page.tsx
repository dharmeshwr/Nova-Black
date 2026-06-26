import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  getAllSlugs,
  getServiceBySlug,
  getServiceCheckoutPackage,
} from "@/lib/services-data";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Checkout Not Found" };
  }

  return {
    title: `Checkout - ${service.title}`,
    description: `Review the pricing breakdown and continue payment for ${service.title}.`,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `/checkout/${service.slug}`,
    },
  };
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const checkoutPackage = getServiceCheckoutPackage(slug);

  if (!service || !checkoutPackage) notFound();

  const subtotal = checkoutPackage.lineItems.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const tax = Math.round(subtotal * checkoutPackage.taxRate);
  const total = subtotal + tax;
  const serviceScopeItems = service.features.slice(0, 3);
  const refundPolicyHighlights = [
    "Work begins after the Statement of Work is mutually agreed.",
    "Payments are non-refundable once project execution has commenced.",
    "Scope revisions are available within 14 days of project initiation and stay within the agreed scope.",
    "Cancellation requests are reviewed against the signed SOW and completed work.",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-zinc-50 pt-32">
      <section className="px-6 md:px-12 pb-16 border-b border-zinc-900">
        <div className="max-w-screen-2xl mx-auto">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-200 transition-colors group mb-12"
          >
            <ArrowLeftIcon
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to service
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
                Secure checkout
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] uppercase tracking-tight leading-[0.88]">
                {service.title}
                <br />
                <span className="text-zinc-600">Checkout.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 border-t border-zinc-900 pt-6">
              <p className="text-xl font-light text-zinc-300 mb-4 leading-snug">
                {checkoutPackage.headline}
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                {checkoutPackage.duration}. Review the service breakdown before
                continuing to the payment gateway.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 border border-zinc-900">
            <div className="p-6 md:p-8 border-b border-zinc-900 flex items-center justify-between gap-6">
              <div>
                <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Pricing breakdown
                </span>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                  {checkoutPackage.depositLabel}
                </h2>
              </div>
              <span className="hidden sm:inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                <ShieldCheckIcon size={14} weight="fill" />
                Gateway ready
              </span>
            </div>

            <div>
              {checkoutPackage.lineItems.map((item, index) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:p-8 border-b border-zinc-900 last:border-b-0 hover:bg-zinc-900/30 transition-colors"
                >
                  <span className="md:col-span-1 font-mono text-sm text-zinc-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-8">
                    <h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-500 font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right text-zinc-200 font-mono">
                    {formatCurrency(item.amount)}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8 border-t border-zinc-900 bg-zinc-950/60">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                Services provided
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {serviceScopeItems.map((item) => (
                  <div key={item.title} className="border-l border-zinc-800 pl-4">
                    <h3 className="text-sm font-medium text-zinc-200 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-500 font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-zinc-500 font-light">
                This checkout confirms the paid kickoff for {service.title}.
                Final scope, milestones, access requirements, and delivery
                responsibilities are confirmed in the project SOW before
                execution starts.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:sticky lg:top-28 border border-zinc-900 bg-zinc-950">
            <div className="p-6 md:p-8 border-b border-zinc-900">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
                Order summary
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                {formatCurrency(total)}
              </h2>
              <p className="mt-3 text-sm text-zinc-500 font-light">
                Inclusive of estimated GST at{" "}
                {Math.round(checkoutPackage.taxRate * 100)}%.
              </p>
            </div>

            <div className="p-6 md:p-8 border-b border-zinc-900 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">Subtotal</span>
                <span className="font-mono text-zinc-300">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">
                  GST ({Math.round(checkoutPackage.taxRate * 100)}%)
                </span>
                <span className="font-mono text-zinc-300">
                  {formatCurrency(tax)}
                </span>
              </div>
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-zinc-200">Total due today</span>
                <span className="font-mono text-xl text-zinc-50">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <Link
                href="/"
                className="group w-full flex items-center justify-between border border-zinc-700 bg-zinc-50 text-zinc-950 px-6 py-4 text-sm font-medium uppercase tracking-widest hover:bg-zinc-950 hover:text-zinc-50 transition-all duration-300"
              >
                Pay now
                <ArrowRightIcon
                  size={16}
                  weight="light"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <div className="mt-8">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                  Service deliverables
                </h3>
                <ul className="space-y-3">
                  {service.deliverables.slice(0, 4).map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <CheckCircleIcon
                        size={16}
                        weight="fill"
                        className="text-zinc-600 shrink-0 mt-0.5"
                      />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-zinc-900 pt-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                  Notes
                </h3>
                <ul className="space-y-3">
                  {checkoutPackage.notes.map((note) => (
                    <li
                      key={note}
                      className="text-sm leading-relaxed text-zinc-500 font-light"
                    >
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-zinc-900 pt-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                  Cancellation & refund
                </h3>
                <ul className="space-y-3">
                  {refundPolicyHighlights.map((policy) => (
                    <li
                      key={policy}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-500 font-light"
                    >
                      <CheckCircleIcon
                        size={15}
                        weight="fill"
                        className="text-zinc-700 shrink-0 mt-0.5"
                      />
                      <span>{policy}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/refund-policy"
                  className="mt-5 inline-flex text-xs font-mono uppercase tracking-widest text-zinc-300 border-b border-zinc-700 pb-1 hover:text-zinc-50 hover:border-zinc-300 transition-colors"
                >
                  Read full policy
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
