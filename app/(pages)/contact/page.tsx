"use client";

import {
  ArrowRightIcon,
  MapPinIcon,
  EnvelopeSimpleIcon,
  PhoneCallIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  GlobeHemisphereWestIcon,
  ArrowUpRightIcon,
  LinkedinLogoIcon
} from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function Contact() {

  const contactMethods = [
    {
      id: "email",
      label: "General Inquiries",
      value: "info@bobyventures.com",
      action: "Send Message",
      href: "mailto:info@bobyventures.com",
      icon: EnvelopeSimpleIcon,
      highlight: true
    },
    {
      id: "phone",
      label: "Direct Voice Line",
      value: "+91 7351515156",
      sub: "Mon–Fri, 10:00–18:00 IST",
      action: "Call Now",
      href: "tel:+917351515156",
      icon: PhoneCallIcon
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com", icon: LinkedinLogoIcon },
    { name: "Twitter / X", href: "https://x.com", icon: TwitterLogoIcon },
    { name: "Instagram", href: "#", icon: InstagramLogoIcon },
    { name: "Website", href: "#", icon: GlobeHemisphereWestIcon },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-neutral-200 pt-24 pb-12">

      <section className="px-6 md:px-10 my-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-6xl font-light tracking-tight leading-[0.9] mb-8">
              Let&apos;s start a
              <span className="ml-1 font-serif italic text-neutral-400">conversation.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed ml-2">
              Ready to engineer your next solution? Reach out via our secure channels below.
              Response time typically under 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 mb-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">

          <div className="lg:w-7/12 flex flex-col gap-6">

            {contactMethods.map((method, idx) => (
              <motion.a
                key={method.id}
                href={method.href}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                className={cn(
                  "group relative p-8 md:p-12 rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between overflow-hidden min-h-[300px]",
                  method.highlight
                    ? "bg-foreground text-background"
                    : "bg-neutral-50 hover:bg-neutral-100 text-foreground"
                )}
              >
                <method.icon
                  weight="fill"
                  className={cn(
                    "absolute -right-8 -bottom-8 opacity-[0.05] transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12",
                    method.highlight ? "text-background" : "text-foreground"
                  )}
                  size={200}
                />

                <div className="relative z-10 flex justify-between items-start">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border",
                    method.highlight ? "border-white/20 text-neutral-300" : "border-black/10 text-neutral-500"
                  )}>
                    {method.label}
                  </span>
                  <div className={cn(
                    "p-3 rounded-full transition-colors",
                    method.highlight ? "bg-white/10 text-white" : "bg-black/5 text-black"
                  )}>
                    <ArrowUpRightIcon size={24} />
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className={cn(
                    "font-medium tracking-tight mb-2 break-all",
                    method.highlight ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl"
                  )}>
                    {method.value}
                  </h3>
                  {method.sub && (
                    <p className={cn("text-sm", method.highlight ? "text-neutral-400" : "text-neutral-500")}>
                      {method.sub}
                    </p>
                  )}

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    <span>{method.action}</span>
                    <ArrowRightIcon />
                  </div>
                </div>
              </motion.a>
            ))}

          </div>

          <div className="lg:w-5/12 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative h-[400px] lg:h-full min-h-[400px] rounded-[2.5rem] overflow-hidden bg-neutral-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4258.394932957133!2d77.5032619!3d27.7234438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397315c1186ae06f%3A0x8cc7b14d30e937ba!2sBoby%20Ventures%20Private%20Limited!5e1!3m2!1sen!2sin!4v1773475517816!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-50 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-neutral-50 rounded-[2.5rem] p-8 md:p-10"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Social Grid</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="group flex items-center gap-3 p-4 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
                  >
                    <link.icon size={24} className="text-neutral-400 group-hover:text-foreground transition-colors" />
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
