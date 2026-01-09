"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RevealSection from "@/components/RevealSection";
import InfoSection from "@/components/InfoSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

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
      <ContactSection />
    </div>
  );
}


