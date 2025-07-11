import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: "fas fa-code",
      title: "システム開発",
      description: "最新のテクノロジーを活用した高品質なシステム開発サービスを提供します。",
      features: ["Webアプリケーション", "モバイルアプリ", "業務システム"]
    },
    {
      icon: "fas fa-chart-line",
      title: "コンサルティング",
      description: "豊富な経験と専門知識を活かしたコンサルティングサービスを提供します。",
      features: ["DX推進支援", "業務改善", "戦略策定"]
    },
    {
      icon: "fas fa-shield-alt",
      title: "サポート",
      description: "導入後も安心してご利用いただけるよう、包括的なサポートを提供します。",
      features: ["24時間監視", "メンテナンス", "技術支援"]
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-japanese-dark mb-4"
          >
            サービス
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-japanese-secondary max-w-2xl mx-auto"
          >
            お客様のニーズに合わせた最適なソリューションを提供します
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
              whileHover={{ y: -5 }}
              className="bg-japanese-light rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-japanese-primary rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-japanese-dark mb-4">{service.title}</h3>
              <p className="text-japanese-secondary mb-6">{service.description}</p>
              <ul className="space-y-2 text-japanese-secondary">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <i className="fas fa-check text-japanese-accent mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
