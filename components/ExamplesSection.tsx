"use client";

import { useState, useEffect, useCallback } from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({ weight: ["400", "700"], subsets: ["latin"] });

interface Example {
  batteryType: string;
  batteryColor: string;
  batteryImage: string | null;
  batteryImageScale?: number;
  title: string;
  imageUrl: string;
  imagePosition?: string;
  description: string;
}

const examples: Example[] = [
  {
    batteryType: "BATERÍA BICI ELÉCTRICA",
    batteryColor: "#3b82f6",
    batteryImage: "/def/bateriasazul.webp",
    batteryImageScale: 0.8,
    title: "Bicicletas Eléctricas",
    imageUrl: "/def/bici.webp",
    imagePosition: "center 20%",
    description: "Potencia y autonomía para movilidad urbana sostenible",
  },
  {
    batteryType: "BATERÍA KAYAK",
    batteryColor: "#10b981",
    batteryImage: "/def/kayakbat.webp",
    batteryImageScale: 0.6,
    title: "Kayak Eléctrico",
    imageUrl: "/def/kayak.webp",
    imagePosition: "center 20%",
    description: "Energía eficiente para deportes acuáticos",
  },
  {
    batteryType: "BATERÍA CITYQUAD",
    batteryColor: "#6b7280",
    batteryImage: "/def/citycarbat.webp",
    title: "Cityquad / Citycar",
    imageUrl: "/def/cityquad.webp",
    description: "Soluciones versátiles para vehículos urbanos eléctricos",
  },
  {
    batteryType: "BATERÍA PANELES SOLARES",
    batteryColor: "#f59e0b",
    batteryImage: "/def/panelsolarbat.webp",
    batteryImageScale: 0.85,
    title: "Paneles Solares",
    imageUrl: "/def/paneles.webp",
    description: "Almacenamiento de energía solar para instalaciones domésticas e industriales",
  },
];

const AUTO_DELAY = 4000;

function getOffset(index: number, current: number, total: number): number {
  const diff = (index - current + total) % total;
  return diff > total / 2 ? diff - total : diff;
}

function getCardStyle(offset: number): React.CSSProperties {
  const transition =
    "transform 550ms cubic-bezier(0.4,0,0.2,1), opacity 500ms ease, filter 500ms ease";

  if (offset === 0)
    return { transform: "translateX(-50%) scale(1)", opacity: 1, zIndex: 10, filter: "brightness(1)", transition };

  if (offset === -1)
    return { transform: "translateX(-143%) scale(0.84)", opacity: 1, zIndex: 5, filter: "brightness(0.32)", cursor: "pointer", transition };

  if (offset === 1)
    return { transform: "translateX(43%) scale(0.84)", opacity: 1, zIndex: 5, filter: "brightness(0.32)", cursor: "pointer", transition };

  const far = offset < 0 ? "-220%" : "120%";
  return { transform: `translateX(${far}) scale(0.7)`, opacity: 0, zIndex: 0, pointerEvents: "none", transition };
}

export default function ExamplesSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % examples.length), []);
  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + examples.length) % examples.length), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, AUTO_DELAY);
    return () => clearInterval(id);
  }, [paused, goNext]);

  const example = examples[current];

  return (
    <section
      id="ejemplos"
      className="relative bg-black text-white pt-24 pb-16 overflow-hidden"
    >
      {/* Línea separadora superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      {/* Grid de puntos */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}>
            Ejemplos de <span className="text-blue-400">uso</span>
          </h2>
          <p className={`${spaceGrotesk.className} text-gray-400 text-lg whitespace-nowrap`}>
            Nuestras baterías en acción: soluciones energéticas para diferentes aplicaciones
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative h-72 sm:h-80 lg:h-96"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {examples.map((ex, index) => {
            const offset = getOffset(index, current, examples.length);
            return (
              <div
                key={ex.imageUrl}
                className="absolute top-0 bottom-0 left-1/2 w-[80%]"
                style={getCardStyle(offset)}
                onClick={() => {
                  if (offset === -1) goPrev();
                  if (offset === 1) goNext();
                }}
              >
                {/* Two-panel card */}
                <div className="h-full flex gap-3 sm:gap-4">

                  {/* Panel izquierdo — batería */}
                  <div
                    className="w-[30%] shrink-0 rounded-xl flex flex-col items-center justify-center border-2 relative overflow-hidden"
                    style={{ borderColor: ex.batteryColor }}
                  >
                    <div className="absolute inset-0 opacity-10" style={{ backgroundColor: ex.batteryColor }} />
                    {ex.batteryImage ? (
                      <div className="relative w-full flex-1 min-h-0 p-3">
                        <Image
                          src={ex.batteryImage}
                          alt={ex.batteryType}
                          fill
                          className="object-contain"
                          sizes="25vw"
                          style={{ transform: `scale(${ex.batteryImageScale ?? 1})` }}
                        />
                      </div>
                    ) : (
                      <div className="flex-1 min-h-0" />
                    )}
                    <span
                      className={`${spaceGrotesk.className} relative z-10 text-[9px] sm:text-[10px] font-bold tracking-widest text-center leading-tight px-2 py-2`}
                      style={{ color: ex.batteryColor }}
                    >
                      {ex.batteryType}
                    </span>
                  </div>

                  {/* Panel derecho — imagen de uso */}
                  <div className="flex-1 min-w-0 flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                    {/* Color bar */}
                    <div className="h-[3px] shrink-0" style={{ backgroundColor: ex.batteryColor }} />

                    {/* Image */}
                    <div className="relative flex-1 min-h-0">
                      <Image
                        src={ex.imageUrl}
                        alt={ex.title}
                        fill
                        className="object-cover"
                        style={{ objectPosition: ex.imagePosition ?? "center" }}
                        sizes="(max-width: 640px) 65vw, (max-width: 1024px) 55vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    </div>

                    {/* Info bar */}
                    <div className="shrink-0 bg-zinc-900/90 backdrop-blur-sm px-3 sm:px-4 py-2.5">
                      <h3 className={`${spaceGrotesk.className} font-bold text-white text-sm sm:text-base leading-snug`}>
                        {ex.title}
                      </h3>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Description (current card) */}
        <div className="text-center mt-6 h-10 flex items-center justify-center">
          <p
            key={current}
            className={`${spaceGrotesk.className} text-gray-400 text-sm sm:text-base`}
            style={{ animation: "exFadeIn 0.45s ease both" }}
          >
            {example.description}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-5">
          <button
            onClick={goPrev}
            className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-white transition-colors duration-200"
            aria-label="Anterior"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex gap-2.5">
            {examples.map((ex, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === current ? ex.batteryColor : "#52525b",
                  transform: index === current ? "scale(1.4)" : "scale(1)",
                }}
                aria-label={`Ir al ejemplo ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-white transition-colors duration-200"
            aria-label="Siguiente"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes exFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
    </section>
  );
}
