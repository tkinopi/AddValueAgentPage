import Head from "next/head";

export const SITE_URL = "https://www.addvalueagent.com";
const SITE_NAME = "Add Value Agent（アドバリューエージェント）";

type SeoProps = {
  /** ページ固有のタイトル。省略時はトップページ用のタイトルになる */
  title?: string;
  description: string;
  /** サイトルートからのパス。trailingSlash: true に合わせて末尾スラッシュ付きで渡す(例: "/about/") */
  path: string;
  noindex?: boolean;
};

export default function Seo({ title, description, path, noindex = false }: SeoProps) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME}| 採用で価値を創る人材ソリューション企業`;
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      {!noindex && <link rel="canonical" href={url} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
