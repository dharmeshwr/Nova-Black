import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "NovaBlack E-Tech Private Limited's shipping and delivery policy for digital services.",
  alternates: {
    canonical: "/shipping-policy",
  },
};

export default function ShippingPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
