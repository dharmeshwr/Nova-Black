import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NovaBlack E-Tech Private Limited | IT Solutions & Software Development",
    template: "%s | NovaBlack E-Tech",
  },
  description:
    "NovaBlack E-Tech Private Limited delivers enterprise-grade software development, web & mobile apps, cloud & DevOps, cybersecurity, and IT consulting services from India.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "IT consulting",
    "cloud services",
    "DevOps",
    "cybersecurity",
    "e-commerce development",
    "UI/UX design",
    "NovaBlack",
    "NovaBlack E-Tech",
  ],
  authors: [{ name: "NovaBlack E-Tech Private Limited" }],
  creator: "NovaBlack E-Tech Private Limited",
  publisher: "NovaBlack E-Tech Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "NovaBlack E-Tech Private Limited",
    title: "NovaBlack E-Tech Private Limited | IT Solutions & Software Development",
    description:
      "Enterprise-grade software development, web & mobile apps, cloud & DevOps, cybersecurity, and IT consulting services from India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaBlack E-Tech Private Limited | IT Solutions & Software Development",
    description:
      "Enterprise-grade software development, web & mobile apps, cloud & DevOps, cybersecurity, and IT consulting services from India.",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-title": "NovaBlack E-Tech Private Limited",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NovaBlack E-Tech Private Limited",
  url: siteUrl,
  logo: `${siteUrl}/full_logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6393883301",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kaushambi",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com",
    "https://www.instagram.com",
    "https://x.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
