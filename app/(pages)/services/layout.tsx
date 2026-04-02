import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NovaBlack E-Tech's full range of IT services — software development, web & mobile apps, e-commerce, cloud & DevOps, cybersecurity, UI/UX design, and IT architecture.",
  openGraph: {
    title: "Our Services | NovaBlack E-Tech",
    description:
      "Software development, web & mobile apps, e-commerce, cloud & DevOps, cybersecurity, UI/UX design, and IT architecture.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
