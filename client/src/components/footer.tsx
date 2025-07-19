export default function Footer() {
  return (
    <footer className="bg-japanese-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="@assets/会社ロゴ　復元_1752920491687.png" 
                alt="Add Value Agent Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="text-xl font-bold">ADD VALUE AGENT</span>
            </div>
            <p className="text-gray-400 mb-4">
              採用で価値を創る、<br />
              人材と企業をつなぐ架け橋。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">事業内容</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">人材紹介事業</a></li>
              <li><a href="#" className="hover:text-white transition-colors">採用コンサルティング</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SES事業</a></li>
              <li><a href="#" className="hover:text-white transition-colors">webコンサルティング</a></li>
              <li><a href="#" className="hover:text-white transition-colors">教育支援</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">会社情報</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" className="hover:text-white transition-colors">沿革</a></li>
              <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ニュース</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">お問い合わせ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>〒100-0001</li>
              <li>東京都千代田区千代田1-1-1</li>
              <li>TEL: 03-1234-5678</li>
              <li>EMAIL: info@addvalue-agent.co.jp</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 株式会社アドバリューエージェント. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
