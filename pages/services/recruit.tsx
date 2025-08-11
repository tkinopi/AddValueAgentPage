import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RecruitPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl font-bold mb-6">ADD VALUE RECRUIT</h1>
              <p className="text-xl mb-8 opacity-90">人材紹介事業</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                企業様のニーズに合った優秀な人材をご紹介いたします。IT業界を中心に、様々な分野での人材マッチングを行っており、求職者と企業を繋ぐ架け橋として機能します。
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
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">サービス概要</h2>
                <p className="text-japanese-secondary max-w-3xl mx-auto">
                  ADD VALUE RECRUITは、企業と求職者の最適なマッチングを実現する人材紹介サービスです。
                  豊富な経験と幅広いネットワークを活用し、質の高い人材を迅速にご紹介します。
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: "fas fa-code",
                    title: "ITエンジニア・プログラマー",
                    description: "フロントエンド、バックエンド、インフラエンジニアなど"
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "営業・マーケティング",
                    description: "営業職、マーケティング職、企画職など"
                  },
                  {
                    icon: "fas fa-users-cog",
                    title: "管理職・役員クラス",
                    description: "マネージャー、ディレクター、CTO、CTOなど"
                  },
                  {
                    icon: "fas fa-cogs",
                    title: "専門職・技術者",
                    description: "デザイナー、データサイエンティスト、AIエンジニアなど"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-lg text-center"
                  >
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${item.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="font-bold text-japanese-dark mb-2">{item.title}</h3>
                    <p className="text-japanese-secondary text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">採用プロセス</h2>
                <p className="text-japanese-secondary">効率的で確実な採用プロセスをご提供します</p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "ヒアリング",
                    description: "企業様のニーズ、求める人材像、条件などを詳しくお聞きします。"
                  },
                  {
                    step: "02",
                    title: "人材選定",
                    description: "豊富なデータベースから最適な候補者を選定し、マッチング度を評価します。"
                  },
                  {
                    step: "03",
                    title: "候補者紹介",
                    description: "厳選した候補者の履歴書、スキルシート、推薦状をご提供します。"
                  },
                  {
                    step: "04",
                    title: "面接調整",
                    description: "面接日程の調整から面接後のフォローアップまでサポートします。"
                  },
                  {
                    step: "05",
                    title: "内定・入社支援",
                    description: "条件交渉、入社手続きまで一貫してサポートいたします。"
                  }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-6"
                  >
                    <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-japanese-dark mb-2">{process.title}</h3>
                      <p className="text-japanese-secondary">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">サービスの特徴</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "豊富な実績",
                    description: "IT業界を中心に多数の成功事例を持ち、企業様の成長を支援してきました。",
                    icon: "fas fa-trophy"
                  },
                  {
                    title: "スピード対応",
                    description: "平均2週間以内に候補者をご紹介。迅速な採用をサポートします。",
                    icon: "fas fa-rocket"
                  },
                  {
                    title: "質の高いマッチング",
                    description: "単なるスキルマッチングではなく、企業文化との適合性も重視します。",
                    icon: "fas fa-bullseye"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center p-6"
                  >
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className={`${feature.icon} text-blue-500 text-3xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-japanese-dark mb-4">{feature.title}</h3>
                    <p className="text-japanese-secondary">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">人材採用でお困りですか？</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                ADD VALUE RECRUITが企業様の採用課題を解決します。まずはお気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-blue-500 hover:bg-white hover:text-blue-500 px-8 py-3 rounded-full font-semibold">
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