import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RevealSection from "@/components/RevealSection";
import InfoSection from "@/components/InfoSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RevealSection />
      <InfoSection />
      <ServicesSection />
    </div>
  );
}


