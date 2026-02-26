import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-5 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="select-none">
        <Image
          src="/logo-enjoy.png"
          alt="Enjoy Legal"
          width={120}
          height={48}
          className="object-contain"
          priority
        />
      </a>

      {/* CTA mini */}
      <a href="https://bit.ly/enjoy-imersao-legado" target="_blank" rel="noopener noreferrer" className="hidden md:block btn-gold text-xs py-3 px-6">
        Garantir Vaga
      </a>
    </header>
  );
}
