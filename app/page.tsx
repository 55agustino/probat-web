import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RevealSection from "@/components/RevealSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const ExamplesSection = dynamic(() => import("@/components/ExamplesSection"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <RevealSection />
      <InfoSection />
      <ServicesSection />
      <ExamplesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
