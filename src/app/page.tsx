import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import RevealFX from "@/components/RevealFX";

/**
 * Single-page portfolio. Each section has an `id` used by the navbar anchors
 * (Home / About / Skills / Projects / Services / Contact).
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <RevealFX />
    </>
  );
}
