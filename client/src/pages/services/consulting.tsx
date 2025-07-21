import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ConsultingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl font-bold mb-6">ADD VALUE CONSULTING</h1>
              <p className="text-xl mb-8 opacity-90">採用コンサルティング</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                企業様の採用課題を解決するため、戦略的な採用支援を行います。採用プロセスの最適化から面接官研修まで、トータルサポートいたします。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Overview */}
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
                  企業の採用力向上を目的とした包括的なコンサルティングサービスです。
                  現状分析から戦略立案、実行支援まで一貫してサポートします。
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "fas fa-lightbulb",
                    title: "採用戦略立案",
                    description: "企業のビジョン・目標に基づいた採用戦略を策定し、効果的な採用計画をご提案します。",
                    features: ["ターゲット人材の明確化", "採用チャネルの最適化", "採用スケジュールの策定", "予算配分の最適化"]
                  },
                  {
                    icon: "fas fa-edit",
                    title: "求人票作成支援",
                    description: "魅力的で効果的な求人票の作成をサポートし、優秀な人材からの応募を促進します。",
                    features: ["魅力的な募集要項の作成", "企業文化の表現", "求める人材像の明確化", "応募促進の工夫"]
                  },
                  {
                    icon: "fas fa-users",
                    title: "面接官研修",
                    description: "面接官のスキル向上を図り、適切な人材評価ができるようトレーニングを実施します。",
                    features: ["面接技法の習得", "評価基準の統一", "バイアス対策", "構造化面接の導入"]
                  },
                  {
                    icon: "fas fa-chart-bar",
                    title: "採用プロセス改善",
                    description: "現在の採用プロセスを分析し、効率性と効果性を向上させる改善策をご提案します。",
                    features: ["プロセスの可視化", "ボトルネックの特定", "自動化の提案", "採用KPIの設定"]
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                      <i className={`${item.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-japanese-dark mb-4">{item.title}</h3>
                    <p className="text-japanese-secondary mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-japanese-secondary">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">導入効果</h2>
                <p className="text-japanese-secondary">コンサルティング導入による具体的な効果をご紹介します</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    metric: "40%",
                    title: "採用コスト削減",
                    description: "効率的な採用プロセスにより採用単価を大幅に削減"
                  },
                  {
                    metric: "60%",
                    title: "採用期間短縮",
                    description: "戦略的アプローチで採用期間を平均60%短縮"
                  },
                  {
                    metric: "85%",
                    title: "採用成功率向上",
                    description: "適切な評価手法により採用成功率が向上"
                  },
                  {
                    metric: "90%",
                    title: "面接官満足度",
                    description: "研修により面接官のスキルと自信が向上"
                  },
                  {
                    metric: "75%",
                    title: "応募数増加",
                    description: "魅力的な求人票により応募数が増加"
                  },
                  {
                    metric: "95%",
                    title: "クライアント満足度",
                    description: "継続的なサポートで高い満足度を実現"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white rounded-lg shadow-sm"
                  >
                    <div className="text-4xl font-bold text-purple-500 mb-2">{benefit.metric}</div>
                    <h3 className="text-lg font-bold text-japanese-dark mb-2">{benefit.title}</h3>
                    <p className="text-japanese-secondary text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">コンサルティングフロー</h2>
                <p className="text-japanese-secondary">段階的なアプローチで確実な成果を実現します</p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    phase: "Phase 1",
                    title: "現状分析・課題抽出",
                    duration: "1-2週間",
                    description: "現在の採用プロセスを詳細に分析し、課題を明確にします。",
                    details: ["採用プロセスの可視化", "ステークホルダーヒアリング", "データ分析", "課題の優先順位付け"]
                  },
                  {
                    phase: "Phase 2",
                    title: "戦略立案・計画策定",
                    duration: "1-2週間",
                    description: "分析結果に基づき、具体的な改善策と実行計画を策定します。",
                    details: ["改善戦略の立案", "KPI設定", "実行計画の策定", "リソース配分計画"]
                  },
                  {
                    phase: "Phase 3",
                    title: "実行支援・研修実施",
                    duration: "4-8週間",
                    description: "策定した計画に基づき、実際の改善施策を実行支援します。",
                    details: ["面接官研修の実施", "求人票改善", "プロセス改善実行", "ツール導入支援"]
                  },
                  {
                    phase: "Phase 4",
                    title: "効果測定・改善",
                    duration: "継続的",
                    description: "実施結果を測定し、さらなる改善を継続的に行います。",
                    details: ["KPI測定・分析", "改善効果の確認", "追加施策の提案", "継続的サポート"]
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="w-20 h-20 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h3 className="text-xl font-bold text-japanese-dark">{phase.title}</h3>
                        <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">{phase.phase}</span>
                        <span className="text-sm text-japanese-secondary">{phase.duration}</span>
                      </div>
                      <p className="text-japanese-secondary mb-4">{phase.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            <span className="text-japanese-secondary">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">採用力を向上させませんか？</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                専門コンサルタントが企業様の採用課題を解決し、競争力のある採用体制の構築をサポートします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-purple-500 hover:bg-white hover:text-purple-500 px-8 py-3 rounded-full font-semibold">
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