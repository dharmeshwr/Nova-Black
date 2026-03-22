import Footer from "@/components/footer";
import HeroSectionClient from "@/components/hero-section-client";
import IndustriesSection from "@/components/industries";
import Navbar from "@/components/navbar";
import ProjectRequestForm from "@/components/project-request-form";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Values from "@/components/values";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        <HeroSectionClient />
      </div>
      <Services />
      <Values />
      <IndustriesSection />
      <Testimonials />
      <ProjectRequestForm />
      <Footer />
    </main>
  );
}
