export default function Footer() {
  return (
    <footer className="bg-japanese-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-japanese-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-users text-white"></i>
              </div>
              <span className="text-xl font-bold">Human</span>
            </div>
            <p className="text-gray-400 mb-4">
              人を中心としたソリューションで、<br />
              お客様の成功をサポートします。
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
            <h3 className="font-bold mb-4">サービス</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">システム開発</a></li>
              <li><a href="#" className="hover:text-white transition-colors">コンサルティング</a></li>
              <li><a href="#" className="hover:text-white transition-colors">サポート</a></li>
              <li><a href="#" className="hover:text-white transition-colors">保守・運用</a></li>
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
              <li>EMAIL: info@human.or.jp</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Human. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
