import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IndustriesSection from "@/components/industries";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Values from "@/components/values";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        <HeroSection />
      </div>
      <Services />
      <Values />
      <IndustriesSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
