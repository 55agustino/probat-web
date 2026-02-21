"use client";

import { useEffect, useRef, useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function InfoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    return () => {
      videoObserver.disconnect();
    };
  }, []);

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
                PROBAT es una empresa especializada en la clasificación, recertificación y fabricación de baterías de litio.
              </p>
              <p className={`text-base md:text-lg text-white/90 leading-relaxed ${spaceGrotesk.className}`}>
                Nos enfocamos en dar una segunda vida a aquellas baterías que han llegado al final de su ciclo útil, mediante procesos técnicos seguros y controlados.
              </p>
              <p className={`text-base md:text-lg text-white/90 leading-relaxed ${spaceGrotesk.className}`}>
                Transformamos baterías fuera de uso en materia prima valiosa, recuperando componentes que pueden reintegrarse al sistema productivo.
              </p>
              <p className={`text-base md:text-lg text-white/90 leading-relaxed ${spaceGrotesk.className}`}>
                Trabajamos con un enfoque de eficiencia, aprovechamiento de recursos y compromiso ambiental, aportando soluciones concretas para una gestión responsable de la energía.
              </p>
            </div>
          </div>

          {/* Video con animación fade-in y hover */}
          <div
            ref={videoContainerRef}
            className={`flex-1 w-full flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVideoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-full max-w-xl relative group">
              {/* Placeholder mientras no hay video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/40">*animación batería*</p>
              </div>

              {/* Video con soporte para transparencia */}
              <video
                ref={videoRef}
                className="w-full h-auto relative z-10 transition-transform duration-500 group-hover:scale-105"
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={(e) => {
                  const placeholder = e.currentTarget.previousElementSibling;
                  if (placeholder) {
                    (placeholder as HTMLElement).style.display = 'none';
                  }
                }}
              >
                {/* WebM con VP9 soporta canal alpha (transparencia) */}
                <source src="/animacion.webm" type="video/webm" />
                {/* Fallback para navegadores que no soporten WebM */}
                <source src="/animacion.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
