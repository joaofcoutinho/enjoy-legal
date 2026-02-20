"use client";

import { useEffect, useRef, useState } from "react";

const programacao = [
  { hora: "08h00", titulo: "Welcome Coffee & Networking", destaque: false },
  { hora: "09h00", titulo: "Abertura: O Propósito do Movimento", destaque: false },
  {
    hora: "09h20",
    titulo: 'Palestra 1: Estratégia e Gestão — "Meu Escritório é uma Empresa"',
    subtitulo: "Gustavo Fonseca",
    destaque: true,
  },
  {
    hora: "12h00",
    titulo: "Almoço Estratégico no Coco Bambu",
    subtitulo: "Incluso",
    destaque: false,
  },
  {
    hora: "14h00",
    titulo: "Palestra 2: Growth Marketing",
    subtitulo: "Felipe Lomeu",
    destaque: true,
  },
  {
    hora: "15h30",
    titulo: "Boarding: Mentoria Freestyle",
    subtitulo: "Desafios Reais",
    destaque: false,
  },
  { hora: "17h30", titulo: "Happy Hour e Conexão de Alto Nível", destaque: false },
];

export default function ProgramacaoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Linha decorativa direita */}
      <div
        className="absolute right-0 top-0 w-px h-full opacity-30"
        style={{
          background: "linear-gradient(180deg, transparent, #B8935A 50%, transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Label com barra animada */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="h-px flex-1 max-w-16"
              style={{
                background: "linear-gradient(90deg, transparent, #B8935A)",
                transformOrigin: "right",
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                opacity: visible ? 1 : 0,
                transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, opacity 0.9s ease 0.1s",
              }}
            />
            <p
              className="font-montserrat text-xs tracking-[0.35em] uppercase"
              style={{
                color: "#B8935A",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
              }}
            >
              12 de Março de 2026
            </p>
            <div
              className="h-px flex-1 max-w-16"
              style={{
                background: "linear-gradient(90deg, #B8935A, transparent)",
                transformOrigin: "left",
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                opacity: visible ? 1 : 0,
                transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, opacity 0.9s ease 0.1s",
              }}
            />
          </div>

          <h2
            className="font-literata text-4xl md:text-5xl text-white font-light"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            Programação do <span className="gold-text italic">Dia</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical — cresce de cima pra baixo */}
          <div
            ref={lineRef}
            className="absolute left-[4.5rem] md:left-24 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(180deg, transparent, #B8935A 10%, #B8935A 90%, transparent)",
              opacity: 0.35,
              transformOrigin: "top",
              transform: visible ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
            }}
          />

          <div className="space-y-0">
            {programacao.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 md:gap-10 py-6"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-16px)",
                  transition: `opacity 0.6s ease ${0.6 + index * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.6 + index * 0.1}s`,
                }}
              >
                {/* Hora */}
                <div className="flex-shrink-0 w-16 md:w-20 text-right">
                  <span
                    className="font-montserrat text-sm font-medium"
                    style={{ color: "#B8935A" }}
                  >
                    {item.hora}
                  </span>
                </div>

                {/* Ponto diamante — pop individual */}
                <div className="flex-shrink-0 flex items-center justify-center mt-1">
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      background: item.destaque ? "#B8935A" : "#1A1A1A",
                      border: "1px solid #B8935A",
                      transform: visible
                        ? "rotate(45deg) scale(1)"
                        : "rotate(45deg) scale(0)",
                      opacity: visible ? 1 : 0,
                      transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.8 + index * 0.1}s, opacity 0.4s ease ${0.8 + index * 0.1}s`,
                    }}
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 pb-2">
                  <h3
                    className={`font-literata text-lg md:text-xl leading-snug ${
                      item.destaque ? "text-white font-semibold" : "text-gray-300 font-light"
                    }`}
                  >
                    {item.titulo}
                  </h3>
                  {item.subtitulo && (
                    <p
                      className="font-montserrat text-xs mt-1 tracking-wider uppercase"
                      style={{ color: "#B8935A" }}
                    >
                      {item.subtitulo}
                    </p>
                  )}

                  {/* Linha horizontal animada nos destaques */}
                  {item.destaque && (
                    <div
                      className="mt-2 h-px max-w-xs"
                      style={{
                        background: "linear-gradient(90deg, #B8935A, transparent)",
                        transformOrigin: "left",
                        transform: visible ? "scaleX(1)" : "scaleX(0)",
                        opacity: visible ? 0.4 : 0,
                        transition: `transform 0.8s cubic-bezier(0.16,1,0.3,1) ${1 + index * 0.1}s, opacity 0.5s ease ${1 + index * 0.1}s`,
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
