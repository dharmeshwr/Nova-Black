import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllSlugs } from "@/lib/services-data";
import ServiceDetailClient from "./service-detail-client";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | NovaBlack E-Tech`,
      description: service.description,
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "NovaBlack E-Tech Private Limited",
      url: siteUrl,
    },
    url: `${siteUrl}/services/${service.slug}`,
    category: service.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
