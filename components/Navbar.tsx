"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [showGif, setShowGif] = useState(true);
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    // Forzar recarga del GIF para que empiece desde el frame 0
    setGifKey(Date.now());

    // Ajusta este tiempo a la duración exacta de tu GIF
    // Para detectarlo automáticamente, mide la duración del GIF manualmente
    const gifDuration = 1050; // milisegundos
    
    const timer = setTimeout(() => {
      setShowGif(false);
    }, gifDuration);

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
            <Image
              key={gifKey}
              src={`/gifff.webp?v=${gifKey}`}
              alt="Logo"
              width={120}
              height={40}
              className={`object-contain absolute ${
                showGif ? "opacity-100" : "opacity-0"
              }`}
              unoptimized
              priority
            />
            <Image
              src="/logow.webp"
              alt="Logo"
              width={120}
              height={40}
              className={`object-contain ${
                showGif ? "opacity-0" : "opacity-100"
              }`}
              priority
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
