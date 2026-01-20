"use client";

import { useEffect, useRef } from "react";

export default function InfoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play();
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Texto */}
          <div className="flex-1 max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Sobre PROBAT
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed">
              PROBAT es una empresa innovadora especializada en la clasificación,
              recertificación y fabricación de baterías de litio, enfocada en dar
              una segunda vida a aquellas que han llegado al final de su ciclo útil.
              Sus procesos transforman lo que sería un "desecho" en valiosa materia
              prima.
            </p>
          </div>

          {/* Animación de batería */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-md relative">
              {/* Placeholder mientras no hay video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-gray-600 font-semibold">*Animación Batería girando*</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Video transformación <br/>
                    (animacion.webm / animacion.mp4)
                  </p>
                </div>
              </div>

              <video
                ref={videoRef}
                className="w-full h-auto relative z-10"
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={(e) => {
                  // Ocultar placeholder cuando el video carga
                  const placeholder = e.currentTarget.previousElementSibling;
                  if (placeholder) {
                    (placeholder as HTMLElement).style.display = 'none';
                  }
                }}
              >
                <source src="/animacion.webm" type="video/webm" />
                <source src="/animacion.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
