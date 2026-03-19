const site_url = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${site_url}/sitemap.xml`,
  };
}
