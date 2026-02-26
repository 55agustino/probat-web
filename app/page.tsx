"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RevealSection from "@/components/RevealSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// Lazy load de componentes que están más abajo en la página
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const ExamplesSection = dynamic(() => import("@/components/ExamplesSection"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="min-h-screen bg-black" />,
});

const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    // Asegurar que el scroll esté arriba al cargar/recargar la página
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <RevealSection />
      <InfoSection />
      <ServicesSection />
      <ExamplesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}


