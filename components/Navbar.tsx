"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { spaceGrotesk } from "@/lib/fonts";

// Duración exacta del gif: 50 frames × 20ms + frame 49 a 40ms + frame 50 a 60ms = 1060ms
const GIF_DURATION = 1060;

export default function Navbar() {
  const [showGif, setShowGif] = useState(true);
  const gifRef = useRef<HTMLImageElement>(null);

  // Reinicia el GIF desde el frame 1 antes del primer paint (evita que el caché sirva el último frame)
  useLayoutEffect(() => {
    if (gifRef.current) {
      gifRef.current.src = "";
      gifRef.current.src = "/gifff.gif";
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, GIF_DURATION);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="relative flex-shrink-0">
            {/* GIF: en flujo normal, define el tamaño del contenedor */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={gifRef}
              src="/gifff.gif"
              alt="Logo"
              width={120}
              height={40}
              className={`block object-contain transition-opacity duration-300 ${
                showGif ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Estático: overlay absoluto en la misma posición */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logow.webp"
              alt="Logo"
              width={120}
              height={40}
              className={`block object-contain absolute inset-0 transition-opacity duration-300 ${
                showGif ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          {/* Enlaces de navegación */}
          <div className={`hidden md:flex space-x-8 ${spaceGrotesk.className}`}>
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("ejemplos")}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Ejemplos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
