"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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

  return (
    <nav className="sticky top-0 z-50 bg-black backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20 relative">
          <Image
            key={gifKey}
            src={`/gifff.gif?v=${gifKey}`}
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
      </div>
    </nav>
  );
}
