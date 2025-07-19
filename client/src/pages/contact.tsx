import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiry_type: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡させていただきます。");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-japanese-primary mb-8 text-center">お問い合わせ</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* お問い合わせフォーム */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-japanese-dark mb-6">お問い合わせフォーム</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">お名前 *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">会社名</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">電話番号</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry_type">お問い合わせ種別 *</Label>
                    <Select onValueChange={(value) => handleChange("inquiry_type", value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recruitment">人材紹介について</SelectItem>
                        <SelectItem value="consulting">採用コンサルティングについて</SelectItem>
                        <SelectItem value="ses">SES事業について</SelectItem>
                        <SelectItem value="web">webコンサルティングについて</SelectItem>
                        <SelectItem value="education">教育支援について</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">お問い合わせ内容 *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={6}
                      className="mt-1"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-japanese-primary hover:bg-japanese-primary/90">
                    送信する
                  </Button>
                </form>
              </div>

              {/* 会社情報・アクセス */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-japanese-dark mb-6">会社情報</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-japanese-dark mb-1">会社名</h3>
                      <p className="text-gray-700">株式会社アドバリューエージェント</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-japanese-dark mb-1">所在地</h3>
                      <p className="text-gray-700">
                        〒100-0001<br />
                        東京都千代田区千代田1-1-1<br />
                        千代田ビル10F
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-japanese-dark mb-1">電話番号</h3>
                      <p className="text-gray-700">03-1234-5678</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-japanese-dark mb-1">メールアドレス</h3>
                      <p className="text-gray-700">info@addvalue-agent.co.jp</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-japanese-dark mb-1">営業時間</h3>
                      <p className="text-gray-700">
                        平日 9:00〜18:00<br />
                        土日祝日休み
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-japanese-dark mb-6">アクセス</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-japanese-dark mb-1">最寄り駅</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• JR東京駅より徒歩5分</li>
                        <li>• 地下鉄大手町駅より徒歩3分</li>
                        <li>• 地下鉄二重橋前駅より徒歩7分</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-japanese-dark mb-1">お車でお越しの場合</h3>
                      <p className="text-gray-700 text-sm">
                        近隣に有料駐車場がございます。事前にお電話でご相談ください。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-japanese-light rounded-lg p-6">
                  <h3 className="font-semibold text-japanese-dark mb-2">お急ぎの場合</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    お急ぎの場合は、お電話でのお問い合わせも承っております。
                  </p>
                  <p className="text-lg font-bold text-japanese-primary">03-1234-5678</p>
                  <p className="text-sm text-gray-600">受付時間：平日 9:00〜18:00</p>
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