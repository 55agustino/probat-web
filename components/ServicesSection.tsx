"use client";

import { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function ServicesSection() {
  const [pulses, setPulses] = useState<Array<{ id: number; x: number; y: number; isHorizontal: boolean; duration: number }>>([]);

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
        const newPulses = prev.slice(-2); // 2 pulsos simultáneos máx 
        newPulses.push(createPulse());
        return newPulses;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "CLASIFICACIÓN",
      description: "Las baterías son desensambladas para extraer scrap de aluminio y cobre, así como las celdas de litio, que serán sometidas a un proceso de recertificación.",
      image: "/CLASIFICACION.png"
    },
    {
      title: "RECERTIFICACIÓN",
      description: "La recertificación se hace con cargadores específicos para cada tipo de celda, mediante pruebas de carga y descarga, lo que permite clasificar y reutilizar cada celda.",
      image: "/RECERTIFICACION.png"
    },
    {
      title: "SEGUNDA VIDA",
      description: "Revalorización de celdas que han llegado al final de su vida útil, convirtiendolas en nueva materia prima pronta para su comercialización y reutilización.",
      image: "/SEGUNDAVIDA.png"
    },
    {
      title: "FABRICACIÓN",
      description: "Con las celdas recertificadas se fabrican baterías para bicicletas, motos y citycars; así como baterias para sistemas de acumuladores solares/eólicos.",
      image: "/FABRICACION.webp"
    }
  ];

  return (
    <section id="servicios" className="min-h-screen bg-black pt-8 pb-20 relative overflow-hidden">
      {/* Pulsos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {pulses.map((pulse) => (
          <div
            key={pulse.id}
            className="absolute"
            style={{
              left: pulse.isHorizontal ? `${pulse.x}px` : `${pulse.x}px`,
              top: pulse.isHorizontal ? `${pulse.y}px` : `${pulse.y}px`,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-16 text-center ${spaceGrotesk.className}`}>
          Nuestros Servicios
        </h2>
        
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Imagen */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300 p-6">
                  <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Contenido */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
                  <h3 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${spaceGrotesk.className}`}>
                    {service.title}
                  </h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InfoSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Sobre PROBAT
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            PROBAT es una empresa innovadora especializada en la clasificación, 
            recertificación y fabricación de baterías de litio, enfocada en dar 
            una segunda vida a aquellas que han llegado al final de su ciclo útil. 
            Sus procesos transforman lo que sería un "desecho" en valiosa materia prima.
          </p>
        </div>
      </div>
    </section>
  );
}