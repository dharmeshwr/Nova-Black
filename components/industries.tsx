'use client'
import {
  ArrowRightIcon,
  BuildingsIcon,
  GraduationCapIcon,
  ShoppingCartIcon,
  FilmSlateIcon,
  HeartbeatIcon
} from "@phosphor-icons/react";

const industries = [
  {
    id: "healthtech",
    title: "Healthcare",
    subtitle: "Telemedicine & EHR",
    description: "HIPAA-compliant platforms for remote patient monitoring and secure medical data exchange.",
    icon: HeartbeatIcon
  },
  {
    id: "retail",
    title: "Retail",
    subtitle: "Global Commerce",
    description: "Headless commerce architectures that scale to millions of SKUs without latency.",
    icon: ShoppingCartIcon
  },
  {
    id: "edtech",
    title: "EdTech",
    subtitle: "Virtual Classrooms",
    description: "Low-latency video streaming and interactive LMS platforms for the modern campus.",
    icon: GraduationCapIcon
  },
  {
    id: "proptech",
    title: "Estate",
    subtitle: "Smart Property",
    description: "IoT integration for smart buildings and virtual reality tour experiences.",
    icon: BuildingsIcon
  },
  {
    id: "media",
    title: "Media",
    subtitle: "Content Delivery",
    description: "High-bandwidth streaming protocols and DRM protection for premium content.",
    icon: FilmSlateIcon
  },
];

export default function IndustriesDirectory() {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-50 font-sans px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header Area */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-800 pb-12">
          <div>
            <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">
              Sector Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
              Industry <span className="text-zinc-500 font-serif italic font-light">Experience.</span>
            </h3>
          </div>
          <p className="max-w-sm text-zinc-400 text-sm leading-relaxed">
            Specialized digital infrastructure and architectural solutions tailored to the strict demands of specific global sectors.
          </p>
        </div>

        {/* Directory List */}
        <div className="flex flex-col border-t border-zinc-800">
          {industries.map((item, index) => (
            <article
              key={item.id}
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-10 border-b border-zinc-800 hover:bg-zinc-900/30 transition-colors duration-300 px-4 -mx-4 rounded-xl"
            >

              {/* Column 1: Number & Icon */}
              <div className="flex items-center gap-6 w-full lg:w-48 mb-6 lg:mb-0 shrink-0">
                <span className="font-mono text-xs text-zinc-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 group-hover:text-white group-hover:bg-zinc-800 transition-colors">
                  <item.icon size={24} weight="duotone" />
                </div>
              </div>

              {/* Column 2: Title & Subtitle */}
              <div className="w-full lg:w-64 mb-4 lg:mb-0 shrink-0">
                <h4 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-1">
                  {item.title}
                </h4>
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {item.subtitle}
                </p>
              </div>

              {/* Column 3: Description */}
              <div className="w-full lg:flex-1 max-w-2xl mb-8 lg:mb-0 pr-0 lg:pr-12">
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Column 4: Action */}
              <div className="w-full lg:w-auto shrink-0 flex justify-start lg:justify-end">
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors group/btn"
                >
                  Explore
                  <span className="p-2 bg-zinc-900 border border-zinc-800 rounded-full group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                    <ArrowRightIcon size={14} weight="bold" />
                  </span>
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
