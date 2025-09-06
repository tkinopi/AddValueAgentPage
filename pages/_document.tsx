import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* SEO Meta Tags */}
        <title>AddValue Agent - IT人材派遣・コンサルティング・システム開発</title>
        <meta name="description" content="AddValue Agentは、IT人材派遣、技術コンサルティング、システム開発、Webサイト制作、ITエンジニア教育を提供する総合ITソリューション企業です。" />
        <meta name="keywords" content="IT人材派遣,SES,コンサルティング,システム開発,Webサイト制作,ITエンジニア教育,東京,IT企業" />
        <meta name="author" content="AddValue Agent" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AddValue Agent - IT人材派遣・コンサルティング・システム開発" />
        <meta property="og:description" content="AddValue Agentは、IT人材派遣、技術コンサルティング、システム開発、Webサイト制作、ITエンジニア教育を提供する総合ITソリューション企業です。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://addvalue-agent.com/" />
        <meta property="og:image" content="https://addvalue-agent.com/heroimageforaddvalue.png" />
        <meta property="og:site_name" content="AddValue Agent" />
        <meta property="og:locale" content="ja_JP" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AddValue Agent - IT人材派遣・コンサルティング・システム開発" />
        <meta name="twitter:description" content="AddValue Agentは、IT人材派遣、技術コンサルティング、システム開発、Webサイト制作、ITエンジニア教育を提供する総合ITソリューション企業です。" />
        <meta name="twitter:image" content="https://addvalue-agent.com/heroimageforaddvalue.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://addvalue-agent.com/" />
        
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}