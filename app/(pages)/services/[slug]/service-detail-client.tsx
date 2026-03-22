"use client";

import { motion, Variants, Easing } from "motion/react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { ServiceDetail } from "@/lib/services-data";
import ProjectRequestForm from "@/components/project-request-form";

const sharpEase: Easing = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: sharpEase } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};


export default function ServiceDetailClient({ service }: { service: ServiceDetail }) {
  return (
    <div className="bg-zinc-950 text-zinc-50 font-sans min-h-screen">
      {/* ── Back link ── */}
      <div className="px-6 md:px-12 pt-8 max-w-screen-2xl mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-200 transition-colors group"
        >
          <ArrowLeftIcon
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          All Services
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="px-6 md:px-12 pt-16 pb-20 border-b border-zinc-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
        >
          <motion.div variants={fadeUp} className="lg:col-span-8">
            <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
              {service.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] uppercase tracking-tight leading-[0.88] text-zinc-50">
              {service.title.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-zinc-600">
                    {word}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="lg:col-span-4 pb-2 border-t border-zinc-900 pt-6"
          >
            <p className="text-xl font-light text-zinc-300 mb-4 leading-snug">
              {service.tagline}
            </p>
            <p className="text-zinc-400 font-light leading-relaxed">
              {service.description}
            </p>
            {service.pricing && (
              <span className="inline-block mt-6 px-3 py-1.5 border border-zinc-700 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {service.pricing}
              </span>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 md:px-12 py-24 border-b border-zinc-900">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Capabilities
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-light uppercase tracking-tight">
                What&apos;s included
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-zinc-950 p-8 hover:bg-zinc-900/60 transition-colors duration-300 group"
                >
                  <span className="block text-xs font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-6 md:px-12 py-24 border-b border-zinc-900">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                How we work
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-light uppercase tracking-tight">
                Our process
              </h2>
            </motion.div>

            <div className="flex flex-col">
              {service.process.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="grid grid-cols-1 md:grid-cols-12 border-b border-zinc-900 last:border-none py-8 md:py-12 gap-6 md:gap-0 group"
                >
                  <div className="md:col-span-2 flex items-start">
                    <span className="text-4xl font-mono text-zinc-800 group-hover:text-zinc-600 transition-colors leading-none">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-medium tracking-tight group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-zinc-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="px-6 md:px-12 py-24 border-b border-zinc-900">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeUp}>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Deliverables
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-light uppercase tracking-tight">
                What you&apos;ll receive
              </h2>
              <p className="mt-6 text-zinc-400 font-light leading-relaxed">
                Every engagement ends with a complete, documented handover —
                giving your team full ownership of the work.
              </p>
            </motion.div>

            <motion.ul variants={stagger} className="flex flex-col gap-0">
              {service.deliverables.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-4 py-4 border-b border-zinc-900 last:border-none group"
                >
                  <ArrowRightIcon
                    size={14}
                    className="text-zinc-700 group-hover:text-zinc-400 shrink-0 transition-colors"
                  />
                  <span className="text-zinc-300 font-light group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      <ProjectRequestForm defaultService={service.title} />
    </div>
  );
}
