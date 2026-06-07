import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Phone, MapPin, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { Seo, localBusinessJsonLd, buildBreadcrumbLd, buildSpeakableLd, siteUrl } from "@/components/Seo";
import { brands, getBrand } from "@/data/brands";
import barcoBadge from "@/assets/barco-platinum-badge.png";

const BrandPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const brand = slug ? getBrand(slug) : undefined;

  if (!brand) return <Navigate to="/brands" replace />;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brand.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = buildBreadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Brands", path: "/brands" },
    { name: brand.name, path: `/brands/${brand.slug}` },
  ]);

  const speakableLd = buildSpeakableLd(`${siteUrl}/brands/${brand.slug}`, ["h1", "h2", "p"]);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${brand.name} at The Scrub Boutique ULTD`,
    description: brand.shortDescription,
    brand: { "@type": "Brand", name: brand.name },
    category: brand.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "The Scrub Boutique ULTD" },
    },
  };

  const otherBrands = brands.filter((b) => b.slug !== brand.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={brand.seoTitle}
        description={brand.seoDescription}
        canonicalPath={`/brands/${brand.slug}`}
        keywords={brand.keywords}
        jsonLd={[localBusinessJsonLd, productJsonLd, faqJsonLd, breadcrumbJsonLd, speakableLd]}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { name: "Brands", path: "/brands" },
          { name: brand.name },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-20 w-96 h-96 rounded-full bg-teal-light blur-3xl" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container relative z-10">


          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <p className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-4">
                {brand.tagline}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] mb-6">
                {brand.name}
                <br />
                <span className="italic text-teal-light">in New Jersey</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl font-light leading-relaxed">
                {brand.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://shop.thescrubboutiqueultd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Shop {brand.name} <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Visit Lakewood Store
                </a>
              </div>
            </motion.div>

            {brand.slug === "barco" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="hidden lg:flex flex-col items-center"
              >
                <img
                  src={barcoBadge}
                  alt="Official Barco Platinum Retailer Badge"
                  className="w-48 xl:w-56 h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                />
                <p className="mt-4 text-teal-light text-xs uppercase tracking-[0.2em] font-medium text-center">
                  We are a<br />
                  <span className="text-primary-foreground font-display text-base normal-case tracking-normal">
                    Barco Platinum Retailer
                  </span>
                </p>
              </motion.div>
            )}
          </div>

          {/* Mobile badge */}
          {brand.slug === "barco" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:hidden mt-10 flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-4 max-w-sm"
            >
              <img
                src={barcoBadge}
                alt="Official Barco Platinum Retailer Badge"
                className="w-20 h-20 flex-shrink-0 drop-shadow-lg"
              />
              <div>
                <p className="text-teal-light text-xs uppercase tracking-[0.2em] font-medium">
                  We are a
                </p>
                <p className="text-primary-foreground font-display font-bold text-lg leading-tight">
                  Barco Platinum Retailer
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Long description + best for */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                About {brand.name}
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                Why {brand.name} works for<br />
                <span className="italic text-secondary">New Jersey professionals</span>
              </h2>
              {brand.longDescription.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>

            <aside className="bg-muted/40 p-7 rounded-2xl border border-border h-fit">
              <h3 className="font-display font-bold text-lg text-foreground mb-4">Best for</h3>
              <ul className="space-y-3">
                {brand.bestFor.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
              What sets it apart
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              {brand.name} <span className="italic text-secondary">at our boutique</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {brand.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-7 rounded-2xl border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular styles */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                Popular Styles
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                What we stock from<br />
                <span className="italic text-secondary">{brand.name}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Inventory rotates seasonally. If you don't see a specific style or color in store, we can usually order it for you within a few days.
              </p>
              <a
                href="tel:732-308-7788"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" /> Call to check stock
              </a>
            </div>
            <ul className="space-y-3">
              {brand.popularStyles.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container max-w-4xl">
          <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3 text-center">
            Frequently Asked
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12 leading-tight text-center">
            {brand.name} <span className="italic text-secondary">questions</span>
          </h2>
          <div className="space-y-4">
            {brand.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-card rounded-2xl border border-border p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-foreground">
                  {f.q}
                  <span className="ml-4 text-secondary group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other brands */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                Explore More Brands
              </p>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground leading-tight">
                More brands we carry in Lakewood
              </h2>
            </div>
            <Link
              to="/brands"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all brands →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherBrands.map((b) => (
              <Link
                key={b.slug}
                to={`/brands/${b.slug}`}
                className="group bg-card p-6 rounded-2xl border border-border hover:shadow-lg hover:border-secondary/40 transition-all"
              >
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {b.name}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {b.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-warm py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent-foreground mb-3">
            Try {brand.name} on in person.
          </h2>
          <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
            Visit our Lakewood, NJ boutique—sizes XXS to 5XL, expert fitting, and in-house embroidery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://shop.thescrubboutiqueultd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Shop Online
            </a>
            <a
              href="tel:732-308-7788"
              className="inline-flex px-8 py-3.5 rounded-full border-2 border-accent-foreground/30 text-accent-foreground font-semibold text-sm hover:bg-accent-foreground/10 transition-colors"
            >
              Call 732-308-7788
            </a>
          </div>
        </div>
      </section>

      <RelatedLinks exclude={["brands"]} />
      <Footer />
    </div>
  );
};

export default BrandPage;
