import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-japanese-primary mb-8 text-center">事業内容</h1>
            
            <div className="grid gap-8 md:gap-12">
              {/* 人材紹介事業 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-4">人材紹介事業</h2>
                <p className="text-gray-700 mb-4">
                  企業様のニーズに合った優秀な人材をご紹介いたします。IT業界を中心に、様々な分野での人材マッチングを行っております。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>ITエンジニア・プログラマー</li>
                  <li>営業・マーケティング</li>
                  <li>管理職・役員クラス</li>
                  <li>専門職・技術者</li>
                </ul>
              </div>

              {/* 採用コンサルティング */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-4">採用コンサルティング</h2>
                <p className="text-gray-700 mb-4">
                  企業様の採用課題を解決するため、戦略的な採用支援を行います。採用プロセスの最適化から面接官研修まで、トータルサポートいたします。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>採用戦略立案</li>
                  <li>求人票作成支援</li>
                  <li>面接官研修</li>
                  <li>採用プロセス改善</li>
                </ul>
              </div>

              {/* SES事業 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-4">SES事業</h2>
                <p className="text-gray-700 mb-4">
                  システムエンジニアリングサービスとして、お客様のプロジェクトに最適な技術者を派遣いたします。短期から長期まで、柔軟な契約形態に対応しております。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Webアプリケーション開発</li>
                  <li>インフラ構築・運用</li>
                  <li>データベース設計・構築</li>
                  <li>システム保守・運用</li>
                </ul>
              </div>

              {/* webコンサルティング */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-4">webコンサルティング</h2>
                <p className="text-gray-700 mb-4">
                  企業様のWebサイトやWebマーケティングに関する課題解決をサポートいたします。戦略立案から実装まで一貫してお手伝いします。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Webサイト制作・リニューアル</li>
                  <li>SEO対策</li>
                  <li>Webマーケティング戦略</li>
                  <li>アクセス解析・改善提案</li>
                </ul>
              </div>

              {/* 教育支援 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-4">教育支援</h2>
                <p className="text-gray-700 mb-4">
                  IT技術者のスキルアップや新人研修など、人材育成に関する支援を行っております。実践的なカリキュラムで即戦力となる人材を育成します。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>プログラミング研修</li>
                  <li>新人エンジニア研修</li>
                  <li>マネジメント研修</li>
                  <li>資格取得支援</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}