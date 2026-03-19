'use client'

import { useState, FormEvent } from "react";
import { ArrowRightIcon, SpinnerIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "motion/react";
import { TrademarkRegisteredIcon } from "@phosphor-icons/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      new Promise((resolve) => { setTimeout(() => { resolve(true); }, 2000); }).then(() => {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      })
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => {
        if (status === 'success') setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const lineVariants: Variants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  return (
    <motion.footer
      className="w-full bg-background text-foreground font-sans pt-12 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="px-6 md:px-12 lg:px-16">
        <div className="mb-16">
          <motion.div variants={lineVariants} className="h-[1px] bg-[#1a1a1a] mb-4" />
          <motion.div variants={itemVariants}>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
              Home
            </span>
          </motion.div>
        </div>

        <div className="mb-24">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight text-[#1a1a1a]"
          >
            <p> Don&rsquo;t Miss A Thing </p>
            <p className="flex items-start"> With BVPL <TrademarkRegisteredIcon size={24} className="mt-5" /> </p>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-5 flex flex-col justify-between h-full pr-0 lg:pr-16">

            <motion.div variants={itemVariants} className="w-full max-w-md">
              <p className="text-xs font-bold uppercase tracking-wider mb-6">
                Expert insights direct to your inbox
              </p>

              <form onSubmit={handleSubmit} className="relative group">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-transparent border-b border-[#1a1a1a] py-4 text-lg outline-none placeholder:text-neutral-400 focus:border-neutral-500 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:opacity-70 transition-opacity disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <SpinnerIcon size={24} className="animate-spin" />
                  ) : (
                    <ArrowRightIcon size={24} weight="light" />
                  )}
                </button>
              </form>

              <AnimatePresence mode="wait">
                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`text-xs mt-3 font-medium uppercase tracking-wide ${status === "error" ? "text-red-600" : "text-green-600"}`}
                  >
                    {message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 lg:mt-0">
              <p className="text-xs font-bold uppercase tracking-wider mb-4">
                Get in touch
              </p>
              <a
                href="mailto:info@bobyventures.com"
                className="text-lg md:text-xl hover:opacity-70 transition-opacity block break-words"
              >
                info@bobyventures.com
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider">Find Us</h3>
              <div className="text-sm leading-relaxed text-neutral-800 space-y-1">
                <p>C/o Babagopal Dass, Kanhia Lal Moh,</p>
                <p>G T Road, Chhata, Mathura – 281401,</p>
                <p>Uttar Pradesh, India</p>
                <br />
                <p>+91 7351515156</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider">Company</h3>
              <ul className="space-y-3 text-sm font-medium text-neutral-800">
                {["About", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="hover:opacity-60 transition-opacity uppercase"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider">Follow Us</h3>
              <ul className="space-y-3 text-sm font-medium text-neutral-800">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity uppercase">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity uppercase">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity uppercase">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity uppercase">
                    Twitter
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-6 md:mx-12 lg:mx-16 pb-8">
        <motion.div variants={lineVariants} className="h-px bg-[#1a1a1a] mb-8" />
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-medium uppercase tracking-wide gap-4"
        >
          <div>&copy; 2026 Boby Ventures Private Limited. All rights reserved.</div>
          <div className="flex gap-8">
            <Link href="/faqs" className="hover:opacity-60 transition-opacity">
              FAQs
            </Link>
            <Link href="/privacy-policy" className="hover:opacity-60 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:opacity-60 transition-opacity">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="hover:opacity-60 transition-opacity">
              Refund & Cancellation Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
