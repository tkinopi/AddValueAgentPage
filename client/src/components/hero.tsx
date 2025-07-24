import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Professional business meeting and handshake representing recruitment and partnerships */}
      <div 
        className="absolute inset-0 parallax-bg bg-gray-600"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          minHeight: "100vh"
        }}
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-shadow-lg">
            <span className="block">ADD VALUE AGENT</span>
            <span className="block text-japanese-accent">採用で価値を創る</span>
          </h1>
          <p className="text-base md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 text-shadow">
            人材紹介から採用コンサルティングまで、<br />
            企業の成長に必要な人的資源を提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/services"
                className="block bg-japanese-accent hover:bg-japanese-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <i className="fas fa-briefcase mr-2"></i>
                事業内容
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="block bg-transparent border-2 border-white text-white hover:bg-white hover:text-japanese-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <i className="fas fa-phone mr-2"></i>
                お問い合わせ
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - positioned to avoid overlap with contact button */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </motion.div>
    </section>
  );
}
