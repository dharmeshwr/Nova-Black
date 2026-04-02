import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "NovaBlack E-Tech Private Limited's refund and cancellation policy for IT consulting and software development services.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
