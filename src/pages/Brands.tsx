import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { Seo, localBusinessJsonLd, buildBreadcrumbLd, buildSpeakableLd, siteUrl } from "@/components/Seo";
import { brands } from "@/data/brands";

const categoryLabels: Record<string, string> = {
  scrubs: "Medical Scrubs",
  footwear: "Nursing Footwear",
  tactical: "Public Safety & Tactical",
  apparel: "Corporate Apparel",
};

const Brands = () => {
  const grouped = brands.reduce<Record<string, typeof brands>>((acc, b) => {
    (acc[b.category] ||= []).push(b);
    return acc;
  }, {});

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: brands.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      url: `${siteUrl}/brands/${b.slug}`,
    })),
  };

  const breadcrumbLd = buildBreadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Brands", path: "/brands" },
  ]);
  const speakableLd = buildSpeakableLd(`${siteUrl}/brands`, ["h1", "h2", "p"]);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Scrub & Uniform Brands We Carry in New Jersey | The Scrub Boutique ULTD"
        description="Shop Barco, Grey's Anatomy, Zavate, Medi Chic, Landau, White Cross, Nurse Mates, First Tactical, and SanMar at New Jersey's premier scrub boutique in Lakewood."
        canonicalPath="/brands"
        keywords={[
          "scrub brands New Jersey",
          "Barco Platinum Retailer NJ",
          "medical uniforms Lakewood",
          "nursing brands NJ",
        ]}
        jsonLd={[localBusinessJsonLd, itemListJsonLd, breadcrumbLd, speakableLd]}
      />
      <Navbar />
      <Breadcrumbs items={[{ name: "Brands" }]} />

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-20 w-96 h-96 rounded-full bg-teal-light blur-3xl" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Our Brands
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] mb-6">
              Premium brands.
              <br />
              <span className="italic text-teal-light">One New Jersey boutique.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl font-light leading-relaxed">
              From Barco Platinum scrubs to Nurse Mates footwear and First Tactical uniforms—everything you need for healthcare, public safety, and corporate teams across NJ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grouped brand grid */}
      {Object.entries(grouped).map(([cat, items]) => (
        <section key={cat} className="py-16 md:py-20 [&:nth-child(odd)]:bg-muted/40">
          <div className="container">
            <div className="mb-10">
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-2">
                {categoryLabels[cat]}
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                {items.length} {items.length === 1 ? "brand" : "brands"} in this category
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((b, i) => (
                <motion.div
                  key={b.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/brands/${b.slug}`}
                    className="group block bg-card p-7 rounded-2xl border border-border hover:shadow-xl hover:border-secondary/40 transition-all h-full"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {b.name}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-3">
                      {b.tagline}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {b.shortDescription}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <RelatedLinks exclude={["brands"]} />
      <Footer />
    </div>
  );
};

export default Brands;
