import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  image?: string;
};

const SITE = "https://thescrubboutiqueultd.com";

export const Seo = ({ title, description, canonicalPath = "/", keywords, image }: Props) => {
  const url = `${SITE}${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export const siteUrl = SITE;
