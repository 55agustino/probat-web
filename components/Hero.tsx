"use client";

import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Hero() {
  const [pulses, setPulses] = useState<Array<{ id: number; x: number; y: number; isHorizontal: boolean; duration: number }>>([]);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Buscar la RevealSection en el DOM
      const revealSection = document.querySelector('[data-reveal-section]');
      if (revealSection) {
        const rect = revealSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        
        // Mostrar flecha cuando estamos antes del reveal o después de que esté completamente revelado
        if (sectionTop > windowHeight * 0.5) {
          // Estamos antes del reveal - todavía no hemos llegado
          setShowArrow(true);
        } else if (sectionTop <= 0) {
          // El reveal está completamente revelado y fijo
          setShowArrow(true);
        } else {
          // Estamos en medio del reveal (entre 0.5vh y 0)
          setShowArrow(false);
        }
      } else {
        // Si no encuentra la sección, mostrar la flecha por defecto
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Ejecutar inmediatamente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const gridSize = 70;
    const createPulse = () => {
      const maxCols = Math.floor(window.innerWidth / gridSize);
      const maxRows = Math.floor(window.innerHeight / gridSize);
      
      const isHorizontal = Math.random() > 0.5;
      
      return {
        id: Date.now() + Math.random(),
        x: Math.floor(Math.random() * maxCols) * gridSize,
        y: Math.floor(Math.random() * maxRows) * gridSize,
        isHorizontal,
        duration: 1.5 + Math.random() * 1
      };
    };

    // Crear 2 pulsos iniciales
    setPulses([createPulse(), createPulse()]);

    const interval = setInterval(() => {
      setPulses(prev => {
        const newPulses = prev.slice(-2); // 2 pulsos sim máx 
        newPulses.push(createPulse());
        return newPulses;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="h-[65vh] flex items-end pb-8 md:pb-16 relative bg-black overflow-visible">
      {/* Cuadrícula CSS */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          backgroundPosition: '0 15px'
        }}
      ></div>
      
      {/* Pulsos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {pulses.map((pulse) => (
          <div
            key={pulse.id}
            className="absolute"
            style={{
              left: pulse.isHorizontal ? `${pulse.x}px` : `${pulse.x}px`,
              top: pulse.isHorizontal ? `${pulse.y+15}px` : `${pulse.y}px`,
              width: pulse.isHorizontal ? '0' : '1px',
              height: pulse.isHorizontal ? '1px' : '0',
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0) 0%, rgba(59, 130, 246, 1) 50%, rgba(59, 130, 246, 0) 100%)',
              boxShadow: '0 0 15px rgba(59, 130, 246, 1), 0 0 30px rgba(59, 130, 246, 0.7)',
              animation: pulse.isHorizontal 
                ? `tron-trail-horizontal ${pulse.duration}s ease-out forwards`
                : `tron-trail-vertical ${pulse.duration}s ease-out forwards`
            }}
          />
        ))}
      </div>
      
      {/* Gradiente superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 md:via-black/35 to-transparent"></div>
      
      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-left">
          <h1 className={`text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up tracking-tight ${spaceGrotesk.className}`}>
            Especialistas en baterías de litio
          </h1>
          <p className={`text-2xl md:text-3xl text-white animate-fade-in-up animation-delay-200 ${spaceGrotesk.className}`}>
            Creamos soluciones personalizadas con tecnología sostenible
          </p>
        </div>
      </div>
      
      {/* Flecha indicadora de scroll - fuera del contenedor principal */}
      <div className={`absolute -bottom-16 md:-bottom-24 left-0 right-0 flex justify-center z-20 transition-opacity duration-300 ${showArrow ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-bounce">
          <svg 
            className="w-8 h-8 md:w-10 md:h-10 text-white opacity-80" 
            fill="none" 
            strokeWidth="2.5" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

