import Image from "next/image";
import { spaceGrotesk } from "@/lib/fonts";

export default function ServicesSection() {

  const services = [
    {
      title: "CLASIFICACIÓN",
      description: "Las baterías son desensambladas para extraer scrap de aluminio y cobre, así como las celdas de litio, que serán sometidas a un proceso de recertificación.",
      image: "/makingof1.webp"
    },
    {
      title: "RECERTIFICACIÓN",
      description: "La recertificación se hace con cargadores específicos para cada tipo de celda, mediante pruebas de carga y descarga, lo que permite clasificar y reutilizar cada celda.",
      image: "/RECERTIFICACION.webp"
    },
    {
      title: "SEGUNDA VIDA",
      description: "Revalorización de celdas que han llegado al final de su vida útil, convirtiendolas en nueva materia prima pronta para su comercialización y reutilización.",
      image: "/def/segundavida.webp"
    },
    {
      title: "FABRICACIÓN",
      description: "Con celdas Li-ion NCM y Lifepo4 LFP se fabrican baterías para bicicletas, motos y citycars; así como baterias para sistemas de acumuladores solares/eólicos.",
      image: "/def/fabricacion.webp"
    }
  ];

  return (
    <section id="servicios" className="bg-black pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center ${spaceGrotesk.className}`}>
          Nuestros <span className="text-blue-400">Servicios</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[480px] rounded-xl overflow-hidden cursor-default"
            >
              {/* Imagen de fondo */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradiente overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              {/* Borde de color al hover */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-blue-400/50 transition-all duration-500" />

              {/* Contenido */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className={`${spaceGrotesk.className} text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-2`}>
                  Servicio
                </span>
                <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white mb-3 leading-tight`}>
                  {service.title}
                </h3>
                <p className={`${spaceGrotesk.className} text-sm text-white/80 leading-relaxed`}>
                  {service.description}
                </p>
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
            Sus procesos transforman lo que sería un &ldquo;desecho&rdquo; en valiosa materia prima.
          </p>
        </div>
      </div>
    </section>
  );
}