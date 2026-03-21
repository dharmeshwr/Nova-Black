'use client'
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import NeonHighway from "./highway";

export default function Footer() {
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.footer
      className="w-full text-zinc-50 font-sans py-12 overflow-hidden relative"
    >
      <div className="px-6 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 *:text-zinc-50">
          <div className="lg:col-span-5 h-full pr-0 lg:pr-16">
            <div className="flex gap-2 items-center">
              <Image
                src="/small_logo.png"
                alt="Logo"
                width={80}
                height={80}
              />
              <div className="text-4xl font-semibold tracking-tighter">
                Nova Black
              </div>
            </div>
            <motion.div variants={itemVariants} className="space-y-6  mt-5 ml-2 **:text-zinc-100/50">
              <div className="text-sm leading-relaxed text-neutral-800 space-y-1">
                <p>C/o Babagopal Dass, Kanhia Lal Moh,</p>
                <p>G T Road, Chhata, Mathura – 281401,</p>
                <p>Uttar Pradesh, India</p>
                <br />
                <p>+91 7351515156</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xs font-medium uppercase tracking-wider">LEGALS</h3>
              <ul className="space-y-3 text-sm font-medium **:text-zinc-50/50 **:uppercase">
                <li>
                  <Link href="/refund-policy" className="hover:opacity-60 transition-opacity">
                    Refund & Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:opacity-60 transition-opacity">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:opacity-60 transition-opacity">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:opacity-60 transition-opacity">
                    FAQs
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xs uppercase font-medium tracking-wider">Follow Us</h3>
              <ul className="space-y-3 text-sm font-medium **:text-zinc-50/50">
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

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xs font-medium uppercase tracking-wider">Company</h3>
              <ul className="space-y-3 text-sm font-medium **:text-zinc-50/50">
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
          </div>
        </div >
      </div >

      <NeonHighway backgroundColor="#09090b" waveFrequency={0.7} translateY={10} />
    </motion.footer >
  );
}
