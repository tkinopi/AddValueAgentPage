import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const useGoogleAppsScript = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Google Apps ScriptのウェブアプリURL
  // TODO: デプロイ後のURLに置き換えてください
  const GAS_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';
  
  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(GAS_URL, {
        method: 'POST',
        mode: 'no-cors', // CORSを回避
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // no-corsモードではレスポンスが読めないため、
      // エラーがなければ成功とみなす
      setIsSubmitting(false);
      return { success: true };
      
    } catch (error) {
      console.error('送信エラー:', error);
      setIsSubmitting(false);
      return { 
        success: false, 
        error: 'ネットワークエラーが発生しました。' 
      };
    }
  };
  
  return {
    submitForm,
    isSubmitting
  };
};