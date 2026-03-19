"use client";

import { ShieldWarningIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

export default function RefundPolicy() {
  const policies = [
    {
      title: "Professional Services",
      content: "All services offered by BVPL are professional and project‑based. Work begins only after the scope of work (SOW) is mutually agreed upon."
    },
    {
      title: "No Monetary Refunds",
      content: "Once the scope of work is finalized and project execution has commenced, payments made are non-refundable. This is because our services involve custom development, resource allocation, and intellectual effort from day one.",
    },
    {
      title: "Scope Revisions",
      content: "To ensure client satisfaction, we allow scope revisions within 14 days of project initiation. Revisions are limited to the originally agreed scope and are aimed at aligning deliverables with client expectations."
    },
    {
      title: "Project Cancellations",
      content: "Any cancellation requests will be reviewed strictly in accordance with the mutually signed Statement of Work (SOW), taking into account work completed up to the date of cancellation."
    },
    {
      title: "Why This Policy Exists",
      content: [
        "Fair allocation of resources",
        "Protection of intellectual work already completed",
        "Client flexibility through limited scope revisions"
      ]
    },
    {
      title: "No Financial or Payment Services",
      content: [
        "Boby Ventures Private Limited does not provide financial, investment, brokerage, escrow, wallet, or payment processing services.",
        "All payments made to BVPL are strictly towards software development and IT consulting services rendered to clients."
      ]
    },
    {
      title: "Advance Payments & Milestones",
      content: [
        "Projects may require advance payments or milestone-based billing as defined in the Statement of Work (SOW).",
        "Payments made against completed milestones are final and non-refundable."
      ]
    },
    {
      title: "Force Majeure",
      content: "BVPL shall not be held liable for delays or non-performance caused by events beyond reasonable control, including natural disasters, government actions, network failures, or force majeure events."
    },
    {
      title: "Dispute Resolution & Contact",
      content: "For any concerns related to cancellations or service delivery, clients may contact us. Disputes, if any, shall be subject to the jurisdiction of courts in Uttar Pradesh, India.",
      email: "info@bobyventures.com"
    },
  ];

  return (
    <section className="min-h-screen bg-background text-foreground font-sans pt-32 pb-24 selection:bg-neutral-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 mb-6 border border-neutral-200">
              <ShieldWarningIcon weight="fill" className="text-amber-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Service Protocol</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-8">
              Refund <span className="font-serif italic text-neutral-400 mr-4">&</span>
              Cancellation
            </h1>

            <p className="max-w-xl mx-auto text-lg text-neutral-500 leading-relaxed">
              Since we provide custom IT solutions, our policy protects the intellectual effort and resources allocated to your project.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-32">
              <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 block">
                  Quick Summary
                </span>
                <ul className="space-y-4 text-sm text-neutral-600">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    Services are project-based.
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    Payments are non-refundable once work begins.
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    Scope revisions allowed within 14 days.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-16">
            {policies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative pl-8 md:pl-0"
              >
                {/* Mobile Decorator Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 md:hidden" />
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-neutral-300 md:hidden" />

                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <span className="hidden md:block text-xs font-bold text-neutral-300 font-mono pt-2 w-12 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-amber-700 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <div className="text-neutral-600 leading-relaxed text-lg">
                      {Array.isArray(item.content) ? (
                        <ul className="space-y-3 mt-4 bg-neutral-50 p-6 rounded-2xl">
                          {item.content.map((line, i) => (
                            <li key={i} className="flex gap-3 text-base">
                              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2.5 shrink-0" />
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{item.content}</p>
                      )}

                      {item.email && (
                        <div className="mt-8">
                          <a
                            href={`mailto:${item.email}`}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 text-sm font-medium"
                          >
                            <EnvelopeSimpleIcon size={18} />
                            {item.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-neutral-100 mt-16 md:ml-20" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
