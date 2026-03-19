"use client";

import { useState } from "react";
import { PlusIcon, QuestionIcon, ArrowRightIcon, MinusIcon, CaretDownIcon } from "@phosphor-icons/react";
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
    <section className="min-h-screen bg-background text-foreground font-sans pt-32 pb-24 selection:bg-neutral-200">
      <div className="max-w-4xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 mb-6">
              <QuestionIcon weight="fill" className="text-neutral-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Knowledge Base</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Common <span className="font-serif italic text-neutral-400">Queries.</span>
            </h1>
          </motion.div>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group rounded-3xl transition-all duration-500 overflow-hidden border",
                  isOpen
                    ? "bg-neutral-50 border-neutral-200 shadow-sm"
                    : "bg-white border-transparent hover:bg-neutral-50/50"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className={cn(
                      "text-xs font-mono font-bold px-2 py-1 rounded transition-colors",
                      isOpen ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-400"
                    )}>
                      {item.id}
                    </span>
                    <span className="text-xl md:text-2xl font-medium tracking-tight pr-4">
                      {item.question}
                    </span>
                  </div>

                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0",
                    isOpen ? "bg-neutral-900 border-neutral-900 text-white rotate-180" : "bg-white border-neutral-200 text-neutral-400 group-hover:border-neutral-300"
                  )}>
                    <CaretDownIcon size={20} weight="bold" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 pl-[4.5rem] md:pl-[5.5rem]">
                        <div className="h-px w-12 bg-neutral-200 mb-6" />
                        <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
                          {item.answer}
                        </p>

                        <div className="mt-6 flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">Category:</span>
                          <span className="text-xs font-medium bg-white border border-neutral-200 px-2 py-1 rounded text-neutral-500">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-20 text-center">
          <p className="text-neutral-500 mb-4">Still have questions?</p>
          <a href="/contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
            Contact Support <ArrowRightIcon weight="bold" />
          </a>
        </div>

      </div>
    </section>
  );
}
