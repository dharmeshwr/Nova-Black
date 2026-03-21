"use client";

import {
  DeviceMobile,
  PenNib,
  Cube,
  Trophy,
  Megaphone,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "01",
    title: "Web & mobile apps",
    description: "Native and cross-platform applications built for ultimate performance, scalability, and seamless user experiences.",
    icon: DeviceMobile,
    className: "md:col-span-2 md:row-span-1",
    gradient: "group-hover:from-blue-500/10 group-hover:to-cyan-500/10",
    iconColor: "text-cyan-400"
  },
  {
    id: "02",
    title: "UX & product design",
    description: "Data-driven user interfaces and intuitive experiences that connect your brand with your audience on a deeper, functional level.",
    icon: PenNib,
    className: "md:col-span-1 md:row-span-2",
    gradient: "group-hover:from-purple-500/10 group-hover:to-pink-500/10",
    iconColor: "text-pink-400"
  },
  {
    id: "03",
    title: "Product development",
    description: "From ideation to deployment, we engineer scalable platforms.",
    icon: Cube,
    className: "md:col-span-1 md:row-span-1",
    gradient: "group-hover:from-emerald-500/10 group-hover:to-teal-500/10",
    iconColor: "text-emerald-400"
  },
  {
    id: "04",
    title: "Communication design",
    description: "Crafting compelling brand narratives through visual storytelling.",
    icon: Megaphone,
    className: "md:col-span-1 md:row-span-1",
    gradient: "group-hover:from-orange-500/10 group-hover:to-amber-500/10",
    iconColor: "text-amber-400"
  },
  {
    id: "05",
    title: "Award-class web design",
    description: "Visually stunning, high-performance websites that break the mold, tell your story, and leave a lasting impression.",
    icon: Trophy,
    className: "md:col-span-3 md:row-span-1",
    gradient: "group-hover:from-indigo-500/10 group-hover:to-violet-500/10",
    iconColor: "text-indigo-400"
  },
];

export default function ServicesBentoGrid() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-zinc-50 font-sans px-6 md:px-10 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Our Capabilities
          </h2>
          <p className="text-zinc-400 text-lg">
            Comprehensive digital solutions built for modern brands.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "group relative overflow-hidden bg-zinc-900/50 border border-zinc-800/50 p-8 transition-all duration-500 hover:border-zinc-700 hover:shadow-2xl flex flex-col justify-between",
                service.className
              )}
            >
              {/* Animated Background Gradient */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 ease-out z-0",
                service.gradient
              )} />

              {/* Top Row: Icon & Number */}
              <div className="relative z-10 flex justify-between items-start">
                <div className={cn("p-3 bg-zinc-950/50 border border-zinc-800/50 backdrop-blur-sm", service.iconColor)}>
                  <service.icon size={28} weight="duotone" />
                </div>
                <span className="font-mono text-sm text-zinc-600 group-hover:text-zinc-300 transition-colors">
                  {service.id}
                </span>
              </div>

              {/* Bottom Row: Text content */}
              <div className="relative z-10 mt-auto">
                <h4 className="text-2xl font-semibold tracking-tight mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                  {service.title}
                </h4>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>
              </div>

              {/* Decorative Large Background Icon */}
              <service.icon
                weight="fill"
                className="absolute -bottom-8 -right-8 text-zinc-800/20 w-48 h-48 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 ease-out z-0"
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
