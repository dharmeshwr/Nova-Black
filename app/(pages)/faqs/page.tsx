"use client";

import { useState } from "react";
import { QuestionIcon, ArrowRightIcon, CaretDownIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      id: "01",
      question: "How long does a typical project take?",
      answer: "6–12 weeks for MVPs, enterprise projects vary by scope. We operate on strict sprint cycles to ensure timely delivery.",
      category: "Timeline"
    },
    {
      id: "02",
      question: "Do you work with startups or only enterprises?",
      answer: "Both—our agile model scales to fit bootstrapped startups or large corporates. We adjust our team size and velocity based on your stage.",
      category: "Engagement"
    },
    {
      id: "03",
      question: "Can you sign an NDA?",
      answer: "Yes, we provide a mutual NDA (Non-Disclosure Agreement) before any confidential discussions to ensure your IP is protected from day one.",
      category: "Legal"
    },
    {
      id: "04",
      question: "What technologies do you specialise in?",
      answer: "React, Node.js, Java, Flutter, AWS, Azure, Web3, and leading payment stacks. We remain agnostic but opinionated on stability.",
      category: "Tech Stack"
    },
    {
      id: "05",
      question: "How does pricing work?",
      answer: "Fixed‑price sprints or dedicated resource models—transparent and milestone‑based. No hidden costs; everything is defined in the SOW.",
      category: "Commercials"
    },
    {
      id: "06",
      question: "What post‑launch support do you offer?",
      answer: "30 days of free warranty for bug fixes & optional monthly maintenance SLAs for server monitoring, updates, and feature enhancements.",
      category: "Support"
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
            <QuestionIcon size={24} />
            <span className="uppercase tracking-widest text-sm">Knowledge Base</span>
          </div>

          <h1 className="text-4xl md:text-6xl tracking-tight text-zinc-50 mb-6">
            Common Queries
          </h1>

          <p className="max-w-2xl text-xl text-zinc-400 leading-relaxed">
            Clear answers regarding our processes, timelines, and technical capabilities.
          </p>
        </motion.div>

        {/* FAQ Split-Row Layout */}
        <div className="flex flex-col">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 border-b border-zinc-900 group"
              >

                {/* Left Column: Number and Category */}
                <div className="md:col-span-4 flex flex-col gap-2">
                  <span className="font-mono text-zinc-600 text-sm">
                    /{item.id}
                  </span>
                  <span className="text-zinc-500 uppercase tracking-widest text-xs mt-2 hidden md:block">
                    {item.category}
                  </span>
                </div>

                {/* Right Column: Question and Answer */}
                <div className="md:col-span-8">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between text-left cursor-pointer outline-none group-hover:text-zinc-300 transition-colors duration-300"
                  >
                    <h2 className={cn(
                      "text-2xl pr-8 transition-colors duration-300",
                      isOpen ? "text-zinc-50" : "text-zinc-300"
                    )}>
                      {item.question}
                    </h2>

                    <div className={cn(
                      "mt-1 shrink-0 text-zinc-500 transition-transform duration-500 ease-in-out",
                      isOpen ? "rotate-180" : "rotate-0 group-hover:text-zinc-300"
                    )}>
                      <CaretDownIcon size={20} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-2">
                          <div className="flex gap-4">
                            <span className="text-zinc-700 select-none hidden sm:block">—</span>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>

                          {/* Mobile Category display */}
                          <div className="mt-6 md:hidden">
                            <span className="text-zinc-600 uppercase tracking-widest text-xs border border-zinc-800 px-3 py-1 rounded-full">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            )
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-zinc-400 text-lg">Still have questions regarding our process?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 text-zinc-50 border-b border-zinc-700 pb-1 hover:border-zinc-300 transition-colors duration-300 group"
          >
            <span className="uppercase tracking-widest text-sm">Contact Support</span>
            <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
