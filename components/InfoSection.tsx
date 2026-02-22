"use client";

import { useEffect, useRef, useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function InfoSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              setIsTextVisible(true);
            } else if (entry.target === videoContainerRef.current) {
              setIsVideoVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      fadeInObserver.observe(textRef.current);
    }
    if (videoContainerRef.current) {
      fadeInObserver.observe(videoContainerRef.current);
    }

    return () => {
      fadeInObserver.disconnect();
    };
  }, []);

  return (
    <section id="nosotros" className="min-h-screen bg-black pt-24 lg:pt-32 pb-12 relative overflow-visible flex items-center">
      {/* Cuadrícula de fondo sutil */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Gradiente de transición hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Texto con animación fade-in y reveal */}
          <div
            ref={textRef}
            className={`flex-1 w-full transition-all duration-1000 relative ${
              isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 ${spaceGrotesk.className}`}>
              Sobre <span className="text-blue-400">PROBAT</span>
            </h2>
            <div className="space-y-4">
              <p className={`text-base md:text-lg text-white/90 leading-relaxed ${spaceGrotesk.className}`}>
                PROBAT es una empresa especializada en la <span className="text-blue-400 font-bold">clasificación, recertificación y fabricación</span> de baterías de litio.
              </p>
              <p className={`text-base md:text-lg text-white/90 leading-relaxed ${spaceGrotesk.className}`}>
                Nos enfocamos en dar una <span className="text-blue-400 font-bold">segunda vida</span> a aquellas baterías que han llegado al final de su ciclo útil, mediante <span className="text-blue-400 font-bold">procesos técnicos seguros y controlados</span>.
              </p>
              <p className={`text-base md:text-lg text-white/90 leading-relaxed ${spaceGrotesk.className}`}>
                Transformamos baterías fuera de uso en <span className="text-blue-400 font-bold">materia prima valiosa</span>, recuperando componentes que pueden reintegrarse al sistema productivo.
              </p>
            </div>
          </div>

          {/* Animación con fade-in y hover */}
          <div
            ref={videoContainerRef}
            className={`flex-1 w-full flex justify-center lg:justify-center transition-all duration-1000 delay-300 ${
              isVideoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-full max-w-[440px] relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/def/animacion2.webp"
                alt="Animación batería PROBAT"
                className="w-full h-auto relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
