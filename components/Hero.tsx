export default function Hero() {
  return (
    <section 
      className="h-[50vh] flex items-center bg-gradient-to-t from-black to-transparent-600 relative"
      style={{
        backgroundImage: 'url(/cuadriculahero1366x654.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent 600/80"></div>
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

