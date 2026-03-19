"use client";

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
  CodeIcon
} from '@phosphor-icons/react';
import { motion } from 'motion/react';

export default function Services() {

  const services = [
    {
      title: "Software Development",
      description: "End-to-end engineering of robust software ecosystems. We translate complex business requirements into high-performance, scalable custom solutions using modern agile methodologies.",
      icon: CodeIcon,
      subtext: "Full-cycle development from concept to deployment."
    },
    {
      title: "Web & Mobile Applications",
      description: "Cross-platform excellence using Flutter and React. We architect seamless user experiences that maintain consistency and performance across all devices and operating systems.",
      icon: DeviceMobileIcon,
      subtext: "Accelerated deployment with enterprise-grade architecture."
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "Cloud-native strategy on AWS and Azure. We focus on automated scaling, CI/CD pipelines, and cost-efficiency to ensure 99.9% uptime reliability for mission-critical apps.",
      icon: CloudIcon,
      subtext: "Reducing technical debt through optimized resource allocation."
    },
    {
      title: "Systems Integration & APIs",
      description: "Unify your technology stack with bespoke API orchestrations. We bridge disparate systems via REST, SOAP, and GraphQL to eliminate operational silos and optimize data flow.",
      icon: PlugsConnectedIcon,
      isCompliance: true,
      warningText: "Boby Ventures Private Limited operates strictly as a technical integrator. We do not handle, store, or process financial assets directly."
    },
    {
      title: "Automation & Internal Tools",
      description: "Empower your team with custom dashboards and automated workflows. We utilize n8n, Zapier, and event-driven webhooks to reduce manual overhead and improve reporting accuracy.",
      icon: GitMergeIcon,
      subtext: "Custom BI dashboards and workflow optimization tools."
    },
    {
      title: "Cybersecurity & Testing",
      description: "Rigorous protection for your digital assets. We combine automated testing suites (Selenium/Cypress) with zero-trust security principles to ensure resilience against threats and bugs.",
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
      title: "IT Consulting & Architecture",
      description: "Building the backbone of modern business. We design scalable backend architectures and provide strategic roadmaps to support high-volume operations without compromising speed.",
      icon: BuildingsIcon,
      subtext: "Securing data integrity across complex internal networks."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-32 pb-24 selection:bg-neutral-200">

      {/* Hero Section */}
      <section className="px-6 md:px-10 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-light tracking-tight leading-[0.9] mb-8">
              Technical
              <span className="ml-4 font-serif italic text-neutral-400">Excellence.</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between">
              <p className="max-w-xl text-lg md:text-xl text-neutral-600 leading-relaxed">
                We engineer the digital foundations of modern enterprise. From the initial architecture to final deployment, our solutions are built for global scale, absolute security, and speed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-10 mb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col"
            >
              <div className="mb-8 relative">
                <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-500">
                  <service.icon size={32} weight="light" />
                </div>
                <span className="absolute -top-4 -right-4 text-6xl font-serif text-neutral-100 -z-10 group-hover:text-neutral-200 transition-colors">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-medium mb-4 pr-4 leading-tight group-hover:underline decoration-1 underline-offset-4 decoration-neutral-300">
                {service.title}
              </h3>

              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="mt-auto">
                {service.subtext && (
                  <div className="flex items-start gap-2 pt-4 border-t border-neutral-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-1.5 shrink-0" />
                    <span className="text-xs font-medium text-neutral-400 italic">
                      {service.subtext}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-900 text-neutral-50 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">

            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neutral-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 justify-between items-start lg:items-end">
              <div className="max-w-2xl">
                <span className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
                  The Next Phase
                </span>
                <h2 className="text-4xl md:text-5xl font-light mb-8">
                  Transform your vision into <span className="font-serif italic text-neutral-400">deployed reality.</span>
                </h2>

                <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors">
                  Consult our Engineers
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex gap-4">
                {[FacebookLogoIcon, TwitterLogoIcon, InstagramLogoIcon, LinkedinLogoIcon].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
