import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";

export default function NotFound() {
  return (
    <>
      <Seo title="ページが見つかりません" description="お探しのページは見つかりませんでした。" path="/404/" noindex />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">ページが見つかりません</p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}