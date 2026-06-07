import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  jsonLd?: object | object[];
  image?: string;
};

const SITE = "https://thescrubboutiqueultd.com";

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
  "@id": `${SITE}/#store`,
  name: "The Scrub Boutique ULTD",
  image: `${SITE}/og-image.jpg`,
  url: SITE,
  telephone: "+1-732-308-7788",
  email: "peter@tsbuniforms.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "60 Chambersbridge Road, Unit 4",
    addressLocality: "Lakewood",
    addressRegion: "NJ",
    postalCode: "08701",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.0959,
    longitude: -74.2174,
  },
  areaServed: ["New Jersey", "Monmouth County", "Ocean County", "Tri-State Area"],
  priceRange: "$$",
  hasMap: "https://maps.app.goo.gl/7ZGULnNvccpsntKH9",
  sameAs: [
    "https://shop.thescrubboutiqueultd.com/",
  ],
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "The Scrub Boutique ULTD",
  url: SITE,
  logo: `${SITE}/og-image.jpg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-732-308-7788",
    contactType: "customer service",
    email: "peter@tsbuniforms.com",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "The Scrub Boutique ULTD",
  publisher: { "@id": `${SITE}/#organization` },
};

export const buildBreadcrumbLd = (
  crumbs: { name: string; path?: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    ...(c.path ? { item: `${SITE}${c.path}` } : {}),
  })),
});

// Speakable spec for voice search / voice assistants
export const buildSpeakableLd = (url: string, cssSelectors: string[] = ["h1", "h2", "p"]) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  url,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  },
});

export const siteUrl = SITE;
