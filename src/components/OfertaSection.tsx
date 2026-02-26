const inclusos = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    texto: "Dia inteiro de imersão",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    texto: "Almoço no Coco Bambu",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    texto: "Happy Hour de Alto Nível",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    texto: "Acesso à Comunidade Enjoy Legal",
  },
];

export default function OfertaSection() {
  return (
    <section
      id="oferta"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D0B07 0%, #141008 50%, #0A0A0A 100%)" }}
    >
      {/* Bordas douradas */}
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute bottom-0 left-0 w-full h-px gold-line" />

      {/* Brilho central */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 100%, #B8935A, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Label urgência */}
        <div
          className="inline-block font-montserrat text-xs tracking-[0.3em] uppercase px-6 py-2 border mb-10"
          style={{ borderColor: "rgba(201,168,76,0.4)", color: "#B8935A" }}
        >
          Vagas Limitadas
        </div>

        {/* Chamada principal */}
        <h2 className="font-literata text-4xl md:text-6xl text-white font-light leading-tight mb-4">
          Faça parte do{" "}
          <span className="gold-text italic font-semibold">movimento.</span>
        </h2>
        <p
          className="font-montserrat text-sm tracking-widest uppercase mb-12"
          style={{ color: "#B8935A" }}
        >
          Apenas 50 vagas disponíveis
        </p>

        <div className="gold-line max-w-xs mx-auto mb-12" />

        {/* O que inclui */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
          {inclusos.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <div style={{ color: "#B8935A" }} className="flex-shrink-0">
                {item.icon}
              </div>
              <span className="font-montserrat text-sm text-gray-300">
                {item.texto}
              </span>
            </div>
          ))}
        </div>

        <div className="gold-line max-w-xs mx-auto mb-12" />

        {/* Investimento */}
        <div className="mb-4">
          <p className="font-montserrat text-xs tracking-widest uppercase text-gray-500 mb-2">
            Investimento
          </p>
          <p className="font-literata text-5xl md:text-6xl text-white font-light">
            R${" "}
            <span className="gold-text font-semibold">2.000</span>
            <span className="text-2xl text-gray-400">,00</span>
          </p>
        </div>

        <p className="font-montserrat text-xs text-gray-500 mb-12 tracking-wider">
          12 de Março de 2026 · Coco Bambu, Vila Velha/ES
        </p>

        {/* CTA principal */}
        <a href="https://bit.ly/enjoy-imersao-legado" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm inline-block mb-4">
          Garantir Minha Vaga na Imersão
        </a>

        <p className="font-montserrat text-xs text-gray-600 mt-6">
          Após a confirmação do pagamento, você receberá todos os detalhes por e-mail.
        </p>
      </div>
    </section>
  );
}
