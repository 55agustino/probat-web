"use client";

import { useEffect, useRef, useState } from "react";
import { michroma } from "@/lib/fonts";

export default function RevealSection() {
  const [reveal, setReveal] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showCounters, setShowCounters] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
    const startTime = Date.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(easeOutCubic(progress) * target);

      if (progress >= 1) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(current);
      }
    }, 16);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;

        const scrollStart = windowHeight;
        const scrollEnd = 0;
        const scrollRange = scrollStart - scrollEnd;

        let newReveal;

        if (sectionTop >= scrollStart) {
          newReveal = 0;
        } else if (sectionTop <= scrollEnd) {
          newReveal = 100;
          if (!isFullyRevealed) setIsFullyRevealed(true);
        } else {
          newReveal = ((scrollStart - sectionTop) / scrollRange) * 100;
        }

        setReveal(newReveal);

        if (newReveal > 60 && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            setShowCounters(true);
            animateCounter(setCounter1, 100, 2000);
            animateCounter(setCounter2, 600, 2000);
            animateCounter(setCounter3, 1000, 2000);
          }, 500);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated, isFullyRevealed]);

  // Cada recuadro gestiona su propia opacidad — el backdrop-blur siempre está
  // computado pero invisible, así la transición es genuinamente gradual.
  const cardVisible: React.CSSProperties = {
    opacity: showCounters ? 1 : 0,
    transition: "opacity 1s ease",
  };

  return (
    <section ref={sectionRef} className={`${isFullyRevealed ? 'h-screen' : 'h-[150vh]'} relative`} data-reveal-section>
      <div className={`${isFullyRevealed ? 'relative' : 'sticky'} top-0 h-screen overflow-hidden bg-black`}>
        <div
          className="w-full h-full bg-cover bg-center relative will-change-[clip-path]"
          style={{
            backgroundImage: "url(/def/fondoreveal3.webp)",
            clipPath: `inset(${100 - reveal}% 0 0 0)`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30" />

          {/* Contenedor siempre visible — la opacidad la gestiona cada recuadro */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl">

              <div
                className="text-center backdrop-blur-md bg-black/40 p-6 md:p-8 rounded-2xl border border-white/35"
                style={cardVisible}
              >
                <div
                  className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ${michroma.className}`}
                  style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)" }}
                >
                  +{counter1}k
                </div>
                <div
                  className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mt-2 sm:mt-4 uppercase ${michroma.className}`}
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                >
                  celdas recertificadas para segunda vida
                </div>
              </div>

              <div
                className="text-center backdrop-blur-md bg-black/40 p-6 md:p-8 rounded-2xl border border-white/35"
                style={cardVisible}
              >
                <div
                  className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ${michroma.className}`}
                  style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)" }}
                >
                  +{counter2}
                </div>
                <div
                  className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mt-2 sm:mt-4 uppercase ${michroma.className}`}
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                >
                  celdas automotrices recertificadas para segunda vida
                </div>
              </div>

              <div
                className="text-center md:col-span-2 backdrop-blur-md bg-black/40 p-6 md:p-8 rounded-2xl border border-white/35"
                style={cardVisible}
              >
                <div
                  className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ${michroma.className}`}
                  style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)" }}
                >
                  +{counter3}
                </div>
                <div
                  className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mt-2 sm:mt-4 uppercase ${michroma.className}`}
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                >
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
