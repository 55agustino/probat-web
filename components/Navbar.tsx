import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <Image
            src="/logow.webp"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </nav>
  );
}
