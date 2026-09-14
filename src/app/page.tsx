import Navigation from "@/components/ui/Navigation";
import ParticleField from "@/components/3d/ParticleField";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Brand from "@/components/sections/Brand";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30">
      <ParticleField />
      <Navigation />
      
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Brand />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
