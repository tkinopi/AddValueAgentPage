import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./projects";

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const openLightbox = (src: string) => {
    setImageSrc(src);
    setIsOpen(true);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = "auto";
    }
    setImageSrc("");
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    if (isOpen && typeof window !== 'undefined') {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener("keydown", handleEscape);
      }
    };
  }, [isOpen]);

  return (
    <>
      <Projects onImageClick={openLightbox} />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageSrc}
                alt="Project detail"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
