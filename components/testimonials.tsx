'use client'
import { CheckCircleIcon, QuotesIcon } from "@phosphor-icons/react";

const testimonials = [
  {
    id: "01",
    company: "Growfast",
    fullCompany: "Growfast Commerce Pvt Ltd",
    author: "Rohit Anand",
    role: "Engineering Manager",
    quote: "The internal tooling BVPL built for our ops team cut our manual reporting effort by half. Clean code, zero drama, delivered on time."
  },
  {
    id: "02",
    company: "NoBroker",
    fullCompany: "NoBroker Technologies",
    author: "Priya Nambiar",
    role: "VP – Product",
    quote: "We handed them a messy legacy codebase and they returned a modular, well-documented system. The team clearly knew what they were doing."
  },
  {
    id: "03",
    company: "UrbanKraft",
    fullCompany: "UrbanKraft Retail Pvt Ltd",
    author: "Deepak Choudhary",
    role: "Co-founder & CTO",
    quote: "Our e-commerce platform went from constant crashes to 99.9% uptime after their cloud migration. Couldn't have scaled without them."
  },
  {
    id: "04",
    company: "PolicyX",
    fullCompany: "PolicyX Insurance Brokers",
    author: "Swati Joshi",
    role: "Head of Technology",
    quote: "Security compliance was our biggest blocker. BVPL handled the audit trail and data encryption requirements without us having to explain them twice."
  },
  {
    id: "05",
    company: "Shiprocket",
    fullCompany: "Shiprocket Pvt Ltd",
    author: "Manish Tiwari",
    role: "Senior Product Manager",
    quote: "Fast, communicative, and thorough. The API integration they delivered connected six courier partners in under three weeks."
  },
  {
    id: "06",
    company: "LearnVista",
    fullCompany: "LearnVista EdTech",
    author: "Anjali Sharma",
    role: "Founder",
    quote: "As a first-time founder, I needed a tech partner who could explain trade-offs clearly. BVPL did exactly that — and built something I'm proud to show investors."
  },
];

export default function TestimonialLedger() {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-50 font-sans px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header Area */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 ">
          <div>
            <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">
              Client Dossier
            </h2>
            <h3 className="text-4xl md:text-6xl tracking-tight text-white">
              Trusted by <span className="text-zinc-500 ">Industry Leaders.</span>
            </h3>
          </div>
          <p className="max-w-sm text-zinc-400 text-sm leading-relaxed">
            Direct feedback from engineering managers, founders, and product leads who rely on our infrastructure daily.
          </p>
        </div>

        {/* Structural Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-800">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col justify-between p-8 md:p-10 border-r border-b border-zinc-800 hover:bg-zinc-900/30 transition-colors duration-300 relative group"
            >
              <QuotesIcon
                weight="fill"
                className="absolute top-8 right-8 text-zinc-800/40 text-4xl group-hover:text-zinc-700 transition-colors duration-300"
              />

              {/* Quote Section */}
              <div className="mb-12 relative z-10">
                <p className="text-lg md:text-xl font-medium text-zinc-200 leading-relaxed tracking-tight">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author & Company Meta */}
              <div className="mt-auto relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    {testimonial.company}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-emerald-400">
                    <CheckCircleIcon weight="fill" />
                    Verified
                  </div>
                </div>

                <h4 className="text-base font-semibold text-zinc-100">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-zinc-500 mt-1">
                  {testimonial.role} <span className="text-zinc-700 mx-1">|</span> {testimonial.fullCompany}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
