const mentores = [
  {
    nome: "Rodrigo Miranda",
    papel: "Mentoria Master",
    descricao: "Estratégia empresarial e visão de dono para profissionais do direito e contabilidade.",
    destaque: true,
  },
  {
    nome: "Wander Miranda",
    papel: "Mentor Confirmado",
    descricao: "CEO da Enjoy Educação. Fundador da Imersão Máxima de Resultados com mais de 1.500 empresários.",
    destaque: false,
  },
  {
    nome: "Vitor Escocard",
    papel: "Mentor Confirmado",
    descricao: "Especialista em crescimento e alavancagem de negócios jurídicos e contábeis.",
    destaque: false,
  },
  {
    nome: "Marral Lage",
    papel: "Mentor Confirmado",
    descricao: "Expertise em posicionamento estratégico e modelos de negócio de alto valor.",
    destaque: false,
  },
];

function MentorCard({
  mentor,
}: {
  mentor: (typeof mentores)[0];
}) {
  return (
    <div
      className={`relative p-8 border transition-all duration-300 group ${
        mentor.destaque
          ? "border-amber-400/40 col-span-1 md:col-span-2"
          : "border-white/10 hover:border-amber-400/20"
      }`}
      style={{ background: "rgba(14,14,14,0.9)" }}
    >
      {mentor.destaque && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
        />
      )}

      {/* Avatar placeholder (B&W style) */}
      <div
        className="w-16 h-16 rounded-full mb-5 flex items-center justify-center border"
        style={{ borderColor: "rgba(201,168,76,0.3)", background: "#1a1a1a" }}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
          style={{ color: "#C9A84C" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>

      {/* Papel */}
      <p
        className="font-montserrat text-xs tracking-[0.25em] uppercase mb-2"
        style={{ color: "#C9A84C" }}
      >
        {mentor.papel}
      </p>

      {/* Nome */}
      <h3
        className={`font-literata mb-3 text-white ${
          mentor.destaque ? "text-3xl font-semibold" : "text-xl font-light"
        }`}
      >
        {mentor.nome}
      </h3>

      <div
        className="w-8 h-px mb-4"
        style={{ background: "#C9A84C", opacity: 0.5 }}
      />

      {/* Descrição */}
      <p className="font-montserrat text-sm text-gray-400 leading-relaxed">
        {mentor.descricao}
      </p>
    </div>
  );
}

export default function MentoresSection() {
  return (
    <section className="section-padding bg-dark relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-montserrat text-xs tracking-[0.35em] uppercase mb-6"
            style={{ color: "#C9A84C" }}
          >
            Quem vai transformar sua visão
          </p>
          <h2 className="font-literata text-4xl md:text-5xl text-white font-light">
            Os <span className="gold-text italic">Mentores</span>
          </h2>
        </div>

        {/* Grid de mentores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentores.map((mentor) => (
            <MentorCard key={mentor.nome} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}
