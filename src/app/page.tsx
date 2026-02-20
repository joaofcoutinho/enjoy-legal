import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DespertarSection from "@/components/DespertarSection";
import PilaresSection from "@/components/PilaresSection";
import PalestrantesSection from "@/components/PalestrantesSection";
import ProgramacaoSection from "@/components/ProgramacaoSection";
import OfertaSection from "@/components/OfertaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <DespertarSection />
      <PilaresSection />
      <PalestrantesSection />
      <ProgramacaoSection />
      <OfertaSection />
      <Footer />
    </main>
  );
}
