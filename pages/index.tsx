import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Seo from "@/components/seo";

export default function Home() {
  return (
    <>
      <Seo description="株式会社アドバリューエージェントは神戸を拠点に、人材紹介、採用コンサルティング、SES事業、Webコンサルティング、教育支援を提供。若年層キャリア支援と医療福祉分野の転職支援に特化した総合人材ソリューション企業です。" path="/" />
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