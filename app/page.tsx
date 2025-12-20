import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RevealSection from "@/components/RevealSection";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RevealSection />
      <InfoSection />
    </div>
  );
}


