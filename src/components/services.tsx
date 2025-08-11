import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: "fas fa-user-tie",
      title: "人材紹介事業",
      description: "若年層向けキャリア支援と医療福祉領域の専門的な転職支援を提供します。",
      features: ["若年層キャリア支援", "医療福祉分野", "転職コンサルティング"]
    },
    {
      icon: "fas fa-chart-line",
      title: "採用コンサルティング事業",
      description: "効果的な母集団形成と採用単価の削減を実現します。",
      features: ["母集団形成", "採用単価削減", "採用戦略策定"]
    },
    {
      icon: "fas fa-laptop-code",
      title: "SES事業",
      description: "未経験者のキャリア設計から経験者のキャリアアップまでサポートします。",
      features: ["未経験者育成", "キャリア設計", "待遇改善"]
    },
    {
      icon: "fas fa-globe",
      title: "webコンサルティング事業",
      description: "デジタル戦略から実装まで、Webを活用した企業の成長を支援します。",
      features: ["デジタル戦略", "Web制作", "マーケティング"]
    },
    {
      icon: "fas fa-graduation-cap",
      title: "教育支援",
      description: "人材育成と教育プログラムで組織の成長を促進します。",
      features: ["人材育成", "研修プログラム", "スキルアップ"]
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
            事業内容
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-japanese-secondary max-w-2xl mx-auto"
          >
            採用で価値を創る、多角的な事業展開で企業の成長をサポート
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
