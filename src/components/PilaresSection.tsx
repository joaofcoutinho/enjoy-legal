const pilares = [
  {
    numero: "01",
    titulo: "Mentalidade",
    descricao:
      'Quebre os padrões de "especialista" e desenvolva a visão estratégica de dono.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    numero: "02",
    titulo: "Posicionamento",
    descricao:
      "Utilize seu know-how para atrair os clientes certos e cobrar o valor que você merece.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    numero: "03",
    titulo: "Resultado",
    descricao:
      "Ferramentas de gestão, processos e indicadores para alcançar liberdade e prosperidade real.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function PilaresSection() {
  return (
    <section className="section-padding bg-dark relative">
      {/* Background sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #B8935A, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="font-montserrat text-xs tracking-[0.35em] uppercase mb-6"
            style={{ color: "#B8935A" }}
          >
            A Estrutura do Sucesso
          </p>
          <h2 className="font-literata text-4xl md:text-5xl text-white font-light">
            Os Pilares do{" "}
            <span className="gold-text italic">Reconhecimento</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pilares.map((pilar) => (
            <div
              key={pilar.numero}
              className="relative p-8 border border-white/10 group transition-all duration-500 hover:border-amber-400/30"
              style={{ background: "rgba(20,20,20,0.8)" }}
            >
              {/* Número */}
              <span
                className="font-literata text-7xl font-light absolute -top-6 -right-2 opacity-10 select-none"
                style={{ color: "#B8935A" }}
              >
                {pilar.numero}
              </span>

              {/* Ícone */}
              <div
                className="mb-6 transition-all duration-300"
                style={{ color: "#B8935A" }}
              >
                {pilar.icon}
              </div>

              {/* Linha dourada */}
              <div
                className="w-8 h-px mb-6 transition-all duration-300 group-hover:w-16"
                style={{ background: "#B8935A" }}
              />

              {/* Título */}
              <h3 className="font-literata text-2xl text-white font-light mb-4">
                {pilar.titulo}
              </h3>

              {/* Descrição */}
              <p className="font-montserrat text-sm text-gray-400 leading-relaxed">
                {pilar.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
