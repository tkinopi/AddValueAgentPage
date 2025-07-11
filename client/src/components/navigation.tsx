import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-japanese-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-japanese-primary">Human</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="nav-link text-japanese-dark hover:text-japanese-primary font-medium">
                ホーム
              </button>
              <button onClick={() => scrollToSection("services")} className="nav-link text-japanese-dark hover:text-japanese-primary font-medium">
                サービス
              </button>
              <button onClick={() => scrollToSection("about")} className="nav-link text-japanese-dark hover:text-japanese-primary font-medium">
                会社概要
              </button>
              <button onClick={() => scrollToSection("projects")} className="nav-link text-japanese-dark hover:text-japanese-primary font-medium">
                実績
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link text-japanese-dark hover:text-japanese-primary font-medium">
                お問い合わせ
              </button>
            </div>
            
            <button className="md:hidden text-japanese-dark" onClick={toggleMobileMenu}>
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-white z-40 md:hidden"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-bold text-japanese-primary">Human</span>
                <button onClick={toggleMobileMenu} className="text-japanese-dark">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="space-y-6">
                <button onClick={() => scrollToSection("home")} className="block text-japanese-dark hover:text-japanese-primary font-medium text-lg">
                  ホーム
                </button>
                <button onClick={() => scrollToSection("services")} className="block text-japanese-dark hover:text-japanese-primary font-medium text-lg">
                  サービス
                </button>
                <button onClick={() => scrollToSection("about")} className="block text-japanese-dark hover:text-japanese-primary font-medium text-lg">
                  会社概要
                </button>
                <button onClick={() => scrollToSection("projects")} className="block text-japanese-dark hover:text-japanese-primary font-medium text-lg">
                  実績
                </button>
                <button onClick={() => scrollToSection("contact")} className="block text-japanese-dark hover:text-japanese-primary font-medium text-lg">
                  お問い合わせ
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
