"use client";

import React from 'react';
import {
  ArrowRightIcon,
  DeviceMobileIcon,
  PlugsConnectedIcon,
  BuildingsIcon,
  CloudIcon,
  GitMergeIcon,
  BezierCurveIcon,
  ShieldCheckIcon,
  FacebookLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  CodeIcon,
  WarningIcon,
  Icon
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

const rowVariants: Variants = {
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

export default function ServicesDark() {
  const services: { title: string; description: string; icon: Icon; subtext: string; isCompliance?: boolean; warningText?: string }[] = [
    {
      title: "Software Development",
      description: "End-to-end engineering of robust software ecosystems. We translate complex business requirements into high-performance, scalable custom solutions using modern agile methodologies.",
      icon: CodeIcon,
      subtext: "Full-cycle development from concept to deployment."
    },
    {
      title: "Web & Mobile App",
      description: "Cross-platform excellence using Flutter and React. We architect seamless user experiences that maintain consistency and performance across all devices and operating systems.",
      icon: DeviceMobileIcon,
      subtext: "Accelerated deployment with enterprise-grade architecture."
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud-native strategy on AWS and Azure. We focus on automated scaling, CI/CD pipelines, and cost-efficiency to ensure 99.9% uptime reliability for mission-critical apps.",
      icon: CloudIcon,
      subtext: "Reducing technical debt through optimized resource allocation."
    },
    {
      title: "Systems & APIs",
      description: "Unify your technology stack with bespoke API orchestrations. We bridge disparate systems via REST, SOAP, and GraphQL to eliminate operational silos and optimize data flow.",
      icon: PlugsConnectedIcon,
      subtext: "Secure, high-throughput system orchestration.",
    },
    {
      title: "Internal Tools",
      description: "Empower your team with custom dashboards and automated workflows. We utilize n8n, Zapier, and event-driven webhooks to reduce manual overhead and improve reporting accuracy.",
      icon: GitMergeIcon,
      subtext: "Custom BI dashboards and workflow optimization tools."
    },
    {
      title: "Cybersecurity",
      description: "Rigorous protection for your digital assets. We combine automated testing suites with zero-trust security principles to ensure resilience against threats and bugs.",
      icon: ShieldCheckIcon,
      subtext: "Full-spectrum load testing and vulnerability audits."
    },
    {
      title: "UI/UX Design",
      description: "Where aesthetics meet utility. Our design philosophy centers on intuitive navigation and visual storytelling that boosts engagement while maintaining a mobile-first perspective.",
      icon: BezierCurveIcon,
      subtext: "User-centric interfaces optimized for every screen."
    },
    {
      title: "IT Architecture",
      description: "Building the backbone of modern business. We design scalable backend architectures and provide strategic roadmaps to support high-volume operations without compromising speed.",
      icon: BuildingsIcon,
      subtext: "Securing data integrity across complex internal networks."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-zinc-50">

      {/* 1. HERO: Stark, Asymmetrical, Thin Typography */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-zinc-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
        >
          <motion.div variants={fadeVariants} className="lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] uppercase tracking-tight leading-[0.85] text-zinc-50">
              Technical <br />
              <span className="text-zinc-600">Excellence.</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeVariants} className="lg:col-span-4 pb-4">
            <p className="text-lg text-zinc-400 font-light leading-relaxed border-t border-zinc-900 pt-6">
              We engineer the digital foundations of modern enterprise. From initial architecture to final deployment, our solutions are built for global scale, absolute security, and speed.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SERVICES LEDGER: Strict Grid, No Heavy Fonts */}
      <section className="border-b border-zinc-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="flex flex-col"
        >
          {services.map((service, index) => (
            <motion.div
              variants={rowVariants}
              key={index}
              className="group grid grid-cols-1 md:grid-cols-12 border-b border-zinc-900 last:border-none hover:bg-zinc-900/30 transition-colors duration-300"
            >
              {/* Meta Column */}
              <div className="md:col-span-3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-zinc-900 flex flex-row md:flex-col justify-between items-start">
                <span className="text-sm font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <service.icon
                  size={32}
                  weight="light"
                  className="text-zinc-700 group-hover:text-zinc-300 transition-colors"
                />
              </div>

              {/* Content Column */}
              <div className="md:col-span-9 p-6 md:p-12 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                  <div>
                    <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-6 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    {service.subtext && (
                      <span className="inline-block px-3 py-1 border border-zinc-800 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                        {service.subtext}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-6">
                    <p className="text-zinc-400 font-light leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Compliance/Warning Block */}
                    {service.isCompliance && (
                      <div className="bg-zinc-900/50 border border-zinc-800 p-4 flex gap-4 items-start">
                        <WarningIcon size={20} className="text-zinc-500 shrink-0 mt-0.5" />
                        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
                          {service.warningText}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. CTA: Brutalist Block */}
      <section className="px-6 md:px-12 py-32 bg-zinc-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeVariants}
          className="max-w-screen-2xl mx-auto border border-zinc-900 p-8 md:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12"
        >
          <div>
            <span className="block text-sm font-mono uppercase tracking-widest text-zinc-500 mb-8">
              Initiate Project
            </span>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight leading-[1.1] max-w-3xl">
              Transform your vision into <span className="text-zinc-600">deployed reality.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-12">
            <button className="group flex items-center gap-4 border border-zinc-700 px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-300">
              Consult Engineers
              <ArrowRightIcon size={16} weight="light" className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex gap-4 border-t border-zinc-900 pt-6">
              {[FacebookLogoIcon, TwitterLogoIcon, InstagramLogoIcon, LinkedinLogoIcon].map((Icon, i) => (
                <a key={i} href="#" className="text-zinc-600 hover:text-zinc-50 transition-colors duration-300">
                  <Icon size={24} weight="light" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
