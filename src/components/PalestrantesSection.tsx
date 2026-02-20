import Image from "next/image";

const palestrantes = [
  {
    nome: "Gustavo Fonseca",
    titulo: "Estratégia e Gestão para Advogados e Contadores",
    subtitulo: "Meu Escritório é uma Empresa.",
    conteudo:
      "Gustavo Fonseca trará a visão prática de como transformar a sua operação técnica em uma estrutura empresarial sólida, focada em eficiência, clareza nas decisões e crescimento sustentável.",
    numero: "01",
    foto: "/gustavo fonseca (2).png",
  },
  {
    nome: "Felipe Lomeu",
    titulo: "Growth Marketing",
    subtitulo: "Para Advogados e Contadores.",
    conteudo:
      "Felipe Lomeu apresenta as estratégias de crescimento acelerado e posicionamento digital para atrair os melhores clientes e escalar a sua autoridade no mercado jurídico e contábil.",
    numero: "02",
    foto: "/felipe lomeu (2).png",
  },
];

export default function PalestrantesSection() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Linha topo */}
      <div
        className="absolute top-0 left-0 w-full h-px opacity-40"
        style={{ background: "linear-gradient(90deg, transparent, #B8935A, transparent)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, #B8935A, transparent 60%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <p
            className="font-montserrat text-xs tracking-[0.35em] uppercase mb-6"
            style={{ color: "#B8935A" }}
          >
            Conteúdo de Alto Nível
          </p>
          <h2 className="font-literata text-4xl md:text-5xl text-white font-light">
            Os Gigantes do <span className="gold-text italic">Mercado</span>
          </h2>
        </div>

        {/* Chamada */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="gold-line max-w-xs mx-auto my-8" />
          <p className="font-montserrat text-sm md:text-base text-gray-400 leading-relaxed italic">
            &ldquo;Mentores com nomes gigantes no estado do Espírito Santo vêm para a{" "}
            <span className="text-white font-semibold not-italic">Imersão LEGADO</span>{" "}
            compartilhar um conteúdo rico que pode virar o seu jogo.&rdquo;
          </p>
          <div className="gold-line max-w-xs mx-auto my-8" />
        </div>

        {/* Blocos */}
        <div className="flex flex-col gap-8">
          {palestrantes.map((p, index) => (
            <div
              key={p.nome}
              className={`relative flex flex-col md:flex-row gap-0 border border-white/10 overflow-hidden transition-all duration-300 hover:border-amber-400/30 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ background: "rgba(14,14,14,0.9)" }}
            >
              {/* Foto */}
              <div className="md:w-80 flex-shrink-0 relative min-h-72 md:min-h-[22rem] overflow-hidden">
                <Image
                  src={p.foto}
                  alt={p.nome}
                  fill
                  className="object-cover object-top"
                  style={{ filter: "grayscale(20%) brightness(0.88) contrast(1.05)" }}
                  sizes="(max-width: 768px) 100vw, 320px"
                />

                {/* Gradiente sobre a foto — lado que encontra o conteúdo */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: index % 2 === 0
                      ? "linear-gradient(to right, transparent 50%, rgba(14,14,14,0.85) 100%)"
                      : "linear-gradient(to left, transparent 50%, rgba(14,14,14,0.85) 100%)",
                  }}
                />

                {/* Gradiente base para mobile */}
                <div
                  className="absolute inset-0 md:hidden"
                  style={{ background: "linear-gradient(to top, rgba(14,14,14,0.9) 0%, transparent 60%)" }}
                />

                {/* Número decorativo */}
                <span
                  className="absolute bottom-3 right-4 font-literata text-7xl font-bold opacity-[0.12] select-none"
                  style={{ color: "#B8935A" }}
                >
                  {p.numero}
                </span>

                {/* Linha lateral dourada */}
                <div
                  className={`absolute top-0 ${index % 2 === 1 ? "left-0" : "right-0"} w-px h-full opacity-40`}
                  style={{
                    background: "linear-gradient(180deg, transparent, #B8935A 50%, transparent)",
                  }}
                />
              </div>

              {/* Conteúdo */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <p
                  className="font-montserrat text-xs tracking-[0.25em] uppercase mb-3"
                  style={{ color: "#B8935A" }}
                >
                  Palestra {p.numero}
                </p>

                <h3 className="font-literata text-2xl md:text-3xl text-white font-semibold leading-tight mb-1">
                  {p.titulo}
                </h3>
                <p className="font-literata text-lg text-gray-400 italic mb-5">
                  {p.subtitulo}
                </p>

                <div className="w-10 h-px mb-5" style={{ background: "#B8935A", opacity: 0.5 }} />

                <p
                  className="font-montserrat text-sm font-semibold tracking-wider mb-4"
                  style={{ color: "#B8935A" }}
                >
                  {p.nome}
                </p>

                <p className="font-montserrat text-sm text-gray-400 leading-relaxed">
                  {p.conteudo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
