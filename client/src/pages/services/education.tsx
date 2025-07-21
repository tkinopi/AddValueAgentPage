import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function EducationPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl font-bold mb-6">ADD VALUE EDUCATION</h1>
              <p className="text-xl mb-8 opacity-90">教育支援</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                IT技術者のスキルアップや新人研修など、人材育成に関する支援を行っております。実践的なカリキュラムで即戦力となる人材を育成します。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Training Programs */}
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
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">研修プログラム</h2>
                <p className="text-japanese-secondary max-w-3xl mx-auto">
                  現場で即戦力となる実践的なスキルを身につけられる包括的な研修プログラムを提供します。
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "fas fa-code",
                    title: "プログラミング研修",
                    description: "未経験から実務レベルまで、段階的に学習できるプログラミング研修プログラム",
                    duration: "3-6ヶ月",
                    target: "新卒・未経験者・転職者",
                    curriculum: [
                      "プログラミング基礎（変数、制御文、関数）",
                      "Web開発基礎（HTML、CSS、JavaScript）",
                      "フレームワーク学習（React、Node.js）",
                      "データベース操作（SQL、MySQL）",
                      "実践プロジェクト開発",
                      "チーム開発演習"
                    ],
                    outcomes: ["基本的なWebアプリケーションの開発", "チーム開発の経験", "コードレビューのスキル"]
                  },
                  {
                    icon: "fas fa-user-graduate",
                    title: "新人エンジニア研修",
                    description: "新卒エンジニア向けの包括的な研修で、ビジネススキルから技術スキルまで習得",
                    duration: "2-3ヶ月",
                    target: "新卒エンジニア・第二新卒",
                    curriculum: [
                      "ビジネスマナー・コミュニケーション",
                      "システム開発の流れとプロセス",
                      "設計・テスト・デバッグ手法",
                      "バージョン管理（Git）の使い方",
                      "アジャイル開発手法",
                      "プレゼンテーション・報告書作成"
                    ],
                    outcomes: ["開発プロセスの理解", "チームワークスキル", "問題解決能力"]
                  },
                  {
                    icon: "fas fa-users-cog",
                    title: "マネジメント研修",
                    description: "技術リーダーやプロジェクトマネージャーを目指すエンジニア向けの研修",
                    duration: "1-2ヶ月",
                    target: "中堅エンジニア・チームリーダー",
                    curriculum: [
                      "リーダーシップとマネジメント理論",
                      "プロジェクト計画・管理手法",
                      "チームビルディング・モチベーション管理",
                      "技術的意思決定・アーキテクチャ設計",
                      "ステークホルダーとのコミュニケーション",
                      "リスク管理・品質管理"
                    ],
                    outcomes: ["チーム運営能力", "技術的リーダーシップ", "プロジェクト管理スキル"]
                  },
                  {
                    icon: "fas fa-certificate",
                    title: "資格取得支援",
                    description: "IT関連資格の取得をサポートし、キャリアアップを支援する研修プログラム",
                    duration: "1-4ヶ月",
                    target: "全レベル対応",
                    curriculum: [
                      "資格別対策講座（基本情報、応用情報等）",
                      "AWS・Azure認定資格対策",
                      "プロジェクトマネジメント（PMP）対策",
                      "過去問題演習・模擬試験",
                      "個別学習計画の策定",
                      "合格後のキャリアプランニング"
                    ],
                    outcomes: ["資格取得", "体系的な知識習得", "キャリアアップ"]
                  }
                ].map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                      <i className={`${program.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-bold text-japanese-dark">{program.title}</h3>
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">{program.duration}</span>
                    </div>
                    <p className="text-japanese-secondary mb-4">{program.description}</p>
                    <p className="text-sm text-orange-600 font-medium mb-6">対象：{program.target}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-japanese-dark mb-3">カリキュラム</h4>
                      <ul className="space-y-2">
                        {program.curriculum.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-japanese-secondary">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-japanese-dark mb-3">習得できるスキル</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.outcomes.map((outcome, idx) => (
                          <span key={idx} className="bg-white text-japanese-secondary px-3 py-1 rounded-full text-sm border">
                            {outcome}
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

        {/* Training Features */}
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
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">研修の特徴</h2>
                <p className="text-japanese-secondary">実践的で効果的な学習環境を提供します</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "fas fa-hands-helping",
                    title: "実践重視のカリキュラム",
                    description: "現場で実際に使われている技術と手法を中心とした実践的な内容で学習します。"
                  },
                  {
                    icon: "fas fa-user-friends",
                    title: "少人数制クラス",
                    description: "1クラス最大10名の少人数制で、一人ひとりに丁寧な指導を行います。"
                  },
                  {
                    icon: "fas fa-laptop-code",
                    title: "ハンズオン学習",
                    description: "座学だけでなく、実際にコードを書いて動かしながら学習を進めます。"
                  },
                  {
                    icon: "fas fa-users",
                    title: "現役エンジニア講師",
                    description: "現場経験豊富な現役エンジニアが講師として直接指導を行います。"
                  },
                  {
                    icon: "fas fa-clock",
                    title: "柔軟な受講スタイル",
                    description: "オンライン・オフライン・ハイブリッドなど、様々な受講スタイルに対応します。"
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "継続的なフォローアップ",
                    description: "研修終了後も継続的なキャリアサポートとスキルアップ支援を提供します。"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${feature.icon} text-orange-500 text-2xl`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-japanese-dark mb-3">{feature.title}</h3>
                    <p className="text-japanese-secondary text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
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
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">研修成果</h2>
                <p className="text-japanese-secondary">受講者の成長と企業様の満足度が私たちの誇りです</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  {
                    metric: "95%",
                    title: "研修満足度",
                    description: "受講者アンケートによる満足度"
                  },
                  {
                    metric: "88%",
                    title: "スキル向上実感",
                    description: "研修前後のスキル評価向上率"
                  },
                  {
                    metric: "92%",
                    title: "継続学習率",
                    description: "研修終了後も学習を継続する受講者の割合"
                  },
                  {
                    metric: "85%",
                    title: "企業満足度",
                    description: "研修を実施した企業様の満足度"
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="text-4xl font-bold text-orange-500 mb-2">{stat.metric}</div>
                    <h3 className="text-lg font-bold text-japanese-dark mb-2">{stat.title}</h3>
                    <p className="text-japanese-secondary text-sm">{stat.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-japanese-dark text-center mb-8">受講者の声</h3>
                {[
                  {
                    name: "田中 太郎さん",
                    position: "Web開発者（研修受講後転職成功）",
                    comment: "未経験からでしたが、実践的なカリキュラムのおかげで3ヶ月でWeb開発者として転職することができました。現場で即戦力として活躍できています。",
                    program: "プログラミング研修"
                  },
                  {
                    name: "山田 花子さん",
                    position: "プロジェクトリーダー",
                    comment: "マネジメント研修でチーム運営のスキルを学び、自信を持ってプロジェクトをリードできるようになりました。チームの生産性も向上しています。",
                    program: "マネジメント研修"
                  },
                  {
                    name: "佐藤 次郎さん",
                    position: "インフラエンジニア",
                    comment: "AWS認定資格を取得できただけでなく、実際のクラウド設計・構築スキルも身につけることができました。キャリアアップにつながっています。",
                    program: "資格取得支援"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-user text-white"></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="font-bold text-japanese-dark">{testimonial.name}</h4>
                          <span className="text-sm text-japanese-secondary">{testimonial.position}</span>
                          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">{testimonial.program}</span>
                        </div>
                        <p className="text-japanese-secondary italic">"{testimonial.comment}"</p>
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
                <p className="text-japanese-secondary">企業様のニーズに合わせて柔軟な料金設定をご提供します</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    type: "個人向け研修",
                    price: "¥200,000〜",
                    duration: "1-6ヶ月",
                    description: "個人のスキルアップを目的とした研修プログラム",
                    features: [
                      "オンライン・オフライン選択可",
                      "個別学習計画の作成",
                      "現役エンジニアによる指導",
                      "実践プロジェクト課題",
                      "修了証明書発行",
                      "3ヶ月間のアフターサポート"
                    ],
                    note: "分割払い対応、早期申込割引あり"
                  },
                  {
                    type: "企業向け研修",
                    price: "¥500,000〜",
                    duration: "1-3ヶ月",
                    description: "企業様の人材育成を目的とした法人向け研修プログラム",
                    features: [
                      "カスタマイズ可能なカリキュラム",
                      "企業内研修・講師派遣対応",
                      "チーム単位での受講",
                      "進捗管理・レポーティング",
                      "スキル評価・測定",
                      "継続的なフォローアップ"
                    ],
                    note: "人数・期間に応じた割引制度あり"
                  }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-bold text-japanese-dark mb-2">{plan.type}</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-bold text-orange-500">{plan.price}</span>
                      <span className="text-sm text-japanese-secondary">({plan.duration})</span>
                    </div>
                    <p className="text-japanese-secondary mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-japanese-dark mb-3">含まれるサービス</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-japanese-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm text-orange-600 bg-orange-50 p-3 rounded">{plan.note}</p>
                    </div>
                    
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      詳細を問い合わせ
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">スキルアップで未来を変えませんか？</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                ADD VALUE EDUCATIONが実践的な教育プログラムで、あなたのキャリア成長をサポートします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-full font-semibold">
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