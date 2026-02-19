"use client";

import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Clasificación de Baterías",
  "Recertificación",
  "Segunda Vida",
  "Fabricación a Medida",
];

const whatsappNumber = "+59893768645";
const whatsappMessage = encodeURIComponent("¡Hola! Me gustaría obtener más información.");

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Línea separadora superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      {/* Grid de puntos sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Columna 1: Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logow.webp"
                alt="PROBAT"
                width={140}
                height={48}
                className="object-contain"
              />
            </div>
            <p className={`${spaceGrotesk.className} text-white/60 text-sm leading-relaxed mb-6`}>
              Especialistas en clasificación, recertificación y fabricación de baterías de litio.
              Tecnología sostenible para un futuro energético.
            </p>
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${spaceGrotesk.className} inline-flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/60 text-blue-400 text-sm font-bold px-4 py-2 rounded-lg transition-all duration-300`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className={`${spaceGrotesk.className} text-white font-bold text-sm uppercase tracking-widest mb-6`}>
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${spaceGrotesk.className} text-white/60 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group`}
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className={`${spaceGrotesk.className} text-white font-bold text-sm uppercase tracking-widest mb-6`}>
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className={`${spaceGrotesk.className} text-white/60 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group`}
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className={`${spaceGrotesk.className} text-white font-bold text-sm uppercase tracking-widest mb-6`}>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0 text-blue-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                <span className={`${spaceGrotesk.className} text-white/60 text-sm`}>+598 937 68645</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0 text-blue-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className={`${spaceGrotesk.className} text-white/60 text-sm`}>contacto@probat.com.uy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0 text-blue-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className={`${spaceGrotesk.className} text-white/60 text-sm`}>Uruguay</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`${spaceGrotesk.className} text-white/40 text-sm`}>
            © {currentYear} PROBAT. Todos los derechos reservados.
          </p>
          <p className={`${spaceGrotesk.className} text-white/40 text-sm`}>
            Baterías de litio · Uruguay
          </p>
        </div>
      </div>
    </footer>
  );
}
