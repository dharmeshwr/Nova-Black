'use client'
import { useState } from "react";
import {
  BuildingsIcon,
  GraduationCapIcon,
  ShoppingCartIcon,
  FilmSlateIcon,
  HeartbeatIcon,
  ArrowRightIcon
} from "@phosphor-icons/react";

const industries = [
  {
    id: "retail",
    title: "Retail",
    subtitle: "Global Commerce",
    description: "Headless commerce architectures that scale to millions of SKUs without latency.",
    icon: ShoppingCartIcon,
    theme: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      hover: "group-hover:text-blue-400"
    }
  },
  {
    id: "edtech",
    title: "EdTech",
    subtitle: "Virtual Classrooms",
    description: "Low-latency video streaming and interactive LMS platforms for the modern campus.",
    icon: GraduationCapIcon,
    theme: {
      text: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      hover: "group-hover:text-amber-400"
    }
  },
  {
    id: "healthtech",
    title: "Healthcare",
    subtitle: "Telemedicine & EHR",
    description: "HIPAA-compliant platforms for remote patient monitoring and secure medical data exchange.",
    icon: HeartbeatIcon,
    theme: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      hover: "group-hover:text-emerald-400"
    }
  },
  {
    id: "proptech",
    title: "Estate",
    subtitle: "Smart Property",
    description: "IoT integration for smart buildings and virtual reality tour experiences.",
    icon: BuildingsIcon,
    theme: {
      text: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/30",
      hover: "group-hover:text-violet-400"
    }
  },
  {
    id: "media",
    title: "Media",
    subtitle: "Content Delivery",
    description: "High-bandwidth streaming protocols and DRM protection for premium content.",
    icon: FilmSlateIcon,
    theme: {
      text: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      hover: "group-hover:text-rose-400"
    }
  },
];

export default function IndustriesDirectory() {
  // Track the currently hovered item (default to the first one)
  const [activeId, setActiveId] = useState(industries[0].id);

  // Find the active industry object to render the dynamic left panel
  const activeIndustry = industries.find((item) => item.id === activeId) ?? industries[0];
  const ActiveIcon = activeIndustry.icon;

  return (
    <section className="py-24 bg-zinc-950 text-zinc-50 font-sans px-6 md:px-10 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

          {/* Left Column: Sticky Dynamic Display */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-max">
            <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-zinc-700"></span>
              Sector Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl tracking-tight text-white mb-6">
              Industry <br />
              <span className="text-zinc-600">Experience.</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-10">
              Specialized digital infrastructure and architectural solutions tailored to the strict demands of specific global sectors.
            </p>

            {/* Dynamic Visual Indicator */}
            <div className={`hidden lg:flex w-full aspect-square rounded-3xl border ${activeIndustry.theme.border} ${activeIndustry.theme.bg} transition-all duration-700 items-center justify-center relative overflow-hidden`}>
              {/* Subtle background glow effect */}
              <div className={`absolute inset-0 opacity-20 blur-3xl rounded-full ${activeIndustry.theme.bg} scale-150 transition-all duration-700`} />

              <ActiveIcon
                size={140}
                weight="duotone"
                className={`relative z-10 ${activeIndustry.theme.text} drop-shadow-2xl transition-all duration-500`}
              />
            </div>
          </div>

          {/* Right Column: Interactive Directory Menu */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {industries.map((item, index) => {
              const isActive = activeId === item.id;

              return (
                <article
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`
                    group relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 md:p-8 
                    rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden
                    ${isActive
                      ? `bg-zinc-900 border-zinc-700 shadow-2xl`
                      : `bg-zinc-950/50 border-zinc-800/50 hover:bg-zinc-900/50 hover:border-zinc-700/80`
                    }
                  `}
                >
                  {/* Subtle active state background highlight */}
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : ''} ${item.theme.bg} pointer-events-none`} />

                  {/* Left Side: Number, Icon & Text */}
                  <div className="flex items-center gap-6 relative z-10 w-full sm:w-auto">
                    <div className={`p-4 rounded-xl border transition-colors duration-300 ${isActive ? `bg-zinc-950 ${item.theme.border}` : 'bg-zinc-900 border-zinc-800 group-hover:bg-zinc-800'}`}>
                      <item.icon size={28} weight={isActive ? "duotone" : "regular"} className={`transition-colors duration-300 ${isActive ? item.theme.text : 'text-zinc-400 ' + item.theme.hover}`} />
                    </div>

                    <div>
                      <h4 className={`text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${isActive ? 'text-zinc-50' : 'text-zinc-300 group-hover:text-zinc-100'}`}>
                        {item.title}
                      </h4>
                      <p className={`font-mono text-[10px] md:text-xs uppercase tracking-widest mt-1 transition-colors duration-300 ${isActive ? item.theme.text : 'text-zinc-600'}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Description & Arrow */}
                  <div className="relative z-10 mt-6 sm:mt-0 sm:pl-8 sm:border-l border-zinc-800/50 max-w-sm flex items-center gap-6">
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-zinc-300' : 'text-zinc-500'}`}>
                      {item.description}
                    </p>

                    {/* Animated Arrow Indicator */}
                    <div className="hidden sm:flex shrink-0 w-10 h-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 overflow-hidden relative">
                      <ArrowRightIcon
                        size={16}
                        className={`absolute transition-all duration-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'} ${item.theme.text}`}
                      />
                      <ArrowRightIcon
                        size={16}
                        className={`absolute transition-all duration-500 ${isActive ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}`}
                      />
                    </div>
                  </div>

                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
