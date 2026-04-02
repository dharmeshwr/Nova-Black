import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NovaBlack E-Tech Private Limited. Reach us via email, phone, or visit our office in Kaushambi, Uttar Pradesh, India.",
  openGraph: {
    title: "Contact NovaBlack E-Tech",
    description:
      "Reach us via email, phone, or visit our office in Kaushambi, Uttar Pradesh, India.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
