import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl font-bold mb-6">ADD VALUE SES</h1>
              <p className="text-xl mb-8 opacity-90">SES事業</p>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                システムエンジニアリングサービスとして、お客様のプロジェクトに最適な技術者を紹介いたします。短期から長期まで、柔軟な契約形態に対応しております。
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
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">対応分野</h2>
                <p className="text-japanese-secondary max-w-3xl mx-auto">
                  幅広い技術領域に精通した優秀なエンジニアを紹介し、お客様のプロジェクト成功をサポートします。
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "fas fa-laptop-code",
                    title: "Webアプリケーション開発",
                    description: "フロントエンドからバックエンドまで、現代的なWebアプリケーション開発に対応",
                    technologies: ["React", "Vue.js", "Angular", "Node.js", "Python", "Java", "PHP", "Ruby"],
                    skills: ["UI/UX設計", "レスポンシブデザイン", "API設計・開発", "データベース設計"]
                  },
                  {
                    icon: "fas fa-server",
                    title: "インフラ構築・運用",
                    description: "クラウド環境からオンプレミスまで、安定したインフラ環境を構築・運用",
                    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Ansible"],
                    skills: ["クラウド設計", "CI/CD構築", "監視・運用", "セキュリティ対策"]
                  },
                  {
                    icon: "fas fa-database",
                    title: "データベース設計・構築",
                    description: "効率的で拡張性の高いデータベースシステムの設計から運用まで",
                    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Oracle"],
                    skills: ["論理設計", "物理設計", "パフォーマンス改善", "データ移行"]
                  },
                  {
                    icon: "fas fa-tools",
                    title: "システム保守・運用",
                    description: "既存システムの安定稼働を支える保守・運用サービス",
                    technologies: ["監視ツール", "ログ解析", "バックアップ", "障害対応"],
                    skills: ["定期メンテナンス", "障害対応", "性能改善", "セキュリティパッチ適用"]
                  }
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                      <i className={`${area.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-japanese-dark mb-4">{area.title}</h3>
                    <p className="text-japanese-secondary mb-6">{area.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-japanese-dark mb-2">対応技術</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-japanese-dark mb-2">主なスキル</h4>
                      <ul className="space-y-1">
                        {area.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-japanese-secondary">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contract Types */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">契約形態</h2>
                <p className="text-japanese-secondary">お客様のニーズに合わせて柔軟な契約形態をご提供します</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    type: "準委任契約",
                    period: "1ヶ月〜",
                    description: "お客様の現場で技術者が業務を遂行する一般的な契約形態",
                    features: [
                      "月額固定料金",
                      "スキルレベル別単価",
                      "柔軟な期間設定",
                      "チーム紹介対応"
                    ],
                    suitable: "継続的な開発案件、運用保守業務"
                  },
                  {
                    type: "請負契約",
                    period: "2週間〜",
                    description: "明確な成果物に対して責任を持って開発を行う契約形態",
                    features: [
                      "成果物保証",
                      "一括料金",
                      "品質保証",
                      "納期管理"
                    ],
                    suitable: "小規模システム開発、機能追加"
                  },
                  {
                    type: "ハイブリッド契約",
                    period: "要相談",
                    description: "準委任と請負を組み合わせたお客様専用の契約形態",
                    features: [
                      "柔軟な契約設計",
                      "フェーズ別対応",
                      "リスク分散",
                      "コスト最適化"
                    ],
                    suitable: "大規模プロジェクト、複合的案件"
                  }
                ].map((contract, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-green-500"
                  >
                    <h3 className="text-xl font-bold text-japanese-dark mb-2">{contract.type}</h3>
                    <p className="text-green-600 font-medium mb-4">{contract.period}</p>
                    <p className="text-japanese-secondary mb-6">{contract.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-japanese-dark mb-3">特徴</h4>
                      <ul className="space-y-2">
                        {contract.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-japanese-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-japanese-dark mb-2">適用例</h4>
                      <p className="text-sm text-japanese-secondary">{contract.suitable}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Engineer Levels */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">エンジニアレベル</h2>
                <p className="text-japanese-secondary">経験とスキルレベルに応じて最適な技術者をアサインします</p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    level: "シニアレベル",
                    experience: "5年以上",
                    rate: "¥800,000〜/月",
                    description: "プロジェクトリーダーやアーキテクト経験を持つ上級エンジニア",
                    skills: ["技術選定", "アーキテクチャ設計", "チームリーダー", "要件定義"],
                    color: "bg-green-600"
                  },
                  {
                    level: "ミドルレベル",
                    experience: "3-5年",
                    rate: "¥600,000〜/月",
                    description: "自立して開発業務を遂行できる中堅エンジニア",
                    skills: ["詳細設計", "実装", "テスト設計", "レビュー"],
                    color: "bg-green-500"
                  },
                  {
                    level: "ジュニアレベル",
                    experience: "1-3年",
                    rate: "¥400,000〜/月",
                    description: "基本的な開発スキルを持つ若手エンジニア",
                    skills: ["基本実装", "単体テスト", "ドキュメント作成", "学習意欲"],
                    color: "bg-green-400"
                  }
                ].map((engineer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg"
                  >
                    <div className={`w-20 h-20 ${engineer.color} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h3 className="text-xl font-bold text-japanese-dark">{engineer.level}</h3>
                        <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">{engineer.experience}</span>
                        <span className="text-lg font-semibold text-green-600">{engineer.rate}</span>
                      </div>
                      <p className="text-japanese-secondary mb-4">{engineer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {engineer.skills.map((skill, idx) => (
                          <span key={idx} className="bg-white text-japanese-secondary px-3 py-1 rounded-full text-sm border">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Flow Section */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-japanese-dark mb-4">サービス提供フロー</h2>
                <p className="text-japanese-secondary">お客様のご要望から技術者紹介まで、スムーズなプロセスでサポートします</p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "要件ヒアリング",
                    description: "プロジェクトの詳細、必要スキル、期間、予算などをお聞きします。"
                  },
                  {
                    step: "02",
                    title: "技術者選定",
                    description: "要件に最適な技術者を社内データベースから選定します。"
                  },
                  {
                    step: "03",
                    title: "面談・契約",
                    description: "選定した技術者との面談を経て、契約条件を決定します。"
                  },
                  {
                    step: "04",
                    title: "プロジェクト開始",
                    description: "技術者がお客様の現場またはリモートで業務を開始します。"
                  },
                  {
                    step: "05",
                    title: "定期フォロー",
                    description: "プロジェクト期間中は定期的にフォローアップを行います。"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-japanese-dark mb-2">{step.title}</h3>
                      <p className="text-japanese-secondary">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 bg-green-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">優秀な技術者をお探しですか？</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                ADD VALUE SESが豊富な経験を持つ技術者を紹介し、お客様のプロジェクト成功をサポートします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-green-500 hover:bg-white hover:text-green-500 px-8 py-3 rounded-full font-semibold">
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