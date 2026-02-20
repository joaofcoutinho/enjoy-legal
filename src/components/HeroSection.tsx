import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Faixa dourada topo */}
      <div
        className="absolute top-0 left-0 w-full z-20 anim-stripe"
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #3a2510 0%, #D4B07A 25%, #B8935A 50%, #D4B07A 75%, #3a2510 100%)",
          animationDelay: "0.1s",
        }}
      />

      {/* ── FOTO COCO BAMBU ── discreta, sofisticada */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/CocoBambu.png"
          alt="Coco Bambu"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          style={{ filter: "grayscale(30%) brightness(0.35) contrast(1.1)" }}
        />
      </div>

      {/* Camada 1 — preto profundo cobrindo base e laterais */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)
          `,
        }}
      />

      {/* Camada 2 — gradiente vertical: escuro em cima, mais visível no meio, escuro embaixo */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(8,8,8,0.75) 0%,
              rgba(8,8,8,0.20) 35%,
              rgba(8,8,8,0.20) 65%,
              rgba(8,8,8,0.85) 100%
            )
          `,
        }}
      />

      {/* Camada 3 — véu dourado muito sutil para aquecer a foto */}
      <div
        className="absolute inset-0 z-[3] opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, #B8935A 0%, transparent 70%)",
        }}
      />

      {/* Linhas onduladas decorativas */}
      <div className="absolute bottom-0 right-0 z-[4] opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 400 180" className="w-72 md:w-96" fill="none">
          {[0, 18, 36, 54, 72].map((offset, i) => (
            <path
              key={i}
              d={`M ${410 - offset} 180 Q ${310 - offset} ${130 + i * 4} ${200 - offset} ${150 + i * 3} T -20 ${170 + i * 3}`}
              stroke="#B8935A"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-16">
        {/* Apoio */}
        <p className="font-montserrat text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#B8935A" }}>
          Movimento Enjoy Legal Apresenta
        </p>

        {/* Separador */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 max-w-20 gold-line anim-gold-line" style={{ animationDelay: "0.5s" }} />
          <div className="w-1.5 h-1.5 rotate-45 anim-fade-up" style={{ background: "#B8935A", animationDelay: "0.8s" }} />
          <div className="flex-1 max-w-20 gold-line anim-gold-line" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Label IMERSÃO */}
        <p className="font-montserrat text-xs tracking-[0.55em] uppercase text-white/70 mb-2">
          IMERSÃO
        </p>

        {/* Título LEGADO */}
        <h1
          className="font-literata font-bold text-white leading-none mb-8 drop-shadow-2xl"
          style={{ fontSize: "clamp(4rem, 11vw, 8rem)", textShadow: "0 4px 40px rgba(0,0,0,0.8)" }}
        >
          LEGADO
        </h1>

        
        {/* Subtítulo dourado */}
        <p
          className="font-montserrat text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-2"
          style={{ color: "#B8935A" }}
        >
          Mentalidade, Posicionamento e Resultado
        </p>
        <p className="font-montserrat text-sm md:text-base text-white/80 mb-12">
          Os três pilares para o reconhecimento de advogados e contadores.
        </p>

        {/* Data e Local */}
        <div className="flex items-center justify-center gap-3 mb-12 font-montserrat text-xs text-white/65 tracking-widest uppercase">
          <span>12 de Março de 2026</span>
          <span style={{ color: "#B8935A" }}>·</span>
          <span>Coco Bambu — Vila Velha/ES</span>
        </div>

        {/* CTA */}
        <a href="#oferta" className="btn-gold text-sm">
          Quero Construir Meu Legado
        </a>

        {/* Scroll */}
        <div className="mt-16 flex flex-col items-center opacity-25">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-amber-600" />
        </div>
      </div>

      {/* Faixa dourada base */}
      <div
        className="absolute bottom-0 left-0 w-full z-20 anim-stripe"
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #3a2510 0%, #D4B07A 25%, #B8935A 50%, #D4B07A 75%, #3a2510 100%)",
          animationDelay: "0.3s",
        }}
      />
    </section>
  );
}
