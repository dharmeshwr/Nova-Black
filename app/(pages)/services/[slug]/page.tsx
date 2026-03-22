import { notFound } from "next/navigation";
import { getServiceBySlug, getAllSlugs } from "@/lib/services-data";
import ServiceDetailClient from "./service-detail-client";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetailClient service={service} />;
}
