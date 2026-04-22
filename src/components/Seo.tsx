import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  jsonLd?: object | object[];
  image?: string;
};

const SITE = "https://thescrubboutiqueultd.lovable.app";

export const Seo = ({ title, description, canonicalPath = "/", keywords, jsonLd, image }: Props) => {
  const url = `${SITE}${canonicalPath}`;
  const ldArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

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

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "The Scrub Boutique ULTD",
  image: `${SITE}/og-image.jpg`,
  url: SITE,
  telephone: "+1-732-308-7788",
  address: {
    "@type": "PostalAddress",
    streetAddress: "315 NJ-35 Store #3",
    addressLocality: "Eatontown",
    addressRegion: "NJ",
    postalCode: "07724",
    addressCountry: "US",
  },
  areaServed: ["New Jersey", "Monmouth County", "Ocean County", "Tri-State Area"],
  priceRange: "$$",
};
