import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "エラー",
        description: "必須項目を入力してください。",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "エラー",
        description: "有効なメールアドレスを入力してください。",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Lambda Function URL from environment variable
      const functionUrl = process.env.NEXT_PUBLIC_LAMBDA_FUNCTION_URL;
      
      if (!functionUrl) {
        throw new Error('Lambda Function URLが設定されていません');
      }
      
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'お問い合わせの送信に失敗しました');
      }
      
      // Success message
      toast({
        title: "送信完了",
        description: data.message || "お問い合わせありがとうございます。担当者よりご連絡いたします。",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "送信エラー",
        description: error instanceof Error ? error.message : "お問い合わせの送信に失敗しました。",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "所在地",
      content: "〒651-2112\n兵庫県神戸市西区大津和2丁目8番2号"
    },
    // {
    //   icon: "fas fa-phone",
    //   title: "電話番号",
    //   content: "03-1234-5678"
    // },
    {
      icon: "fas fa-envelope",
      title: "メールアドレス",
      content: "info@addvalue-agent.co.jp"
    },
    {
      icon: "fas fa-clock",
      title: "営業時間",
      content: "平日 9:00 - 18:00\n土日祝日は休業"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-10 md:py-20 pb-32 md:pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-japanese-dark mb-4"
            >
              お問い合わせ
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-japanese-secondary max-w-2xl mx-auto"
            >
              お気軽にご相談ください。専門スタッフが丁寧にお答えします。
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-japanese-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${info.icon} text-white`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-japanese-dark mb-2">{info.title}</h3>
                    <p className="text-japanese-secondary whitespace-pre-line">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-japanese-light rounded-xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-japanese-dark font-medium">
                    お名前 *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-japanese-dark font-medium">
                    メールアドレス *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-japanese-dark font-medium">
                    電話番号
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-japanese-dark font-medium">
                    お問い合わせ内容 *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-japanese-primary hover:bg-japanese-primary/90 text-white py-3 px-6 rounded-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      送信中...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      送信する
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
