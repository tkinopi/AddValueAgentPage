import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ServicesPage() {
  const services = [
    {
      title: "ADD VALUE RECRUIT",
      subtitle: "人材紹介事業",
      description: "企業様のニーズに合った優秀な人材をご紹介いたします。IT業界を中心に、様々な分野での人材マッチングを行っており、求職者と企業を繋ぐ架け橋として機能します。",
      features: [
        "ITエンジニア・プログラマー",
        "営業・マーケティング",
        "管理職・役員クラス",
        "専門職・技術者"
      ],
      mockupContent: "人材データベース",
      bgColor: "bg-blue-500",
      shapeColor: "bg-blue-500"
    },
    {
      title: "ADD VALUE CONSULTING",
      subtitle: "採用コンサルティング",
      description: "企業様の採用課題を解決するため、戦略的な採用支援を行います。採用プロセスの最適化から面接官研修まで、トータルサポートいたします。",
      features: [
        "採用戦略立案",
        "求人票作成支援",
        "面接官研修",
        "採用プロセス改善"
      ],
      mockupContent: "コンサルティング",
      bgColor: "bg-purple-500",
      shapeColor: "bg-purple-500"
    },
    {
      title: "ADD VALUE SES",
      subtitle: "SES事業",
      description: "システムエンジニアリングサービスとして、お客様のプロジェクトに最適な技術者を紹介いたします。短期から長期まで、柔軟な契約形態に対応しております。",
      features: [
        "Webアプリケーション開発",
        "インフラ構築・運用",
        "データベース設計・構築",
        "システム保守・運用"
      ],
      mockupContent: "技術者紹介",
      bgColor: "bg-green-500",
      shapeColor: "bg-green-500"
    },
    {
      title: "ADD VALUE WEB",
      subtitle: "webコンサルティング",
      description: "企業様のWebサイトやWebマーケティングに関する課題解決をサポートいたします。戦略立案から実装まで一貫してお手伝いします。",
      features: [
        "Webサイト制作・リニューアル",
        "SEO対策",
        "Webマーケティング戦略",
        "アクセス解析・改善提案"
      ],
      mockupContent: "Webサイト制作",
      bgColor: "bg-pink-500",
      shapeColor: "bg-pink-500"
    },
    {
      title: "ADD VALUE EDUCATION",
      subtitle: "教育支援",
      description: "IT技術者のスキルアップや新人研修など、人材育成に関する支援を行っております。実践的なカリキュラムで即戦力となる人材を育成します。",
      features: [
        "プログラミング研修",
        "新人エンジニア研修",
        "マネジメント研修",
        "資格取得支援"
      ],
      mockupContent: "教育プラットフォーム",
      bgColor: "bg-orange-500",
      shapeColor: "bg-orange-500"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="text-center py-16 bg-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-japanese-dark mb-4"
          >
            SERVICES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-japanese-secondary mb-4"
          >
            事業内容
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-japanese-secondary max-w-2xl mx-auto px-4"
          >
            ADD VALUE AGENTは人材と企業をつなぐ総合的なサービスを提供します。<br />
            優秀なチームや技術者との出会いを実現し、<br />
            ビジネスの課題解決に貢献します。
          </motion.p>
        </div>

        {/* Services Sections */}
        {services.map((service, index) => (
          <section key={index} className={`py-20 overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Mockup Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 relative"
                >
                  {/* Geometric Shapes */}
                  <div className="relative">
                    <div className={`absolute -top-10 -right-10 w-32 h-32 ${service.shapeColor} rounded-full opacity-20`}></div>
                    <div className={`absolute -bottom-10 -left-10 w-24 h-24 bg-black transform rotate-45 opacity-10`}></div>
                    
                    {/* Mockup Device */}
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                      <div className="bg-gray-100 rounded-lg p-6 min-h-[300px] flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-center">
                            <div className={`w-16 h-16 ${service.bgColor} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                              <i className="fas fa-briefcase text-white text-2xl"></i>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">{service.mockupContent}</h3>
                            <div className="space-y-2">
                              {service.features.slice(0, 2).map((feature, idx) => (
                                <div key={idx} className="bg-white p-2 rounded text-sm text-gray-600">{feature}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Triangle decoration */}
                    <div className={`absolute ${index % 2 === 0 ? '-bottom-6 -right-6' : '-bottom-6 -left-6'} w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-black opacity-80`}></div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 space-y-6"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-japanese-dark mb-2">{service.title}</h2>
                    <p className="text-japanese-secondary text-sm mb-4">{service.subtitle}</p>
                  </div>

                  <h3 className="text-xl font-semibold text-japanese-dark">
                    "{service.subtitle}で価値を創造"
                  </h3>

                  <p className="text-japanese-secondary leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 ${service.bgColor} rounded-full`}></div>
                        <span className="text-japanese-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      className={`${service.bgColor} hover:opacity-90 text-white px-6 py-2 rounded-full`}
                    >
                      <Link href={`/services/${service.title.toLowerCase().replace('add value ', '')}`}>詳しく見る</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gray-300 text-gray-600 px-6 py-2 rounded-full"
                    >
                      <Link href="/contact">お問い合わせ</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-japanese-primary text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <h2 className="text-3xl font-bold mb-4">お気軽にご相談ください</h2>
            <p className="text-lg mb-8 opacity-90">
              あなたのビジネスに最適なソリューションをご提案します
            </p>
            <Button 
              size="lg" 
              className="bg-white text-japanese-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
            >
              <Link href="/contact">今すぐお問い合わせ</Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}