import { NextRequest, NextResponse } from 'next/server';
import { DIContainer } from '../../src/infrastructure/di/DIContainer';

// DIコンテナから依存関係を取得
const diContainer = DIContainer.getInstance();
const contactController = diContainer.getContactController();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const mockReq = {
      method: 'POST',
      body
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
      { ...mockReq, body } as any,
      mockResponseHandler as any
    );

    return NextResponse.json(result.data, { status: result.status });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: '内部サーバーエラーが発生しました。' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}