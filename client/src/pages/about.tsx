import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-japanese-primary mb-8 text-center">会社概要</h1>
            
            <div className="grid gap-8">
              {/* 会社基本情報 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-6">会社基本情報</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-japanese-dark mb-2">会社名</h3>
                    <p className="text-gray-700 mb-4">株式会社アドバリューエージェント</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-japanese-dark mb-2">設立</h3>
                    <p className="text-gray-700 mb-4">2020年4月</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-japanese-dark mb-2">資本金</h3>
                    <p className="text-gray-700 mb-4">1,000万円</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-japanese-dark mb-2">従業員数</h3>
                    <p className="text-gray-700 mb-4">25名</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-japanese-dark mb-2">所在地</h3>
                    <p className="text-gray-700 mb-4">
                      〒100-0001<br />
                      東京都千代田区千代田1-1-1<br />
                      千代田ビル10F
                    </p>
                  </div>
                </div>
              </div>

              {/* 企業理念 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-6">企業理念</h2>
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-japanese-primary mb-4">「採用で価値を創る、人材と企業をつなぐ架け橋」</h3>
                  <p className="text-gray-700 leading-relaxed">
                    私たちは、優秀な人材と成長企業をつなぐことで、
                    双方に新たな価値を創造し、社会の発展に貢献します。
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold text-japanese-dark mb-2">信頼</h4>
                    <p className="text-gray-700 text-sm">
                      お客様との信頼関係を最も大切にし、誠実なサービスを提供します。
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-japanese-dark mb-2">革新</h4>
                    <p className="text-gray-700 text-sm">
                      常に新しい技術とサービスを追求し、業界をリードします。
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-japanese-dark mb-2">成長</h4>
                    <p className="text-gray-700 text-sm">
                      お客様、社員、会社すべての成長を支援し、共に発展します。
                    </p>
                  </div>
                </div>
              </div>

              {/* 沿革 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-6">沿革</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 flex-shrink-0 font-semibold text-japanese-primary">2020年4月</div>
                    <div className="text-gray-700">株式会社アドバリューエージェント設立</div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 flex-shrink-0 font-semibold text-japanese-primary">2020年6月</div>
                    <div className="text-gray-700">人材紹介事業開始</div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 flex-shrink-0 font-semibold text-japanese-primary">2021年3月</div>
                    <div className="text-gray-700">SES事業開始</div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 flex-shrink-0 font-semibold text-japanese-primary">2022年1月</div>
                    <div className="text-gray-700">採用コンサルティング事業開始</div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 flex-shrink-0 font-semibold text-japanese-primary">2023年4月</div>
                    <div className="text-gray-700">webコンサルティング事業開始</div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 flex-shrink-0 font-semibold text-japanese-primary">2024年2月</div>
                    <div className="text-gray-700">教育支援事業開始</div>
                  </div>
                </div>
              </div>

              {/* アクセス */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-6">アクセス</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-japanese-dark mb-2">最寄り駅</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• JR東京駅より徒歩5分</li>
                      <li>• 地下鉄大手町駅より徒歩3分</li>
                      <li>• 地下鉄二重橋前駅より徒歩7分</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-japanese-dark mb-2">お車でお越しの場合</h3>
                    <p className="text-gray-700">
                      近隣に有料駐車場がございます。<br />
                      事前にお電話でご相談ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}