export default function DespertarSection() {
  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Elemento decorativo */}
      <div
        className="absolute left-0 top-0 w-1 h-full"
        style={{
          background:
            "linear-gradient(180deg, transparent, #B8935A 50%, transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <p
          className="font-montserrat text-xs tracking-[0.35em] uppercase mb-8"
          style={{ color: "#B8935A" }}
        >
          O Ponto de Virada
        </p>

        {/* Título */}
        <h2 className="font-literata text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mb-10">
          Do Especialista Técnico ao{" "}
          <span className="gold-text font-semibold italic">
            Empresário de Elite.
          </span>
        </h2>

        <div className="gold-line max-w-xs mx-auto mb-10" />

        {/* Corpo */}
        <p className="font-montserrat text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          O{" "}
          <span className="text-white font-semibold">Enjoy Legal</span> é a
          sua convocação para sair do operacional e escalar. Não negamos a
          técnica; nós a colocamos a serviço de um modelo de negócio sólido.
          Chegou a hora de deixar de ser apenas um especialista para se tornar
          o{" "}
          <span
            className="font-semibold"
            style={{ color: "#B8935A" }}
          >
            CEO do seu próprio legado.
          </span>
        </p>
      </div>
    </section>
  );
}
