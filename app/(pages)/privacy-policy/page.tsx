"use client";

import { LockKeyIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  const privacyData = [
    {
      title: "Data We Collect",
      content: "We collect limited personal information such as name, email address, phone number, and message details that you voluntarily provide through website forms or direct communications."
    },
    {
      title: "How We Use Your Data",
      content: [
        "Respond to your inquiries",
        "Communicate about our services",
        "Maintain internal records for client support",
        "We do not sell, trade, or share your personal data with third parties for marketing purposes. Your data is used exclusively to communicate with you regarding our services or respond to inquiries."
      ]
    },
    {
      title: "Cookies and Tracking",
      content: "Any future use of cookies or analytics tools will comply with applicable data protection laws and user consent requirements."
    },
    {
      title: "Data Security",
      content: "All contact form submissions are transmitted via SSL/HTTPS. BVPL follows industry-standard technical and organizational measures to prevent unauthorized access, loss, or misuse of personal data."
    },
    {
      title: "Policy Updates",
      content: "BVPL may update this Privacy Policy from time to time. Each update will be posted on this page with the date of last revision."
    },
    {
      title: "Contact Us",
      content: "For any questions regarding this Privacy Policy, contact us.",
      email: "info@bobyventures.com"
    },
    {
      title: "Data Retention",
      content: "BVPL retains personal data collected through the website only for as long as necessary to respond to inquiries or provide services. Data is securely deleted or anonymized once it is no longer required."
    },
    {
      title: "Third-Party Services",
      content: [
        "BVPL may use third-party service providers (hosting, email, analytics) to deliver services.",
        "These parties process data only on our instructions.",
        "BVPL does not authorize third parties to use data for marketing. We recommend reviewing external privacy policies."
      ]
    },
    {
      title: "Legal Compliance",
      content: "BVPL may disclose personal data where required by law, regulation, or legal process, including for audit or regulatory purposes, while taking steps to protect client privacy."
    },
    {
      title: "No Financial Data Collection",
      content: "BVPL does not collect, store, process, or transmit sensitive financial information such as bank account details, card details, UPI IDs, wallet information, or payment credentials through its website."
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 mb-6">
              <LockKeyIcon weight="fill" className="text-neutral-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Legal Framework</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-6">
              Privacy <span className="font-serif italic text-neutral-400 mr-4">&</span>
              Protocol
            </h1>

            <div className="flex items-center justify-center gap-3 text-neutral-500 mt-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Last Revised: March 14, 2026</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-32 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4 block pl-4">
                Table of Contents
              </span>
              {privacyData.map((item, i) => (
                <a
                  key={i}
                  href={`#section-${i}`}
                  className="block px-4 py-2 text-sm text-neutral-500 hover:text-foreground transition-colors border-l-2 border-transparent hover:border-foreground"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-16">
            {privacyData.map((item, index) => (
              <motion.div
                id={`section-${index}`}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group scroll-mt-32"
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-xs font-bold text-neutral-300 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="pl-0 md:pl-10">
                  {Array.isArray(item.content) ? (
                    <ul className="space-y-4">
                      {item.content.map((line, i) => (
                        <li key={i} className="flex gap-4 text-neutral-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2.5 shrink-0" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      {item.content}
                    </p>
                  )}

                  {item.email && (
                    <div className="mt-8">
                      <a
                        href={`mailto:${item.email}`}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                      >
                        {item.email}
                        <ArrowUpRightIcon weight="bold" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="h-px w-full bg-neutral-100 mt-16 group-last:hidden" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
