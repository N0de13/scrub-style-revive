import { motion } from "framer-motion";
import { Sparkles, Layers, Building2, Shield, Shirt, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import capImg from "@/assets/embroidery-cap.jpg";
import machineImg from "@/assets/embroidery-machine.jpg";
import multiheadImg from "@/assets/embroidery-multihead.jpg";
import detailImg from "@/assets/embroidery-detail.jpg";
import {
  Seo,
  localBusinessJsonLd,
  buildBreadcrumbLd,
  buildSpeakableLd,
  siteUrl,
} from "@/components/Seo";

const embroideryServiceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Embroidery",
  name: "Custom Embroidery for Medical, Corporate & Public Safety Uniforms",
  provider: { "@id": `${siteUrl}/#store` },
  areaServed: ["Lakewood NJ", "Monmouth County", "Ocean County", "New Jersey", "Tri-State Area"],
  url: `${siteUrl}/embroidery`,
  description:
    "In-house digitizing and commercial multi-head embroidery on scrubs, lab coats, chef coats, corporate apparel, and first responder uniforms.",
};

const services = [
  {
    icon: Shirt,
    title: "Medical Scrubs",
    text: "Names, titles, and credentials embroidered cleanly on tops, jackets, and lab coats.",
  },
  {
    icon: Building2,
    title: "Corporate Apparel",
    text: "Polos, button-downs, jackets, and uniforms branded with your company logo.",
  },
  {
    icon: Shield,
    title: "Public Safety",
    text: "Law enforcement, fire, and EMS uniforms with regulation-ready embroidery.",
  },
  {
    icon: Sparkles,
    title: "Caps & Accessories",
    text: "Hats, beanies, bags, and accessories stitched to perfection.",
  },
];

const process = [
  { step: "01", title: "Send Your Logo", text: "Email us your artwork or design idea—any format works." },
  { step: "02", title: "We Digitize It", text: "Our team converts your logo into a precise embroidery file." },
  { step: "03", title: "Approve a Sample", text: "Review thread colors, sizing, and placement before production." },
  { step: "04", title: "Stitched & Delivered", text: "Pick up in-store or arrange delivery for your group order." },
];

const Embroidery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Custom Embroidery in Lakewood, NJ | Logo Scrubs & Uniforms"
        description="Custom embroidery on scrubs, lab coats, chef coats, corporate polos & first responder uniforms in Lakewood, NJ. In-house digitizing, sample approval & group pricing."
        canonicalPath="/embroidery"
        keywords={[
          "custom embroidery Lakewood NJ",
          "logo embroidery scrubs New Jersey",
          "monogram lab coat NJ",
          "chef coat embroidery Monmouth County",
          "uniform embroidery Ocean County",
          "fire EMS police embroidery NJ",
          "Coastline Custom Embroidery",
        ]}
        jsonLd={[
          localBusinessJsonLd,
          embroideryServiceLd,
          buildBreadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Embroidery", path: "/embroidery" },
          ]),
          buildSpeakableLd(`${siteUrl}/embroidery`, ["h1", "h2", "p"]),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={[{ name: "Embroidery" }]} />

      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={capImg}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Custom Embroidery
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] mb-6">
              Your Logo.
              <br />
              <span className="italic text-teal-light">Perfectly Stitched.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl font-light leading-relaxed">
              Powered by Coastline Custom Embroidery—serving Monmouth & Ocean County since 2016. From a single jacket to thousands of pieces, we make your brand wearable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                See Our Process
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Detail */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={detailImg}
                alt="Close-up of an embroidery machine stitching gold thread on dark fabric"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 bg-accent text-accent-foreground px-6 py-4 rounded-2xl font-display font-bold text-base shadow-xl">
                Crafted in NJ
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                Precision Craft
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Detail you can <span className="italic text-secondary">feel</span>.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every stitch matters. We digitize your artwork in-house, color-match thread to your brand, and run test samples before any large run. The result is sharp, durable embroidery that holds up shift after shift, wash after wash.
              </p>
              <ul className="space-y-3">
                {[
                  "In-house digitizing & artwork review",
                  "High-density thread color library",
                  "Sample approval before production",
                  "Group, school, and hospital pricing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
              What We Embroider
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              From scrubs to <span className="italic text-secondary">caps</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card p-7 rounded-2xl border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {s.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cap feature */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <img
                src={capImg}
                alt="Custom embroidery on a blue cap mid-stitch"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                Built for Teams
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                One name or<br />
                <span className="italic text-secondary">an entire department</span>.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you need a single lab coat embroidered with your name and credentials, or matching uniforms for an entire hospital floor, school district, or first-responder unit—we scale to fit.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We've outfitted corporations, school systems, law enforcement, fire, and emergency medical services across the Tri-State area.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Start a Group Order <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28 bg-muted/40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Simple, four-step <span className="italic text-secondary">process</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative bg-card p-7 rounded-2xl border border-border"
              >
                <div className="text-5xl font-display font-bold text-secondary/30 mb-3">
                  {p.step}
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment / Capacity */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={multiheadImg}
                alt="Multi-head commercial embroidery machines with colorful thread spools"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4] col-span-1"
                loading="lazy"
              />
              <img
                src={machineImg}
                alt="Four-head commercial embroidery machine"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4] col-span-1 mt-8"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                Production Capacity
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Industrial machines.<br />
                <span className="italic text-secondary">Boutique attention.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our multi-head commercial embroidery setup lets us run large group orders quickly without sacrificing quality. Every job—big or small—gets the same careful eye.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div>
                  <div className="text-3xl font-display font-bold text-primary flex items-center gap-1">
                    <Layers className="w-6 h-6" /> Multi
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Head Output</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">15+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Thread Colors</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">2016</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Stitching Since</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-warm py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent-foreground mb-3">
            Ready to put your logo on it?
          </h2>
          <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
            Visit our Lakewood store or send us your artwork to get a free quote on your custom embroidery project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Get Your Quote
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

      <RelatedLinks exclude={["embroidery"]} />
      <Footer />
    </div>
  );
};

export default Embroidery;
