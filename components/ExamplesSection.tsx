"use client";

import { useState, useEffect, useRef } from "react";
import { Space_Grotesk } from "next/font/google";

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

export default function ExamplesSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video) => {
      if (video) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                video.play();
              } else {
                video.pause();
              }
            });
          },
          { threshold: 0.5 }
        );

        observer.observe(video);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const examples: Example[] = [
    {
      batteryType: "BATERÍA BICI ELÉCTRICA",
      batteryColor: "#3b82f6",
      batteryImage: "/bateria-azul.png",
      title: "Bicicletas Eléctricas",
      videoUrl: "/videos/bici-electrica.mp4",
      description: "Potencia y autonomía para movilidad urbana sostenible"
    },
    {
      batteryType: "BATERÍA KAYAK",
      batteryColor: "#10b981",
      batteryImage: "/bateria-verde.png",
      title: "Kayak Eléctrico",
      videoUrl: "/videos/kayak.mp4",
      description: "Energía eficiente para deportes acuáticos"
    },
    {
      batteryType: "BATERÍA CITYQUAD",
      batteryColor: "#6b7280",
      batteryImage: "/bateria-gris.png",
      title: "Cityquad / Citycar / Paneles Solares",
      videoUrl: "/videos/cityquad.mp4",
      description: "Soluciones versátiles para vehículos urbanos y energía solar"
    }
  ];

  return (
    <section id="ejemplos" className="relative min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
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
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className={`${spaceGrotesk.className} text-4xl sm:text-5xl lg:text-6xl font-bold mb-4`}>
            EJEMPLOS DE <span className="text-blue-400">USO</span>
          </h2>
          <p className={`${spaceGrotesk.className} text-gray-400 text-lg max-w-2xl mx-auto`}>
            Nuestras baterías en acción: soluciones energéticas para diferentes aplicaciones
          </p>
        </div>

        {/* Grid de ejemplos */}
        <div className="space-y-24">
          {examples.map((example, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
            >
              {/* Ilustración de la batería */}
              <div className="w-full lg:w-1/3">
                <div
                  className="relative aspect-square border-4 rounded-lg p-8 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
                  style={{ borderColor: example.batteryColor }}
                >
                  <div className="absolute inset-0 rounded-lg opacity-10"
                    style={{ backgroundColor: example.batteryColor }}
                  />
                  <img
                    src={example.batteryImage}
                    alt={example.batteryType}
                    className="w-full h-auto object-contain relative z-10"
                  />
                  <div className={`${spaceGrotesk.className} text-center mt-4 font-bold relative z-10`}
                    style={{ color: example.batteryColor }}
                  >
                    {example.batteryType}
                  </div>
                </div>
              </div>

              {/* Video y descripción */}
              <div className="w-full lg:w-2/3">
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors duration-300">
                  {/* Video */}
                  <div className="relative aspect-video bg-black">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={example.videoUrl} type="video/mp4" />
                      Tu navegador no soporta el tag de video.
                    </video>
                    <div className="absolute inset-0 pointer-events-none border-2"
                      style={{ borderColor: example.batteryColor, opacity: 0.3 }}
                    />
                  </div>

                  {/* Descripción */}
                  <div className="p-6">
                    <h3
                      className={`${spaceGrotesk.className} text-2xl font-bold mb-3`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
