import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Lightbox />
    </>
  );
}
