"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealSection() {
  const [reveal, setReveal] = useState(50);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
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
              animateCounter(setCounter1, 1000, 2000);
              animateCounter(setCounter2, 20, 2000);
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
          {/* Contadores superpuestos */}
          <div className={`absolute inset-0 flex items-center justify-center gap-8 sm:gap-16 md:gap-40 px-4 transition-opacity duration-1000 ${showCounters ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center">
              <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black drop-shadow-2xl font-mono">
                +{counter1}
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black mt-2 sm:mt-4 font-mono">
                baterías
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black drop-shadow-2xl font-mono">
                +{counter2}
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black mt-2 sm:mt-4 font-mono">
                otrosotros
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
