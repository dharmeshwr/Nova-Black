"use client";

import { LockKeyIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
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
      content: "All contact form submissions are transmitted via SSL/HTTPS. Novablack E-Tech Private Limited follows industry-standard technical and organizational measures to prevent unauthorized access, loss, or misuse of personal data."
    },
    {
      title: "Policy Updates",
      content: "Novablack E-Tech Private Limited may update this Privacy Policy from time to time. Each update will be posted on this page with the date of last revision."
    },
    {
      title: "Contact Us",
      content: "For any questions regarding this Privacy Policy, contact us.",
      email: "novablacketechprivatelimited@gmail.com"
    },
    {
      title: "Data Retention",
      content: "Novablack E-Tech Private Limited retains personal data collected through the website only for as long as necessary to respond to inquiries or provide services. Data is securely deleted or anonymized once it is no longer required."
    },
    {
      title: "Third-Party Services",
      content: [
        "Novablack E-Tech Private Limited may use third-party service providers (hosting, email, analytics) to deliver services.",
        "These parties process data only on our instructions.",
        "Novablack E-Tech Private Limited does not authorize third parties to use data for marketing. We recommend reviewing external privacy policies."
      ]
    },
    {
      title: "Legal Compliance",
      content: "Novablack E-Tech Private Limited may disclose personal data where required by law, regulation, or legal process, including for audit or regulatory purposes, while taking steps to protect client privacy."
    },
    {
      title: "No Financial Data Collection",
      content: "Novablack E-Tech Private Limited does not collect, store, process, or transmit sensitive financial information such as bank account details, card details, UPI IDs, wallet information, or payment credentials through its website."
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
            <LockKeyIcon size={24} />
            <span className="uppercase tracking-widest text-sm">Legal Framework</span>
          </div>

          <h1 className="text-4xl md:text-6xl tracking-tight text-zinc-50 mb-8">
            Privacy Protocol
          </h1>

          <div className="flex items-center gap-3 text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse" />
            <span className="text-sm tracking-wide">Last Revised: March 21, 2026</span>
          </div>
        </motion.div>

        {/* Privacy Data Split-Row Layout */}
        <div className="flex flex-col">
          {privacyData.map((item, index) => (
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
