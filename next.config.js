/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'standalone',
  images: {
    unoptimized: true
  },
  env: {
    // Gmail設定
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    // Resend設定
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_DNS_VERIFIED: process.env.RESEND_DNS_VERIFIED,
    RESEND_FROM_ADMIN: process.env.RESEND_FROM_ADMIN,
    RESEND_FROM_CUSTOMER: process.env.RESEND_FROM_CUSTOMER
  }
}

module.exports = nextConfig