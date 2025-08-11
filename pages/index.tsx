import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      {/* <Stats /> */}
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}