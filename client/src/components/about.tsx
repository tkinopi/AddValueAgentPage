import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: "fas fa-lightbulb",
      title: "革新",
      description: "最新技術を活用した革新的なソリューション"
    },
    {
      icon: "fas fa-heart",
      title: "信頼",
      description: "長年の実績と豊富な経験による信頼性"
    },
    {
      icon: "fas fa-rocket",
      title: "成長",
      description: "お客様と共に成長し続けるパートナーシップ"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      {/* Professional Japanese team in a modern conference room */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-japanese-primary/85"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            会社概要
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed mb-12 opacity-90"
          >
            私たちは、人を中心とした革新的なソリューションを提供する専門企業です。<br />
            テクノロジーの力で、お客様の課題解決と成長をサポートします。
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                className="glass-effect rounded-xl p-6"
              >
                <i className={`${value.icon} text-japanese-accent text-4xl mb-4`}></i>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
