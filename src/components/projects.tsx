import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectsProps {
  onImageClick: (imageSrc: string) => void;
}

export default function Projects({ onImageClick }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "オフィスビル設計",
      description: "現代的な建築デザインによるオフィス空間",
      alt: "Modern Japanese office architecture"
    },
    {
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "技術革新センター",
      description: "最先端テクノロジーによる革新的ソリューション",
      alt: "Japanese technology innovation center"
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "企業本社ビル",
      description: "ガラスファサードを活用した現代的な企業本社",
      alt: "Japanese corporate headquarters with modern design"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "現代建築デザイン",
      description: "伝統と革新を融合した建築ソリューション",
      alt: "Modern Japanese architecture with clean lines"
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "コンサルティング",
      description: "戦略的なビジネスコンサルティングサービス",
      alt: "Professional Japanese business meeting"
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "システム開発",
      description: "最新技術を活用したシステム開発プロジェクト",
      alt: "Japanese technology and innovation workspace"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-japanese-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-japanese-dark mb-4"
          >
            実績紹介
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-japanese-secondary max-w-2xl mx-auto"
          >
            これまでに手がけた代表的なプロジェクトをご紹介します
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
              className="group cursor-pointer"
              onClick={() => onImageClick(project.image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-japanese-primary/0 group-hover:bg-japanese-primary/80 transition-all duration-300 flex items-center justify-center">
                  <i className="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-japanese-dark mb-2">{project.title}</h3>
                <p className="text-japanese-secondary">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
