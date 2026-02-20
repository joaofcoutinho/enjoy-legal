import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-dark border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logo-enjoy.png"
          alt="Enjoy Legal"
          width={100}
          height={40}
          className="object-contain opacity-70"
        />

        <p className="font-montserrat text-xs text-gray-600 text-center">
          © 2026 Enjoy Legal · Todos os direitos reservados
        </p>

        <p className="font-montserrat text-xs text-gray-600">
          12 de Março de 2026 · Vila Velha/ES
        </p>
      </div>
    </footer>
  );
}
