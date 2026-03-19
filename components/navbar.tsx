"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "motion/react";
import { useState, useEffect, FormEvent } from "react";
import { XIcon, ArrowRightIcon, CaretRightIcon, ListIcon } from "@phosphor-icons/react/dist/ssr";
import { CheckCircleIcon, CircleNotchIcon } from "@phosphor-icons/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsHero(window.scrollY < window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const openModal = () => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    setIsModalOpen(true);
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, delay: 0.2 },
    },
  };

  const mobileItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 backdrop-blur-md font-sans border-b border-foreground/10 transition-all duration-300",
          isHero ? "bg-transparent" : "bg-background"
        )}
      >
        <div className="max-w-[1540px] mx-auto px-6 md:px-10 h-15 flex items-center justify-between">
          <Link href="/" className="z-50 relative group flex items-center gap-2" onClick={closeMobileMenu}>
            <Image
              src="/small_logo.png"
              alt="Logo"
              width={35}
              height={35}
            />
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-md transition-all duration-300 ease-out hover:text-foreground/70",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden z-50 p-2 text-foreground"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-background text-foreground md:hidden flex flex-col pt-32 px-6"
          >
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%", transition: { duration: 1.2, delay: 0.1 } }}
                className="h-[1px] bg-foreground/10 mb-4"
              />

              <motion.div
                className="flex flex-col gap-6"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={mobileItemVariants}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="group flex items-center justify-between py-2"
                    >
                      <span className="text-4xl font-serif font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                      <CaretRightIcon
                        size={24}
                        className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={mobileItemVariants} className="mt-8">
                  <button
                    onClick={openModal}
                    className="text-left text-lg cursor-pointer font-medium text-neutral-500 hover:text-foreground transition-colors"
                  >
                    Book a call &rarr;
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 2000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] font-sans bg-neutral-900/40 backdrop-blur-md"
          />

          <div className="fixed inset-0 z-[70] flex **:font-sans items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="bg-background w-full max-w-lg shadow-2xl rounded-[2rem] p-8 md:p-10 pointer-events-auto relative overflow-hidden"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-foreground hover:bg-neutral-100 rounded-full transition-all"
              >
                <XIcon size={24} />
              </button>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                      <CheckCircleIcon size={40} weight="duotone" />
                    </div>
                    <h3 className="text-3xl font-medium mb-2 tracking-tight">Request Received.</h3>
                    <p className="text-neutral-500">Our team will coordinate a schedule shortly.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 block">
                        Consultation
                      </span>
                      <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                        Book a <span className="text-neutral-400">Call.</span>
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                        <input
                          required
                          name="name"
                          id="name"
                          placeholder="Ex. John Doe"
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-neutral-900 focus:ring-0 outline-none transition-all placeholder:text-neutral-300"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                          <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="john@company.com"
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-neutral-900 focus:ring-0 outline-none transition-all placeholder:text-neutral-300"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Contact No.</label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-neutral-900 focus:ring-0 outline-none transition-all placeholder:text-neutral-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Brief Context</label>
                        <textarea
                          required
                          name="message"
                          id="message"
                          rows={3}
                          placeholder="Tell us about your project requirements..."
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-neutral-900 focus:ring-0 outline-none transition-all resize-none placeholder:text-neutral-300"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="mt-4 w-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-800 active:scale-[0.98] transition-all disabled:opacity-70 disabled:pointer-events-none group"
                      >
                        {status === "loading" ? (
                          <>
                            <CircleNotchIcon size={18} className="animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Confirm Schedule</span>
                            <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      {status === "error" && (
                        <p className="text-red-500 text-xs text-center font-medium">Network error. Please try again.</p>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
