"use client";

import { FileTextIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

export default function TermsAndConditions() {
  const terms = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using the BVPL website (“Site”), you agree to these Terms & Conditions (“Terms”). If you disagree, please refrain from using the Site."
    },
    {
      title: "Services",
      content: [
        "BVPL provides information-technology consulting, development, and related professional services.",
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
      content: "All content, trademarks, and code on the Site are owned by BVPL or its licensors. No portion may be reproduced without written consent."
    },
    {
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, BVPL shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of the Site or services."
    },
    {
      title: "Confidentiality",
      content: [
        "Any confidential or proprietary information shared by clients with Boby Ventures Private Limited during the course of project discussions or execution shall be used solely for service delivery.",
        "Such information shall not be disclosed to any third party without prior written consent, except where disclosure is required by applicable law or regulatory authorities."
      ]
    },
    {
      title: "Third-Party Tools & Services",
      content: [
        "BVPL may use third-party platforms, APIs, hosting providers, payment gateways, or software tools as part of service delivery.",
        "BVPL does not control and shall not be responsible for outages, delays, changes, or limitations arising from such third-party services."
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
        "All payments made to Boby Ventures Private Limited are strictly for IT consulting and software development services.",
        "Payments may be collected in advance or on a milestone basis as defined in the applicable Statement of Work (SOW).",
        "Once services have commenced or milestones are delivered, payments are non-refundable, subject to the Refund & Cancellation Policy."
      ]
    },
    {
      title: "No Financial Intermediation",
      content: [
        "BVPL does not provide financial, investment, brokerage, escrow, wallet, or payment processing services.",
        "BVPL does not collect, hold, route, or manage customer funds.",
        "All payments are made directly by clients for services rendered."
      ]
    },
    {
      title: "Changes",
      content: "BVPL reserves the right to update these Terms at any time; continued use constitutes acceptance after such updates are posted."
    },
    {
      title: "Deliverables & Timeline",
      isTable: true
    }
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
              <FileTextIcon weight="fill" className="text-neutral-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Legal Document</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-8">
              Terms <span className="font-serif italic text-neutral-400 mr-4">&</span>
              Conditions
            </h1>

            <div className="flex items-center justify-center gap-3 text-neutral-500 mt-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Last Revised: March 14, 2026</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-32">
              <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 block">
                  Quick Access
                </span>
                <ul className="space-y-4 text-sm text-neutral-600">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    Services & Obligations
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    Intellectual Property
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                    Billing & Milestones
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-16">
            {terms.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative pl-8 md:pl-0"
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 md:hidden" />
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-neutral-300 md:hidden" />

                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <span className="hidden md:block text-xs font-bold text-neutral-300 font-mono pt-2 w-12 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-neutral-900 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <div className="text-neutral-600 leading-relaxed text-lg">
                      {item.isTable ? (
                        <div className="mt-6 bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden">
                          <div className="grid grid-cols-12 gap-4 p-4 border-b border-neutral-200 bg-neutral-100/50 text-xs font-bold uppercase tracking-widest text-neutral-500">
                            <div className="col-span-5">Milestone</div>
                            <div className="col-span-3">Timeframe</div>
                            <div className="col-span-4">Notes</div>
                          </div>

                          <div className="divide-y divide-neutral-100 text-sm">
                            {[
                              { mile: "Wireframes & Mood-board", date: "T + 7 days", note: "Review & Approve" },
                              { mile: "UI Mock-ups (All Pages)", date: "T + 14 days", note: "Two Rounds of Revision" },
                              { mile: "Dev Site on Staging URL", date: "T + 28 days", note: "Content & Images Populated" },
                              { mile: "UAT & Bug-fix", date: "T + 35 days", note: "Final Testing & Fixes" },
                              { mile: "Go-Live", date: "T + 40 days", note: "DNS Cut-over to Production" }
                            ].map((row, i) => (
                              <div key={i} className="grid grid-cols-12 gap-4 p-4 hover:bg-white transition-colors">
                                <div className="col-span-5 font-medium text-neutral-900">{row.mile}</div>
                                <div className="col-span-3 font-mono text-xs text-neutral-500 pt-0.5">{row.date}</div>
                                <div className="col-span-4 text-neutral-500">{row.note}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : Array.isArray(item.content) ? (
                        <ul className="space-y-3 mt-4 bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
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
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-neutral-100 mt-16 md:ml-20 group-last:hidden" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
