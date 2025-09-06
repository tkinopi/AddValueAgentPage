import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* SEO Meta Tags */}
        <title>Add Value Agent（アドバリューエージェント）| 採用で価値を創る人材ソリューション企業</title>
        <meta name="description" content="株式会社アドバリューエージェントは神戸を拠点に、人材紹介、採用コンサルティング、SES事業、Webコンサルティング、教育支援を提供。若年層キャリア支援と医療福祉分野の転職支援に特化した総合人材ソリューション企業です。" />
        <meta name="keywords" content="人材紹介,採用コンサルティング,SES事業,転職支援,若年層キャリア支援,医療福祉転職,神戸,兵庫県,アドバリューエージェント,Add Value Agent" />
        <meta name="author" content="AddValue Agent" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="998c2b8eb1491fa7" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Add Value Agent | 採用で価値を創る人材ソリューション企業" />
        <meta property="og:description" content="株式会社アドバリューエージェントは、人材紹介、採用コンサルティング、SES事業、Webコンサルティング、教育支援を提供。若年層キャリア支援と医療福祉分野の転職支援に特化。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.addvalueagent.com/" />
        <meta property="og:image" content="https://www.addvalueagent.com/heroimageforaddvalue.png" />
        <meta property="og:site_name" content="AddValue Agent" />
        <meta property="og:locale" content="ja_JP" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Add Value Agent | 採用で価値を創る人材ソリューション企業" />
        <meta name="twitter:description" content="人材紹介、採用コンサルティング、SES事業、Webコンサルティング、教育支援を提供。若年層キャリア支援と医療福祉分野の転職支援に特化。" />
        <meta name="twitter:image" content="https://www.addvalueagent.com/heroimageforaddvalue.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.addvalueagent.com/" />
        
        {/* FontAwesome CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* 構造化データ - 企業情報 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "株式会社アドバリューエージェント",
              "alternateName": "Add Value Agent",
              "url": "https://www.addvalueagent.com",
              "logo": "https://www.addvalueagent.com/company-logo.png",
              "description": "採用で価値を創る。人材紹介、採用コンサルティング、SES事業、Webコンサルティング、教育支援を提供する総合人材ソリューション企業",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "大津和2丁目8番2号",
                "addressLocality": "神戸市西区",
                "addressRegion": "兵庫県",
                "postalCode": "651-2112",
                "addressCountry": "JP"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@addvalue-agent.co.jp",
                "contactType": "customer service",
                "availableLanguage": "Japanese"
              },
              "sameAs": []
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}