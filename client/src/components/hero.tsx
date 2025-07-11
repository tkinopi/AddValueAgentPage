import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Japanese corporate headquarters building with glass facade */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-japanese-primary/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">プロフェッショナル</span>
            <span className="block text-japanese-accent">ソリューション</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            革新的なテクノロジーで企業の成長をサポートします。<br />
            人を中心としたソリューションを提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => scrollToSection("services")}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-japanese-accent hover:bg-japanese-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              <i className="fas fa-rocket mr-2"></i>
              サービス詳細
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-japanese-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              <i className="fas fa-phone mr-2"></i>
              お問い合わせ
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </motion.div>
    </section>
  );
}
