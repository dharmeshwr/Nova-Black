"use client";

import { FileTextIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

export default function TermsAndConditions() {
  const terms = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using the Novablack E-Tech Private Limited website (“Site”), you agree to these Terms & Conditions (“Terms”). If you disagree, please refrain from using the Site."
    },
    {
      title: "Services",
      content: [
        "Novablack E-Tech Private Limited provides information-technology consulting, development, and related professional services.",
        "Information displayed on the website is indicative and does not constitute a binding offer.",
        "All commercial terms, timelines, and deliverables are governed exclusively by mutually signed Statements of Work (SOWs)."
      ]
    },
    {
      title: "User Obligations",
      content: "You agree not to misuse the Site, attempt unauthorised access, or infringe our intellectual property."
    },
    {
      title: "Intellectual Property",
      content: "All content, trademarks, and code on the Site are owned by Novablack E-Tech Private Limited or its licensors. No portion may be reproduced without written consent."
    },
    {
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, Novablack E-Tech Private Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of the Site or services."
    },
    {
      title: "Confidentiality",
      content: [
        "Any confidential or proprietary information shared by clients with Novablack E-Tech Private Limited during the course of project discussions or execution shall be used solely for service delivery.",
        "Such information shall not be disclosed to any third party without prior written consent, except where disclosure is required by applicable law or regulatory authorities."
      ]
    },
    {
      title: "Third-Party Tools & Services",
      content: [
        "Novablack E-Tech Private Limited may use third-party platforms, APIs, hosting providers, payment gateways, or software tools as part of service delivery.",
        "Novablack E-Tech Private Limited does not control and shall not be responsible for outages, delays, changes, or limitations arising from such third-party services."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of India.",
        "Any disputes arising out of or relating to these Terms or services shall be subject to the exclusive jurisdiction of the courts of Uttar Pradesh, India."
      ]
    },
    {
      title: "Payment & Billing",
      content: [
        "All payments made to Novablack E-Tech Private Limited are strictly for IT consulting and software development services.",
        "Payments may be collected in advance or on a milestone basis as defined in the applicable Statement of Work (SOW).",
        "Once services have commenced or milestones are delivered, payments are non-refundable, subject to the Refund & Cancellation Policy."
      ]
    },
    {
      title: "No Financial Intermediation",
      content: [
        "Novablack E-Tech Private Limited does not provide financial, investment, brokerage, escrow, wallet, or payment processing services.",
        "Novablack E-Tech Private Limited does not collect, hold, route, or manage customer funds.",
        "All payments are made directly by clients for services rendered."
      ]
    },
    {
      title: "Changes",
      content: "Novablack E-Tech Private Limited reserves the right to update these Terms at any time; continued use constitutes acceptance after such updates are posted."
    },
    {
      title: "Deliverables & Timeline",
      isTable: true
    }
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
            <FileTextIcon size={24} />
            <span className="uppercase tracking-widest text-sm">Legal Document</span>
          </div>

          <h1 className="text-4xl md:text-6xl tracking-tight text-zinc-50 mb-8">
            Terms & Conditions
          </h1>

          <div className="flex items-center gap-3 text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse" />
            <span className="text-sm tracking-wide">Last Revised: March 21, 2026</span>
          </div>
        </motion.div>

        {/* Terms Split-Row Layout */}
        <div className="flex flex-col">
          {terms.map((item, index) => (
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

                  {item.isTable ? (
                    <div className="flex flex-col w-full mt-2">
                      {/* Table Header */}
                      <div className="grid grid-cols-12 gap-4 pb-4 border-b border-zinc-800 text-xs uppercase tracking-widest text-zinc-500">
                        <div className="col-span-12 sm:col-span-5">Milestone</div>
                        <div className="col-span-12 sm:col-span-3 hidden sm:block">Timeframe</div>
                        <div className="col-span-12 sm:col-span-4 hidden sm:block">Notes</div>
                      </div>

                      {/* Table Body */}
                      <div className="flex flex-col">
                        {[
                          { mile: "Wireframes & Mood-board", date: "T + 7 days", note: "Review & Approve" },
                          { mile: "UI Mock-ups (All Pages)", date: "T + 14 days", note: "Two Rounds of Revision" },
                          { mile: "Dev Site on Staging URL", date: "T + 28 days", note: "Content & Images Populated" },
                          { mile: "UAT & Bug-fix", date: "T + 35 days", note: "Final Testing & Fixes" },
                          { mile: "Go-Live", date: "T + 40 days", note: "DNS Cut-over to Production" }
                        ].map((row, i) => (
                          <div key={i} className="grid grid-cols-12 gap-2 sm:gap-4 py-6 border-b border-zinc-900/50 hover:bg-zinc-900/30 transition-colors text-base">
                            <div className="col-span-12 sm:col-span-5 text-zinc-200">{row.mile}</div>
                            <div className="col-span-12 sm:col-span-3 font-mono text-sm text-zinc-500 sm:pt-1">{row.date}</div>
                            <div className="col-span-12 sm:col-span-4 text-zinc-400">{row.note}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : Array.isArray(item.content) ? (
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

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
