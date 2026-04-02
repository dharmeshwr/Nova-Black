import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using NovaBlack E-Tech Private Limited's website and services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
