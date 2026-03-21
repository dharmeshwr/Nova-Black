"use client";

import {
  ArrowRightIcon,
  EnvelopeSimpleIcon,
  PhoneCallIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  GlobeHemisphereWestIcon,
  ArrowUpRightIcon,
  LinkedinLogoIcon,
  MapPinIcon
} from '@phosphor-icons/react';
import { Easing, motion, Variants } from 'motion/react';

const sharpEase: Easing = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: sharpEase }
  },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: sharpEase }
  }
};

export default function ContactDark() {

  const contactMethods = [
    {
      id: "email",
      label: "General Inquiries",
      value: "novablacketechprivatelimited@gmail.com",
      action: "Transmit Email",
      href: "mailto:novablacketechprivatelimited@gmail.com",
      icon: EnvelopeSimpleIcon,
    },
    {
      id: "phone",
      label: "Direct Voice Line",
      value: "+91 6393883301",
      sub: "Mon–Fri, 10:00–18:00 IST",
      action: "Initiate Call",
      href: "tel:+916393883301",
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
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-zinc-50 pt-32 pb-24">

      {/* 1. HERO: Stark Typography */}
      <section className="px-6 md:px-12 mb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-screen-2xl mx-auto"
        >
          <motion.h1 variants={fadeVariants} className="text-6xl md:text-8xl lg:text-[9rem] uppercase tracking-tight leading-[0.85] text-zinc-50 mb-8">
            Establish <br />
            <span className="text-zinc-600">Contact.</span>
          </motion.h1>
          <motion.p variants={fadeVariants} className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            Ready to engineer your next solution? Reach out via our secure channels. Response sequence typically initiated under 24 hours.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. MAIN GRID: Strict Ledger Layout */}
      <section className="border-t border-zinc-900">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12">

          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-7 flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-900">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={method.id}
                href={method.href}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideRight}
                className="group relative p-8 md:p-16 border-b border-zinc-900 last:border-b-0 hover:bg-zinc-900/30 transition-colors duration-500 flex flex-col justify-between min-h-[350px]"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="flex items-center gap-4">
                    <method.icon size={24} weight="light" className="text-zinc-500 group-hover:text-zinc-50 transition-colors" />
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                      {method.label}
                    </span>
                  </div>
                  <ArrowUpRightIcon size={24} weight="light" className="text-zinc-700 group-hover:text-zinc-50 transition-colors transform group-hover:rotate-45" />
                </div>

                <div>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 group-hover:text-white transition-colors break-words">
                    {method.value}
                  </h3>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">
                    {method.sub ? (
                      <p className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
                        {method.sub}
                      </p>
                    ) : <div />}

                    <div className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-zinc-400 group-hover:text-zinc-50 transition-colors">
                      {method.action}
                      <ArrowRightIcon size={16} weight="light" className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right Column: Map & Socials */}
          <div className="lg:col-span-5 flex flex-col">

            {/* Map Frame */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeVariants}
              className="h-[400px] lg:h-[500px] w-full relative bg-zinc-950 border-b border-zinc-900 flex flex-col"
            >
              <div className="p-4 border-b border-zinc-900 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Location Coordinates</span>
                <MapPinIcon size={16} weight="light" className="text-zinc-600" />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3602.4030412120796!2d81.648!3d25.458213999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI3JzI5LjYiTiA4McKwMzgnNTIuOCJF!5e0!3m2!1sen!2sin!4v1774114927162!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="flex-1 grayscale opacity-40 hover:opacity-80 transition-opacity duration-700"
              />
            </motion.div>

            {/* Social Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeVariants}
              className="flex-1 flex flex-col"
            >
              <div className="p-6 border-b border-zinc-900">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Social Network</h4>
              </div>

              <div className="grid grid-cols-2 flex-1">
                {socialLinks.map((link, i) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className={`group flex flex-col justify-center items-center gap-4 p-8 border-zinc-900 hover:bg-zinc-50 hover:text-zinc-950 transition-colors duration-300
                      ${i % 2 === 0 ? 'border-r' : ''} 
                      ${i < 2 ? 'border-b' : ''}
                    `}
                  >
                    <link.icon size={32} weight="light" className="text-zinc-600 group-hover:text-zinc-950 transition-colors" />
                    <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 group-hover:text-zinc-950 transition-colors">
                      {link.name}
                    </span>
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
