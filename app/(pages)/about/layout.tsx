import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NovaBlack E-Tech Private Limited — 4+ years of delivering secure, scalable IT solutions, from startups to enterprise. Based in Uttar Pradesh, India.",
  openGraph: {
    title: "About NovaBlack E-Tech Private Limited",
    description:
      "4+ years of delivering secure, scalable IT solutions, from startups to enterprise.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
