import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about NovaBlack E-Tech's services, timelines, pricing, technology stack, and post-launch support.",
  openGraph: {
    title: "FAQs | NovaBlack E-Tech",
    description:
      "Common questions about our processes, timelines, pricing, and technical capabilities.",
  },
  alternates: {
    canonical: "/faqs",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "6–12 weeks for MVPs, enterprise projects vary by scope. We operate on strict sprint cycles to ensure timely delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups or only enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both—our agile model scales to fit bootstrapped startups or large corporates. We adjust our team size and velocity based on your stage.",
      },
    },
    {
      "@type": "Question",
      name: "Can you sign an NDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide a mutual NDA before any confidential discussions to ensure your IP is protected from day one.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you specialise in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "React, Node.js, Java, Flutter, AWS, Azure, Web3, and leading payment stacks. We remain agnostic but opinionated on stability.",
      },
    },
    {
      "@type": "Question",
      name: "How does pricing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fixed-price sprints or dedicated resource models—transparent and milestone-based. No hidden costs; everything is defined in the SOW.",
      },
    },
    {
      "@type": "Question",
      name: "What post-launch support do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "30 days of free warranty for bug fixes & optional monthly maintenance SLAs for server monitoring, updates, and feature enhancements.",
      },
    },
  ],
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
