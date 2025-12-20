"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealSection() {
  const [reveal, setReveal] = useState(60);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = 1 - (rect.top / window.innerHeight);
        
        if (scrollProgress >= 0 && scrollProgress <= 1) {
          const newReveal = 60 + (scrollProgress * 40);
          setReveal(Math.min(100, Math.max(60, newReveal)));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-300"
          style={{
            backgroundImage: "url(/camioneta.jpg)",
            clipPath: `inset(${100 - reveal}% 0 0 0)`
          }}
        >
        </div>
      </div>
    </section>
  );
}
