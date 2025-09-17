import Head from "next/head";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export default function MetaTag({
  title,
  description,
  image = "/banner img.png",
  url = "https://xpertprime.net",
}: SeoProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0D0D0D" />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="XpertPrime" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical (optional but good for SEO) */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/faviconV2.png" />
    </Head>
  );
}
