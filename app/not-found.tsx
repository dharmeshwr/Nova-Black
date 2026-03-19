import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | NovaBlack",
  description: "The page you’re looking for doesn’t exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="page-title"
      className="flex h-screen items-center justify-center font-sans"
    >
      <div>
        <h1
          id="page-title"
          className="mb-4 text-2xl font-medium tracking-tight"
        >
          404 - Page not found
        </h1>
        <p className="mb-2">
          Oops! The page you&apos;re looking for doesn&apos;t seem to exist.
        </p>
        <Link href="/" className="underline">
          {" "}
          Return To Home
        </Link>
      </div>
    </section>
  );
}
