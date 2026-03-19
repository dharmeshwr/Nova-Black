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
  WarningIcon
} from '@phosphor-icons/react';
import { Easing, motion, Variants } from 'motion/react';

const luxuryEase: Easing = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: luxuryEase }
  },
};

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: luxuryEase }
  }
};

export default function About() {
  const features = [
    {
      title: "Domain Expertise",
      desc: "Deep hands-on experience across diverse sectors crafting tailored digital solutions.",
      icon: BrainIcon
    },
    {
      title: "Efficient Delivery",
      desc: "Agile processes ensuring on-time delivery without compromising performance.",
      icon: LightningIcon
    },
    {
      title: "Security Core",
      desc: "Products secured by design—protecting data, users, and systems from day one.",
      icon: ShieldCheckIcon
    },
    {
      title: "Transparent Comms",
      desc: "Clear updates, honest feedback, and no hidden surprises at every stage.",
      icon: ChatCircleTextIcon
    }
  ];

  const servicesList = [
    "API Integration & Business Automation",
    "Web & Mobile App Development",
    "Third-Party Platform Integration",
    "Cloud Infrastructure & DevOps (AWS & Azure)",
    "UI/UX Design & Product Engineering",
    "Software Testing & Quality Assurance",
    "Cybersecurity Consulting",
    "Custom Software & Internal Tools",
    "IT Infrastructure Support"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-neutral-200">

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative pt-32 pb-24 px-6 md:px-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <span className="inline-block mb-6 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400">
              Boby Ventures Pvt Ltd
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8">
              Engineering <br className="hidden md:block" />
              <span className="font-serif italic text-neutral-500">Digital Success.</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              We provide the mathematical precision of software engineering combined with the creative problem-solving of a consultancy.
            </p>

            <div className="mt-12 flex justify-center items-baseline gap-2">
              <span className="text-6xl font-light tracking-tighter">04</span>
              <span className="text-sm font-bold uppercase tracking-widest text-neutral-400">Years of<br />Excellence</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="px-6 md:px-10 mb-32"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-neutral-100 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-6">
              <TargetIcon size={32} weight="duotone" className="text-neutral-900" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Mission Statement</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">Empower & Escalate.</h3>
            <p className="text-neutral-500 text-lg leading-relaxed">
              To empower businesses with secure, scalable, and future-ready IT solutions. Our mission is rooted in excellence, driving growth from startups to enterprise giants through continuous innovation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-neutral-100 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500 ease-out" />
            <div className="flex items-center gap-4 mb-6">
              <EyeIcon size={32} weight="duotone" className="text-neutral-900" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Future Vision</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">Strategy Driven.</h3>
            <p className="text-neutral-500 text-lg leading-relaxed">
              To be the trusted technology partner that makes high-end innovation accessible. We aim to enhance performance and customer experiences through strategy-driven architecture.
            </p>
          </motion.div>

        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="bg-foreground text-background py-32 px-6 md:px-10 rounded-t-[3rem]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.h2 variants={itemVariants} className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-4">Core Principles</motion.h2>
            <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-light">Why partner with BVPL?</motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {features.map((feat, i) => (
              <motion.div variants={itemVariants} key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-300 mb-2">
                  <feat.icon size={24} weight="light" />
                </div>
                <h4 className="text-xl font-medium">{feat.title}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-[250px]">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-32 px-6 md:px-10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <motion.div variants={scaleVariants} className="flex-1 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 block">
              The Leadership
            </span>
            <h3 className="text-4xl md:text-5xl font-serif italic mb-2">Boby Choudhary</h3>
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-900 mb-8">Founder </p>

            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              &quot;We established BVPL to bring enterprise-grade reliability to the agile world. We operate not just as developers, but as growth partners committed to long-term digital maturity.&quot;
            </p>

            <div className="flex justify-center gap-6 text-neutral-400">
              <a href="https://www.linkedin.com/" className="hover:text-foreground transition-colors"><LinkedinLogoIcon size={24} /></a>
              <a href="https://x.com" className="hover:text-foreground transition-colors"><TwitterLogoIcon size={24} /></a>
              <a href="https://instagram.com" className="hover:text-foreground transition-colors"><InstagramLogoIcon size={24} /></a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className=" px-6 md:px-10"
      >
        <motion.div variants={scaleVariants} className="max-w-4xl mx-auto bg-neutral-50 rounded-3xl p-8 md:p-16">
          <div className="flex items-baseline justify-between mb-12 border-b border-neutral-200 pb-6">
            <h2 className="text-2xl font-medium">Technical Capabilities</h2>
          </div>

          <div className="columns-1 md:columns-2 gap-x-12 space-y-4">
            {servicesList.map((service, i) => (
              <motion.div variants={itemVariants} key={i} className="break-inside-avoid flex items-start gap-3 group cursor-default py-2">
                <span className="text-xs font-mono text-neutral-300 group-hover:text-neutral-900 transition-colors pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base text-neutral-600 group-hover:text-foreground transition-colors">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
