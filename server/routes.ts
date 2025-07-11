import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "必須項目を入力してください。" 
        });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "有効なメールアドレスを入力してください。" 
        });
      }
      
      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Log the contact request
      
      console.log("Contact form submission:", { name, email, phone, message });
      
      res.json({ 
        message: "お問い合わせありがとうございます。担当者よりご連絡いたします。",
        success: true
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "送信中にエラーが発生しました。もう一度お試しください。" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
