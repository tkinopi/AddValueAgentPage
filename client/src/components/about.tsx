import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: "fas fa-handshake",
      title: "信頼",
      description: "一人ひとりに寄り添うパートナーシップ"
    },
    {
      icon: "fas fa-trophy",
      title: "価値創造",
      description: "採用を通じて企業の価値向上を実現"
    },
    {
      icon: "fas fa-users",
      title: "人材育成",
      description: "個人の成長と企業の発展を両立"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      {/* Professional Japanese team collaboration and networking */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-shadow-lg"
          >
            会社概要
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed mb-12 opacity-90 text-shadow"
          >
            株式会社アドバリューエージェントは、人材と企業をつなぐ架け橋として、<br />
            採用を通じて真の価値創造を実現する専門企業です。
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
                <h3 className="text-xl font-bold mb-2 text-shadow">{value.title}</h3>
                <p className="opacity-90 text-shadow">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
