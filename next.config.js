/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'standalone',
  images: {
    unoptimized: true
  },
  env: {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL
  }
}

module.exports = nextConfig