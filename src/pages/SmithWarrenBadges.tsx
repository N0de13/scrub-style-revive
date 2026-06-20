import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import {
  Seo,
  localBusinessJsonLd,
  buildBreadcrumbLd,
  buildSpeakableLd,
  siteUrl,
} from "@/components/Seo";

const badgesProductLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Smith & Warren Badges",
  image: "https://www.visualbadge.com/images/visualbadge-logo.png",
  description: "Design and build your custom Smith & Warren badges online. Full selection of police, fire, EMS, and security badges.",
  brand: {
    "@type": "Brand",
    name: "Smith & Warren"
  },
  offers: {
    "@type": "Offer",
    "url": `${siteUrl}/smith-warren-badges`,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

const SmithWarrenBadges = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Custom Smith & Warren Badges | The Scrub Boutique ULTD"
        description="Design and build your custom Smith & Warren public safety, law enforcement, fire, EMS, and security badges online. High-quality custom badges with lifetime warranty."
        canonicalPath="/smith-warren-badges"
        keywords={[
          "custom badges NJ",
          "Smith and Warren badges",
          "police badges Lakewood NJ",
          "firefighter badges",
          "EMS badges NJ",
          "security badges Lakewood New Jersey",
          "Visual Badge builder"
        ]}
        jsonLd={[
          localBusinessJsonLd,
          badgesProductLd,
          buildBreadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Smith & Warren Badges", path: "/smith-warren-badges" },
          ]),
          buildSpeakableLd(`${siteUrl}/smith-warren-badges`, ["h1", "h2", "p"]),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={[{ name: "Smith & Warren Badges" }]} />

      {/* Hero */}
      <section className="relative pt-16 pb-16 bg-primary text-center">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-3">
              Official Dealer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] mb-4">
              Smith & Warren <br />
              <span className="italic text-teal-light">Custom Badge Builder</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto font-light leading-relaxed">
              Design your custom public safety badges online. Every Smith & Warren badge is built with pride in the USA and backed by a lifetime warranty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Badge Builder Tool */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-border bg-white p-2 md:p-4"
          >
            <iframe
              id="iframe"
              name="iframe"
              src="https://www.visualbadge.com/BuildBadge_Type.aspx?aff=C129"
              style={{ border: 0 }}
              scrolling="auto"
              height="1580"
              width="100%"
              title="Smith & Warren Custom Badge Builder"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Info & Warranties */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
            Why Choose Smith & Warren Badges?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
            <div className="space-y-3">
              <h3 className="font-semibold text-primary text-lg">Lifetime Warranty</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Smith & Warren stands behind their product with the industry's only Lifetime Warranty on all custom metal finishes.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary text-lg">Made in the USA</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every single custom badge is proudly manufactured from start to finish at the state-of-the-art facility in the USA.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary text-lg">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                With highly optimized domestic production, custom badges are crafted and delivered to your hands with unmatched speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks />
      <Footer />
    </div>
  );
};

export default SmithWarrenBadges;
