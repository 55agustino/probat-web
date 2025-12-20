export default function Hero() {
  return (
    <section className="h-[50vh] flex items-center relative bg-black">
      {/* Cuadrícula CSS */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          backgroundPosition: '0 15px',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Gradiente superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-left">
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to Probat Web
          </h1>
          <p className="text-2xl text-white">
            Built with Next.js, React 19, and Tailwind CSS v3
          </p>
        </div>
      </div>
    </section>
  );
}

