import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WebPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pink-500 to-pink-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl font-bold mb-6">ADD VALUE WEB</h1>
              <p className="text-xl mb-8 opacity-90">webコンサルティング</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                企業様のWebサイトやWebマーケティングに関する課題解決をサポートいたします。戦略立案から実装まで一貫してお手伝いします。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">サービス内容</h2>
                <p className="text-japanese-secondary max-w-3xl mx-auto">
                  デジタル時代に適応したWebソリューションで、企業様のオンラインプレゼンスを強化し、ビジネス成長を支援します。
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "fas fa-palette",
                    title: "Webサイト制作・リニューアル",
                    description: "ユーザー体験を重視した魅力的で機能的なWebサイトを制作します",
                    services: [
                      "コーポレートサイト制作",
                      "ECサイト構築", 
                      "ランディングページ制作",
                      "レスポンシブデザイン",
                      "CMS導入・カスタマイズ",
                      "既存サイトリニューアル"
                    ],
                    process: "要件定義 → デザイン → 開発 → テスト → 公開"
                  },
                  {
                    icon: "fas fa-search",
                    title: "SEO対策",
                    description: "検索エンジンでの上位表示を実現し、自然流入を増加させます",
                    services: [
                      "キーワード調査・分析",
                      "コンテンツ最適化",
                      "内部SEO対策",
                      "外部SEO対策",
                      "テクニカルSEO",
                      "競合分析・対策"
                    ],
                    process: "現状分析 → 戦略立案 → 実装 → 効果測定 → 改善"
                  },
                  {
                    icon: "fas fa-bullhorn",
                    title: "Webマーケティング戦略",
                    description: "デジタルマーケティングの総合戦略でビジネス成果を最大化します",
                    services: [
                      "マーケティング戦略立案",
                      "広告運用（Google/SNS）",
                      "SNSマーケティング",
                      "メールマーケティング",
                      "コンテンツマーケティング",
                      "CRM・MA導入支援"
                    ],
                    process: "戦略策定 → 施策実行 → 効果測定 → 最適化 → 拡大"
                  },
                  {
                    icon: "fas fa-chart-bar",
                    title: "アクセス解析・改善提案",
                    description: "データに基づいた分析と改善提案でWebサイトの成果を向上させます",
                    services: [
                      "Google Analytics設定",
                      "ユーザー行動分析",
                      "コンバージョン分析",
                      "A/Bテスト実施",
                      "ヒートマップ解析",
                      "改善提案・実装"
                    ],
                    process: "現状把握 → データ分析 → 課題抽出 → 改善実装 → 効果検証"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
                      <i className={`${service.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-japanese-dark mb-4">{service.title}</h3>
                    <p className="text-japanese-secondary mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-japanese-dark mb-3">主なサービス</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.services.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-japanese-secondary">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-japanese-dark mb-2">プロセス</h4>
                      <p className="text-sm text-japanese-secondary bg-white p-3 rounded">{service.process}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">対応技術・ツール</h2>
                <p className="text-japanese-secondary">最新の技術とツールを活用して最適なソリューションを提供します</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    category: "フロントエンド",
                    technologies: ["HTML5/CSS3", "JavaScript", "React", "Vue.js", "TypeScript", "Sass/SCSS"],
                    color: "bg-blue-500"
                  },
                  {
                    category: "バックエンド",
                    technologies: ["Node.js", "PHP", "Python", "WordPress", "Shopify", "Strapi"],
                    color: "bg-green-500"
                  },
                  {
                    category: "マーケティングツール",
                    technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "HubSpot", "Mailchimp", "Hotjar"],
                    color: "bg-purple-500"
                  },
                  {
                    category: "デザインツール",
                    technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "InVision"],
                    color: "bg-pink-500"
                  },
                  {
                    category: "SEOツール",
                    technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "PageSpeed Insights"],
                    color: "bg-orange-500"
                  },
                  {
                    category: "開発・運用",
                    technologies: ["Git", "Docker", "AWS", "Netlify", "Vercel", "GitHub Actions"],
                    color: "bg-gray-600"
                  }
                ].map((stack, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className={`w-12 h-12 ${stack.color} rounded-lg flex items-center justify-center mb-4`}>
                      <i className="fas fa-code text-white"></i>
                    </div>
                    <h3 className="text-lg font-bold text-japanese-dark mb-4">{stack.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">プロジェクト事例</h2>
                <p className="text-japanese-secondary">様々な業界・規模のプロジェクトに対応した実績があります</p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    type: "コーポレートサイトリニューアル",
                    industry: "IT企業",
                    challenge: "古いデザインとモバイル未対応により、企業イメージが損なわれていた",
                    solution: "モダンなデザインとレスポンシブ対応、CMSを導入し、定期的な情報発信を可能にした",
                    result: "訪問者の滞在時間が180%向上、お問い合わせ数が250%増加",
                    duration: "2ヶ月",
                    technologies: ["React", "WordPress", "Google Analytics"]
                  },
                  {
                    type: "ECサイト構築・SEO対策",
                    industry: "小売業",
                    challenge: "実店舗のみの販売で、オンライン売上がゼロの状態",
                    solution: "Shopifyを活用したECサイト構築と包括的なSEO対策を実施",
                    result: "開設6ヶ月でオンライン売上が全体の40%を占めるまで成長",
                    duration: "4ヶ月",
                    technologies: ["Shopify", "SEO", "Google Ads", "Facebook Ads"]
                  },
                  {
                    type: "デジタルマーケティング戦略",
                    industry: "SaaS企業",
                    challenge: "リード獲得コストが高く、効率的な集客ができていない",
                    solution: "コンテンツマーケティングとマーケティングオートメーションを組み合わせた戦略を実行",
                    result: "リード獲得コストを60%削減、コンバージョン率が3倍向上",
                    duration: "6ヶ月",
                    technologies: ["HubSpot", "Google Analytics", "Content Marketing", "A/B Testing"]
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-lg"
                  >
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-japanese-dark">{project.type}</h3>
                      <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">{project.industry}</span>
                      <span className="text-sm text-japanese-secondary">{project.duration}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-japanese-dark mb-2">課題</h4>
                        <p className="text-sm text-japanese-secondary">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-japanese-dark mb-2">ソリューション</h4>
                        <p className="text-sm text-japanese-secondary">{project.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-japanese-dark mb-2">成果</h4>
                        <p className="text-sm text-japanese-secondary">{project.result}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-japanese-dark mb-2">使用技術</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-white text-japanese-secondary px-3 py-1 rounded-full text-sm border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">料金体系</h2>
                <p className="text-japanese-secondary">プロジェクトの規模と内容に応じて柔軟な料金設定をご提供します</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    plan: "スタートアップ",
                    price: "¥300,000〜",
                    description: "小規模サイトや基本的なWeb施策に最適",
                    features: [
                      "5ページまでのWebサイト",
                      "レスポンシブデザイン",
                      "基本SEO対策",
                      "Google Analytics設定",
                      "3ヶ月サポート"
                    ],
                    suitable: "個人事業主、小規模企業"
                  },
                  {
                    plan: "ビジネス",
                    price: "¥800,000〜",
                    description: "中規模企業向けの包括的なWebソリューション",
                    features: [
                      "15ページまでのWebサイト",
                      "CMS導入・カスタマイズ",
                      "SEO・マーケティング戦略",
                      "アクセス解析・改善提案",
                      "6ヶ月サポート"
                    ],
                    suitable: "中小企業、成長企業",
                    popular: true
                  },
                  {
                    plan: "エンタープライズ",
                    price: "¥2,000,000〜",
                    description: "大規模プロジェクト向けのフルサポート",
                    features: [
                      "大規模サイト・ECサイト",
                      "カスタム開発",
                      "マーケティングオートメーション",
                      "継続的な運用・改善",
                      "専任担当者アサイン"
                    ],
                    suitable: "大企業、複雑なプロジェクト"
                  }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white p-6 rounded-lg shadow-sm relative ${plan.popular ? 'border-2 border-pink-500' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        人気
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-japanese-dark mb-2">{plan.plan}</h3>
                    <p className="text-3xl font-bold text-pink-500 mb-4">{plan.price}</p>
                    <p className="text-japanese-secondary mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-japanese-dark mb-3">含まれるサービス</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            <span className="text-japanese-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-japanese-dark mb-2">適用対象</h4>
                      <p className="text-sm text-japanese-secondary">{plan.suitable}</p>
                    </div>
                    
                    <Button className={`w-full ${plan.popular ? 'bg-pink-500 hover:bg-pink-600' : 'bg-gray-600 hover:bg-gray-700'} text-white`}>
                      詳細を問い合わせ
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Webで成果を出しませんか？</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                ADD VALUE WEBが戦略的なWebソリューションで、企業様のデジタル成長を支援します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-pink-500 hover:bg-white hover:text-pink-500 px-8 py-3 rounded-full font-semibold">
                  <Link href="/services">サービス一覧</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}