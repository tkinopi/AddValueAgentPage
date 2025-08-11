import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Professional business meeting and handshake representing recruitment and partnerships */}
      <div 
        className="absolute inset-0 parallax-bg bg-gray-600"
        style={{
          backgroundImage: "url('/heroimageforaddvalue.png')",
          minHeight: "100vh"
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute top-20 left-8 md:top-28 md:left-16 z-20"
      >
        <div className="text-white" style={{ width: '150px', height: '150px' }}>
          <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10 L10 10 L10 60" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-20 right-8 md:bottom-28 md:right-16 z-20"
      >
        <div className="text-white" style={{ width: '150px', height: '150px' }}>
          <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 90 L140 140 L90 140" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>
      
      <div className="relative z-10 text-center text-white px-4 mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-shadow-lg" style={{fontFamily: '"Noto Sans JP", sans-serif'}}>
            <span className="block">働くに＋Value。</span>
          </h1>
          <p className="text-base md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 text-shadow" style={{fontFamily: '"Noto Sans JP", sans-serif'}}>
            Add Value Agent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/services"
                className="block bg-japanese-accent hover:bg-japanese-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                style={{fontFamily: '"Noto Sans JP", sans-serif'}}
              >
                <i className="fas fa-briefcase mr-2"></i>
                事業内容
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                style={{fontFamily: '"Noto Sans JP", sans-serif'}}
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
