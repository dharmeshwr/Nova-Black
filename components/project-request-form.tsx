"use client";

import { useState, FormEvent } from "react";
import { motion, Variants, Easing } from "motion/react";
import { ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react";

const sharpEase: Easing = [0.16, 1, 0.3, 1];

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: sharpEase } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000 – ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Flexible",
];

const SERVICE_OPTIONS = [
  "Web & Mobile Apps",
  "UX & Product Design",
  "Product Development",
  "Communication Design",
  "Award-Class Web Design",
  "Software Development",
  "E-Commerce Development",
  "Business Consultancy",
  "Cloud & DevOps",
  "Systems & APIs",
  "Internal Tools",
  "Cybersecurity",
  "IT Architecture",
  "Other / Not sure",
];

export default function ProjectRequestForm({
  defaultService,
}: {
  defaultService?: string;
}) {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("success");
  };

  return (
    <section className="px-6 md:px-12 py-24 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left: heading */}
          <motion.div variants={fadeUp} className="lg:sticky lg:top-32">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Start a project
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-light uppercase tracking-tight leading-[1.1]">
              Tell us about
              <br />
              <span className="text-zinc-600">your vision.</span>
            </h2>
            <p className="mt-8 text-zinc-400 font-light leading-relaxed max-w-sm">
              Fill in the brief below and our team will review your project
              requirements and reach out within 24 hours.
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div variants={fadeIn}>
            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: sharpEase }}
                className="border border-zinc-800 p-12 flex flex-col items-start gap-6"
              >
                <CheckCircleIcon
                  size={40}
                  weight="light"
                  className="text-zinc-300"
                />
                <div>
                  <h3 className="text-2xl font-light uppercase tracking-tight mb-2">
                    Request received.
                  </h3>
                  <p className="text-zinc-500 font-light leading-relaxed">
                    We&apos;ve logged your project brief. Our team will review
                    the details and be in touch within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-200 transition-colors border-b border-zinc-700 pb-0.5"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 border border-zinc-900 p-8 md:p-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Full Name" required>
                    <input
                      required
                      name="name"
                      placeholder="Jane Doe"
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Email Address" required>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="jane@company.com"
                      className="form-input"
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Phone Number">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Company / Organisation">
                    <input
                      name="company"
                      placeholder="Acme Corp"
                      className="form-input"
                    />
                  </FormField>
                </div>

                <FormField label="Service Required" required>
                  <select
                    required
                    name="service"
                    defaultValue={defaultService ?? ""}
                    className="form-input"
                  >
                    {!defaultService && (
                      <option value="" disabled>
                        Select a service
                      </option>
                    )}
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </FormField>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Budget Range" required>
                    <select
                      required
                      name="budget"
                      defaultValue=""
                      className="form-input"
                    >
                      <option value="" disabled>
                        Select range
                      </option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </FormField>
                  <FormField label="Desired Timeline" required>
                    <select
                      required
                      name="timeline"
                      defaultValue=""
                      className="form-input"
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>
                      {TIMELINE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <FormField label="Project Description" required>
                  <textarea
                    required
                    name="description"
                    rows={5}
                    placeholder="Describe what you're looking to build, key requirements, and any constraints we should know about..."
                    className="form-input resize-none"
                  />
                </FormField>

                <button
                  type="submit"
                  className="group mt-2 flex items-center justify-between border border-zinc-700 px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-300"
                >
                  Submit Project Brief
                  <ArrowRightIcon
                    size={16}
                    weight="light"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
        {label}
        {required && <span className="text-zinc-700 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
