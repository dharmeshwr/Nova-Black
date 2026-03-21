"use client";

import {
  TargetIcon,
  EyeIcon,
  ShieldCheckIcon,
  LightningIcon,
  BrainIcon,
  ChatCircleTextIcon,
  TwitterLogoIcon,
  LinkedinLogoIcon,
  InstagramLogoIcon,
} from '@phosphor-icons/react';
import { Easing, motion, Variants } from 'motion/react';

const sharpEase: Easing = [0.16, 1, 0.3, 1];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: sharpEase }
  },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: sharpEase }
  },
};

const bentoItem: Variants = {
  hidden: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: sharpEase }
  }
};

export default function AboutDark() {
  const features = [
    {
      title: "Domain Expertise",
      desc: "Deep hands-on experience across diverse sectors crafting tailored digital solutions.",
      icon: BrainIcon,
      colSpan: "md:col-span-2"
    },
    {
      title: "Efficient Delivery",
      desc: "Agile processes ensuring on-time delivery without compromising performance.",
      icon: LightningIcon,
      colSpan: "md:col-span-1"
    },
    {
      title: "Security Core",
      desc: "Products secured by design—protecting data, users, and systems from day one.",
      icon: ShieldCheckIcon,
      colSpan: "md:col-span-1"
    },
    {
      title: "Transparent Comms",
      desc: "Clear updates, honest feedback, and no hidden surprises at every stage.",
      icon: ChatCircleTextIcon,
      colSpan: "md:col-span-2"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-zinc-50">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="pt-32 px-6 md:px-12 border-b border-zinc-900 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div variants={slideRight} className="lg:col-span-9">
            <span className="inline-flex items-center gap-2 mb-8 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-400">
              <div className="w-2 h-2 rounded-full bg-zinc-50 animate-pulse" />
              Boby Ventures Pvt Ltd
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] uppercase tracking-tighter leading-[0.85]">
              Engineer <br />
              <span className="text-zinc-500">Success.</span>
            </h1>
          </motion.div>

          <motion.div variants={slideRight} className="lg:col-span-3 flex flex-col justify-end gap-8 pb-4">
            <p className="text-zinc-400 text-lg border-l-2 border-zinc-800 pl-4">
              Mathematical precision combined with creative consultancy.
            </p>
            <div className="bg-zinc-900 p-6 border border-zinc-800">
              <span className="block text-7xl tracking-tighter mb-2">04</span>
              <span className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Years of Excellence</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. MISSION & VISION: Massive Side-by-Side Typography */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 px-6 md:px-12 border-b border-zinc-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-900">
          <motion.div variants={slideUp} className="md:pr-16 pb-16 md:pb-0">
            <TargetIcon size={48} weight="fill" className="text-zinc-700 mb-8" />
            <h3 className="text-4xl mb-6">Empower & Escalate</h3>
            <p className="text-zinc-400 text-xl leading-relaxed">
              To empower businesses with secure, scalable, and future-ready IT solutions. Our mission is rooted in excellence, driving growth from startups to enterprise giants through continuous innovation.
            </p>
          </motion.div>

          <motion.div variants={slideUp} className="md:pl-16 pt-16 md:pt-0">
            <EyeIcon size={48} weight="fill" className="text-zinc-700 mb-8" />
            <h3 className="text-4xl mb-6">Strategy Driven</h3>
            <p className="text-zinc-400 text-xl leading-relaxed">
              To be the trusted technology partner that makes high-end innovation accessible. We aim to enhance performance and customer experiences through strategy-driven architecture.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 px-6 md:px-12 bg-zinc-950"
      >
        <motion.div variants={slideUp} className="mb-16">
          <h2 className="text-5xl uppercase tracking-tighter">The Principles</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {features.map((feat, i) => (
            <motion.div
              variants={bentoItem}
              key={i}
              className={`bg-zinc-900/50 border border-zinc-800 p-8 flex flex-col justify-between hover:bg-zinc-900 transition-colors group ${feat.colSpan}`}
            >
              <div className="flex justify-between items-start">
                <feat.icon size={32} weight="duotone" className="text-zinc-400 group-hover:text-zinc-50 transition-colors" />
                <span className="text-zinc-700 font-mono text-sm">0{i + 1}</span>
              </div>
              <div>
                <h4 className="text-2xl mb-3">{feat.title}</h4>
                <p className="text-zinc-400">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
        className="px-6 md:px-12 py-32"
      >
        <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div variants={slideRight} className="md:col-span-8">
            <h3 className="text-3xl md:text-5xl font-medium leading-tight mb-8">
              "We established BVPL to bring enterprise-grade reliability to the agile world. We operate not just as developers, but as growth partners committed to long-term digital maturity."
            </h3>
          </motion.div>

          <motion.div variants={slideRight} className="md:col-span-4 md:border-l md:border-zinc-800 md:pl-12 flex flex-col gap-6">
            <div>
              <p className="text-2xl text-zinc-50">Boby Choudhary</p>
              <p className="text-zinc-500 font-mono text-sm mt-1 uppercase">Founder</p>
            </div>
            <div className="flex gap-4 text-zinc-500">
              <a href="https://linkedin.com" className="hover:text-zinc-50 transition-colors bg-zinc-950 p-3 rounded-sm border border-zinc-800 hover:border-zinc-600"><LinkedinLogoIcon size={20} weight="fill" /></a>
              <a href="https://x.com" className="hover:text-zinc-50 transition-colors bg-zinc-950 p-3 rounded-sm border border-zinc-800 hover:border-zinc-600"><TwitterLogoIcon size={20} weight="fill" /></a>
              <a href="https://instagram.com" className="hover:text-zinc-50 transition-colors bg-zinc-950 p-3 rounded-sm border border-zinc-800 hover:border-zinc-600"><InstagramLogoIcon size={20} weight="fill" /></a>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}
