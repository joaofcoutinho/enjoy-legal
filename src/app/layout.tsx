import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imersão Legado | Enjoy Legal",
  description:
    "Mentalidade, Posicionamento e Resultado: os três pilares para o reconhecimento de advogados e contadores. 12 de Março de 2026 · Coco Bambu - Vila Velha/ES",
  openGraph: {
    title: "Imersão Legado | Enjoy Legal",
    description:
      "Do Especialista Técnico ao Empresário de Elite. Apenas 50 vagas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
