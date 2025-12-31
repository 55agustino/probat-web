"use client";

import { useEffect, useRef, useState } from "react";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

export default function RevealSection() {
  const [reveal, setReveal] = useState(50);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showCounters, setShowCounters] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = 1 - (rect.top / window.innerHeight);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          const newReveal = 50 + (scrollProgress * 50);
          setReveal(Math.min(100, Math.max(50, newReveal)));
          
          // Iniciar animación de contadores cuando sea visible con 1 segundo de delay
          if (scrollProgress > 0.2 && !hasAnimated) {
            setHasAnimated(true);
            setTimeout(() => {
              setShowCounters(true);
              animateCounter(setCounter1, 100, 2000);
              animateCounter(setCounter2, 600, 2000);
              animateCounter(setCounter3, 1000, 2000);
            }, 1000);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(current));
      }
    }, 16);
  };

  return (
    <section ref={sectionRef} className="h-[120vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-300 relative"
          style={{
            backgroundImage: "url(/camioneta.jpg)",
            clipPath: `inset(${100 - reveal}% 0 0 0)`
          }}
        >
          {/* Capa blanca con opacidad para mejorar contraste */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Contadores superpuestos */}
          <div className={`absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-1000 ${showCounters ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl">
              <div className="text-center bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
                <div className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white ${michroma.className}`} style={{textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'}}>
                  +{counter1}k
                </div>
                <div className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mt-2 sm:mt-4 ${michroma.className}`} style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
                  celdas recertificadas para segunda vida
                </div>
              </div>
              <div className="text-center bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
                <div className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white ${michroma.className}`} style={{textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'}}>
                  +{counter2}
                </div>
                <div className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mt-2 sm:mt-4 ${michroma.className}`} style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
                  celdas automotrices recertificadas para segunda vida
                </div>
              </div>
              <div className="text-center md:col-span-2 bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20">
                <div className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white ${michroma.className}`} style={{textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'}}>
                  +{counter3}
                </div>
                <div className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mt-2 sm:mt-4 ${michroma.className}`} style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>
                  baterías fabricadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
