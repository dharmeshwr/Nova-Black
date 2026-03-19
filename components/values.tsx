'use client'
import { TrendUpIcon } from "@phosphor-icons/react";

const stats = [
  {
    id: "001",
    label: "Projects Deployed",
    value: 313,
    suffix: "",
    growth: "+21% this qtr",
    desc: "Across 14 industries"
  },
  {
    id: "002",
    label: "Active Partnerships",
    value: 97,
    suffix: "",
    growth: "+8% retention",
    desc: "Long-term SLAs"
  },
  {
    id: "003",
    label: "Engineering Hours",
    value: 48.4,
    suffix: "k",
    growth: "All-time high",
    desc: "R&D Focused"
  },
  {
    id: "004",
    label: "Client Engagements",
    value: 193,
    suffix: "",
    growth: "Stable",
    desc: "Service Relationships"
  },
];

export default function StaticMetricsGridDark() {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-50 font-sans px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-zinc-800 pb-8">
          <div>
            <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">
              Performance Ledger
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
              By the numbers.
            </h3>
          </div>
          <p className="text-zinc-400 max-w-sm text-sm mt-6 md:mt-0 leading-relaxed font-medium">
            A transparent look at our operational output, engineering capacity, and client success metrics.
          </p>
        </div>

        {/* Uniform Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-800">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col p-8 border-r border-b border-zinc-800 bg-zinc-950 hover:bg-zinc-900/40 transition-colors duration-300"
            >
              {/* Top Row: ID & Trend */}
              <div className="flex justify-between items-start mb-16">
                <span className="font-mono text-xs text-zinc-500">
                  [{stat.id}]
                </span>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-sm">
                  <TrendUpIcon weight="bold" />
                  {stat.growth}
                </div>
              </div>

              {/* Bottom Row: Large Data & Context */}
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-6xl md:text-7xl font-light tracking-tighter leading-none text-white">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-2xl font-medium text-zinc-500">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-semibold tracking-tight mb-1 text-zinc-200">
                  {stat.label}
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {stat.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
