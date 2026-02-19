"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface Example {
  batteryType: string;
  batteryColor: string;
  batteryImage: string;
  title: string;
  videoUrl: string;
  description: string;
}

const examples: Example[] = [
  {
    batteryType: "BATERÍA BICI ELÉCTRICA",
    batteryColor: "#3b82f6",
    batteryImage: "/bateria-azul.png",
    title: "Bicicletas Eléctricas",
    videoUrl: "/videos/bici-electrica.mp4",
    description: "Potencia y autonomía para movilidad urbana sostenible",
  },
  {
    batteryType: "BATERÍA KAYAK",
    batteryColor: "#10b981",
    batteryImage: "/bateria-verde.png",
    title: "Kayak Eléctrico",
    videoUrl: "/videos/kayak.mp4",
    description: "Energía eficiente para deportes acuáticos",
  },
  {
    batteryType: "BATERÍA CITYQUAD",
    batteryColor: "#6b7280",
    batteryImage: "/bateria-gris.png",
    title: "Cityquad / Citycar / Paneles Solares",
    videoUrl: "/videos/cityquad.mp4",
    description: "Soluciones versátiles para vehículos urbanos y energía solar",
  },
];

export default function ExamplesSection() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = useCallback((index: number) => {
    const prev = videoRefs.current[current];
    if (prev) {
      prev.pause();
      prev.currentTime = 0;
    }
    setCurrent(index);
  }, [current]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + examples.length) % examples.length);
  }, [current, goTo]);

  const goNext = useCallback(() => {
    goTo((current + 1) % examples.length);
  }, [current, goTo]);

  useEffect(() => {
    const video = videoRefs.current[current];
    if (video) {
      video.play().catch(() => {});
    }
  }, [current]);

  const example = examples[current];

  return (
    <section
      id="ejemplos"
      className="relative min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden"
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
        <div className="text-center mb-16">
          <h2
            className={`${spaceGrotesk.className} text-4xl sm:text-5xl lg:text-6xl font-bold mb-4`}
          >
            EJEMPLOS DE <span className="text-blue-400">USO</span>
          </h2>
          <p
            className={`${spaceGrotesk.className} text-gray-400 text-lg max-w-2xl mx-auto`}
          >
            Nuestras baterías en acción: soluciones energéticas para diferentes
            aplicaciones
          </p>
        </div>

        {/* Slider */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Batería */}
          <div className="w-full lg:w-1/3">
            <div
              className="relative aspect-square border-4 rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-500"
              style={{ borderColor: example.batteryColor }}
            >
              <div
                className="absolute inset-0 rounded-lg opacity-10"
                style={{ backgroundColor: example.batteryColor }}
              />
              <div className="relative w-full aspect-square z-10">
                <Image
                  src={example.batteryImage}
                  alt={example.batteryType}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div
                className={`${spaceGrotesk.className} text-center mt-4 font-bold relative z-10`}
                style={{ color: example.batteryColor }}
              >
                {example.batteryType}
              </div>
            </div>
          </div>

          {/* Video y descripción */}
          <div className="w-full lg:w-2/3">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-300">
              {/* Video — renderizamos todos pero ocultamos los que no son el actual */}
              <div className="relative aspect-video bg-black">
                {examples.map((ex, index) => (
                  <video
                    key={ex.videoUrl}
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
                      index === current ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={ex.videoUrl} type="video/mp4" />
                  </video>
                ))}
                <div
                  className="absolute inset-0 pointer-events-none border-2 transition-colors duration-500"
                  style={{ borderColor: example.batteryColor, opacity: 0.3 }}
                />
              </div>

              {/* Descripción */}
              <div className="p-6">
                <h3
                  className={`${spaceGrotesk.className} text-2xl font-bold mb-3 transition-colors duration-300`}
                  style={{ color: example.batteryColor }}
                >
                  {example.title}
                </h3>
                <p className={`${spaceGrotesk.className} text-gray-300`}>
                  {example.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controles del slider */}
        <div className="flex items-center justify-center gap-8 mt-12">
          {/* Flecha anterior */}
          <button
            onClick={goPrev}
            className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-white transition-colors duration-200"
            aria-label="Anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {examples.map((ex, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === current ? ex.batteryColor : "#52525b",
                  transform: index === current ? "scale(1.3)" : "scale(1)",
                }}
                aria-label={`Ir al ejemplo ${index + 1}`}
              />
            ))}
          </div>

          {/* Flecha siguiente */}
          <button
            onClick={goNext}
            className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-white transition-colors duration-200"
            aria-label="Siguiente"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
