import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Seo,
  localBusinessJsonLd,
  organizationJsonLd,
  buildBreadcrumbLd,
  buildSpeakableLd,
  siteUrl,
} from "@/components/Seo";

const newCustomerDiscountPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${siteUrl}/new-customer-discount`,
  name: "New Customer Discount | The Scrub Boutique ULTD",
};

const NewCustomerDiscount = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formContainerRef.current) {
      // Clear any existing contents to prevent duplication
      formContainerRef.current.innerHTML = "";

      const script = document.createElement("script");
      script.src = "https://form.jotform.com/jsform/261723213623045";
      script.type = "text/javascript";
      script.async = true;
      formContainerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="New Customer Discount | The Scrub Boutique ULTD"
        description="Claim your special new customer discount at The Scrub Boutique ULTD. Sign up now and save on premium medical uniforms, scrubs, chef wear, and accessories."
        canonicalPath="/new-customer-discount"
        keywords={[
          "scrub store discount",
          "new customer coupon",
          "scrub boutique coupons",
          "Lakewood NJ uniform store discount",
        ]}
        jsonLd={[
          organizationJsonLd,
          localBusinessJsonLd,
          newCustomerDiscountPageLd,
          buildBreadcrumbLd([
            { name: "Home", path: "/" },
            { name: "New Customer Discount", path: "/new-customer-discount" },
          ]),
          buildSpeakableLd(`${siteUrl}/new-customer-discount`, ["h1", "h2", "p"]),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={[{ name: "New Customer Discount" }]} />

      {/* Hero Header */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-teal-light blur-3xl" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container relative z-10 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-4"
          >
            Exclusive Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground leading-tight mb-4"
          >
            New Customer Discount
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/90 font-light max-w-2xl mx-auto"
          >
            Fill out the form below to receive your special welcome discount code valid for your next purchase. Thank you for choosing The Scrub Boutique ULTD!
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl shadow-xl p-4 md:p-8"
          >
            <div ref={formContainerRef} className="w-full min-h-[500px]" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewCustomerDiscount;
