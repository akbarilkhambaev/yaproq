import Symbols from "@/components/Symbols";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import BrewBuilder from "@/components/BrewBuilder";
import Ritual from "@/components/Ritual";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Symbols />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <BrewBuilder />
        <Ritual />
        <Visit />
      </main>
      <Footer />
      <Animations />
    </div>
  );
}
