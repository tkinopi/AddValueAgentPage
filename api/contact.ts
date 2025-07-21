import { VercelRequest, VercelResponse } from '@vercel/node';
import { DIContainer } from '../src/infrastructure/di/DIContainer.js';

// DIコンテナから依存関係を取得
const diContainer = DIContainer.getInstance();
const contactController = diContainer.getContactController();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const mockReq = {
      method: 'POST',
      body: req.body
    };

    // モックオブジェクトを使用してコントローラーを呼び出し
    let result: any;
    const mockResponseHandler = {
      status: (code: number) => ({
        json: (data: any) => {
          result = { data, status: code };
        }
      })
    };

    await contactController.handleContactSubmission(
      mockReq as any,
      mockResponseHandler as any
    );

    res.status(result.status).json(result.data);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      message: '内部サーバーエラーが発生しました。'
    });
  }
}