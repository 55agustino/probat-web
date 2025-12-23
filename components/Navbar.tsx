"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 525); // Cambair a logo estático 0.525 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20 relative">
          <Image
            src="/gifff.gif"
            alt="Logo"
            width={120}
            height={40}
            className={`object-contain absolute transition-opacity duration-300 ${
              showGif ? "opacity-100" : "opacity-0"
            }`}
            unoptimized
          />
          <Image
            src="/logow.webp"
            alt="Logo"
            width={120}
            height={40}
            className={`object-contain transition-opacity duration-300 ${
              showGif ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
