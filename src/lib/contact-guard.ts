/**
 * お問い合わせフォームのボット対策ユーティリティ。
 *
 * CAPTCHA を追加せずに、以下の 3 つの観点でスパム送信を判定する。
 *   1. honeypot   … 人間には見えない項目に値が入っていたらボット
 *   2. 送信速度   … フォーム表示から送信までが速すぎたらボット
 *   3. ふりがな   … これまでクライアントでしか検証しておらず、
 *                    API を直接叩くボットは送ってこない項目
 *
 * あわせて、メール本文に値を埋め込む前の HTML エスケープと、
 * 送信元オリジンの許可判定もここに置く。
 */

export type ContactPayload = {
  name?: string
  furigana?: string
  email?: string
  company?: string
  phone?: string
  inquiry_type?: string
  message?: string
  /** honeypot。人間が触れない項目なので、値が入っていたらボット。 */
  website?: string
  /** フォーム表示から送信までの経過ミリ秒。 */
  elapsed_ms?: unknown
}

/** これより速い送信は人間の入力とみなさない。 */
export const MIN_ELAPSED_MS = 3000

export const HIRAGANA_PATTERN = /^[ぁ-んー\s]+$/

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}

/**
 * メール本文（HTML）に埋め込む前のエスケープ。
 * フォームの入力値をそのまま埋め込むと、リンクや任意のタグを
 * 差し込まれる（HTML インジェクション）ため必須。
 */
export const escapeHtml = (value: string | undefined | null): string => {
  if (value === undefined || value === null) return ''
  return String(value).replace(/[&<>"']/g, (char) => HTML_ESCAPES[char])
}

const DEFAULT_ALLOWED_ORIGINS = [
  'https://www.addvalueagent.com',
  'https://addvalueagent.com'
]

/**
 * 許可するオリジン。
 * Amplify のプレビュー環境などは ALLOWED_ORIGINS（カンマ区切り）で上書きする。
 */
export const getAllowedOrigins = (): string[] => {
  const configured = process.env.ALLOWED_ORIGINS

  const origins = configured
    ? configured.split(',').map((origin) => origin.trim()).filter(Boolean)
    : [...DEFAULT_ALLOWED_ORIGINS]

  if (process.env.NODE_ENV !== 'production') {
    origins.push('http://localhost:3000', 'http://127.0.0.1:3000')
  }

  return origins
}

const originOf = (url: string | undefined): string | null => {
  if (!url) return null
  try {
    return new URL(url).origin
  } catch {
    return null
  }
}

/**
 * リクエストの Origin（無い場合は Referer）が許可オリジンかどうか。
 * どちらも無いリクエストは、ブラウザのフォーム経由ではないので拒否する。
 */
export const resolveRequestOrigin = (
  origin: string | undefined,
  referer: string | undefined
): string | null => originOf(origin) ?? originOf(referer)

export const isAllowedOrigin = (requestOrigin: string | null): boolean =>
  requestOrigin !== null && getAllowedOrigins().includes(requestOrigin)

export type SpamVerdict =
  | { spam: true; reason: 'honeypot' | 'too_fast' | 'missing_furigana' | 'invalid_furigana' }
  | { spam: false }

/**
 * ボット判定。人間の送信で誤検知しないよう、判定材料は
 * 「正規のフォームなら必ず満たすもの」だけに絞っている。
 */
export const detectSpam = (payload: ContactPayload): SpamVerdict => {
  if (payload.website && payload.website.trim() !== '') {
    return { spam: true, reason: 'honeypot' }
  }

  const elapsed = Number(payload.elapsed_ms)
  if (!Number.isFinite(elapsed) || elapsed < MIN_ELAPSED_MS) {
    return { spam: true, reason: 'too_fast' }
  }

  const furigana = payload.furigana?.trim()
  if (!furigana) {
    return { spam: true, reason: 'missing_furigana' }
  }
  if (!HIRAGANA_PATTERN.test(furigana)) {
    return { spam: true, reason: 'invalid_furigana' }
  }

  return { spam: false }
}
