"use client";

import { ShieldWarningIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

export default function RefundPolicy() {
  const policies = [
    {
      title: "Professional Services",
      content: "All services offered by Novablack E-Tech Private Limited are professional and project‑based. Work begins only after the scope of work (SOW) is mutually agreed upon."
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
        "Novablack E-Tech Private Limited does not provide financial, investment, brokerage, escrow, wallet, or payment processing services.",
        "All payments made to Novablack E-Tech Private Limited are strictly towards software development and IT consulting services rendered to clients."
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
      content: "Novablack E-Tech Private Limited shall not be held liable for delays or non-performance caused by events beyond reasonable control, including natural disasters, government actions, network failures, or force majeure events."
    },
    {
      title: "Dispute Resolution & Contact",
      content: "For any concerns related to cancellations or service delivery, clients may contact us. Disputes, if any, shall be subject to the jurisdiction of courts in Uttar Pradesh, India.",
      email: "novablacketechprivatelimited@gmail.com"
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-50 font-sans py-24 md:py-32 selection:bg-zinc-800 selection:text-zinc-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24 md:mb-32 border-b border-zinc-800 pb-16"
        >
          <div className="flex items-center gap-3 text-zinc-400 mb-8">
            <ShieldWarningIcon size={24} />
            <span className="uppercase tracking-widest text-sm">Service Protocol</span>
          </div>

          <h1 className="text-4xl md:text-6xl tracking-tight text-zinc-50 mb-6">
            Refund & Cancellation
          </h1>

          <p className="max-w-2xl text-xl text-zinc-400 leading-relaxed">
            Since we provide custom IT solutions, our policy protects the intellectual effort and resources allocated to your project.
          </p>
        </motion.div>

        {/* Policies Split-Row Layout */}
        <div className="flex flex-col">
          {policies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-zinc-900 group"
            >

              {/* Left Column: Number and Title */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <span className="font-mono text-zinc-600 text-sm">
                  /{String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl text-zinc-200 group-hover:text-zinc-50 transition-colors duration-300">
                  {item.title}
                </h2>
              </div>

              {/* Right Column: Content */}
              <div className="md:col-span-8">
                <div className="text-lg text-zinc-400 leading-relaxed">
                  {Array.isArray(item.content) ? (
                    <div className="flex flex-col gap-4">
                      {item.content.map((line, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="text-zinc-700 select-none">—</span>
                          <span className="text-zinc-300">{line}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-zinc-300">{item.content}</p>
                  )}

                  {/* Email Link */}
                  {item.email && (
                    <div className="mt-8">
                      <a
                        href={`mailto:${item.email}`}
                        className="inline-flex items-center gap-3 text-zinc-50 border-b border-zinc-700 pb-1 hover:border-zinc-300 transition-colors duration-300"
                      >
                        <EnvelopeSimpleIcon size={20} />
                        <span>{item.email}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
