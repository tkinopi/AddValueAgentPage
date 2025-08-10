import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import CompanyLogo from "./CompanyLogo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const isActivePage = (path: string) => {
    return location === path;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <CompanyLogo size="lg" className="text-japanese-primary" />
              <span className="text-2xl font-bold text-japanese-primary">Add Value Agent</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className={`nav-link font-medium transition-colors ${isActivePage("/") ? "text-japanese-primary" : "text-japanese-dark hover:text-japanese-primary"}`}>
                ホーム
              </Link>
              <Link href="/services" className={`nav-link font-medium transition-colors ${isActivePage("/services") ? "text-japanese-primary" : "text-japanese-dark hover:text-japanese-primary"}`}>
                事業内容
              </Link>
              <Link href="/about" className={`nav-link font-medium transition-colors ${isActivePage("/about") ? "text-japanese-primary" : "text-japanese-dark hover:text-japanese-primary"}`}>
                会社概要
              </Link>
              <Link href="/contact" className={`nav-link font-medium transition-colors ${isActivePage("/contact") ? "text-japanese-primary" : "text-japanese-dark hover:text-japanese-primary"}`}>
                お問い合わせ
              </Link>
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
                <Link href="/" onClick={closeMobileMenu} className="flex items-center space-x-3">
                  <CompanyLogo size="md" className="text-japanese-primary" />
                  <span className="text-xl font-bold text-japanese-primary">Add Value Agent</span>
                </Link>
                <button onClick={toggleMobileMenu} className="text-japanese-dark">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="space-y-6">
                <Link href="/" onClick={closeMobileMenu} className={`block font-medium text-lg transition-colors ${isActivePage("/") ? "text-japanese-primary" : "text-japanese-dark hover:text-japanese-primary"}`}>
                  ホーム
                </Link>
                <Link href="/services" onClick={closeMobileMenu} className={`block font-medium text-lg transition-colors ${isActivePage("/services") ? "text-japanese-primary" : "text-japanese-dark hover:text-japanese-primary"}`}>
                  事業内容
                </Link>
                <Link href="/about" onClick={closeMobileMenu} className={`block font-medium text-lg transition-colors ${isActivePage("/about") ? "text-japanese-primary" : "text-japanese-dark hover:text-japanese-primary"}`}>
                  会社概要
                </Link>
                <Link href="/contact" onClick={closeMobileMenu} className={`block font-medium text-lg transition-colors ${isActivePage("/contact") ? "text-japanese-primary" : "text-japanese-dark hover:text-japanese-primary"}`}>
                  お問い合わせ
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
