import { motion } from "framer-motion";
import { Heart, Shield, Award, Users, Briefcase, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ownersImg from "@/assets/about-owners.jpg";
import teamImg from "@/assets/about-team.jpg";
import storeImg from "@/assets/store.jpg";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    text: "We strive to provide the highest-level customer service and a superb shopping experience.",
  },
  {
    icon: Shield,
    title: "Integrity",
    text: "Trust, Quality, Service, and Value are the core of all our interactions.",
  },
  {
    icon: Award,
    title: "High Standards",
    text: "We hold high standards for everything—from products and store appearance to customer service.",
  },
  {
    icon: Users,
    title: "Servant Leadership",
    text: "We lead with a servant heart, modeling respect and leading by example.",
  },
  {
    icon: Briefcase,
    title: "Strong Work Ethic",
    text: "Hard work and a strong team create the great sense of accomplishment that comes from a job well done.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-teal-light blur-3xl" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] mb-6">
              Welcome to the
              <br />
              <span className="italic text-teal-light">Scrub Boutique</span> Family
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed">
              A family-owned boutique in Eatontown, NJ, dedicated to outfitting healthcare professionals with style, comfort, and uncompromising quality since 2021.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={ownersImg}
                alt="Pietro and Mary Gallotta, owners of The Scrub Boutique ULTD"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                Our History
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                A family business with a<br />
                <span className="italic text-secondary">passion for service</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Scrub Boutique ULTD is a family-owned retail business located in Eatontown, New Jersey. We provide our customers with the best uniforms—from medical scrubs, chef wear, and corporate apparel to professional shoes, industrial work wear, public safety uniforms, hi-visibility safety gear, accessories and much more.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Owners <span className="font-semibold text-foreground">Pietro and Mary Gallotta</span> are passionate about providing attentive customer service and a superb shopping experience for every customer who shops with us. Together, this husband-and-wife team has grown the company across New Jersey and the Tri-State area.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div>
                  <div className="text-3xl font-display font-bold text-primary">2016</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Family Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">2021</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Boutique Opens</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">Tri-State</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Reach</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Our Core <span className="italic text-secondary">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {v.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
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
                src={storeImg}
                alt="Inside The Scrub Boutique ULTD store in Eatontown, NJ"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
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
                Our Story
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                From embroidery shop to a<br />
                <span className="italic text-secondary">one-stop boutique</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a family-run business, Coastline Custom Embroidery has proudly served the communities of Ocean and Monmouth County since 2016. While providing embroidery and screen printing to corporations, school systems, law enforcement, fire, and emergency medical services, we expanded to include The Scrub Boutique ULTD in 2021.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Scrub Boutique ULTD offers scrubs of all brands and colors—including the hottest and trendiest styles from major vendors. We are proudly designated as a <span className="font-semibold text-primary">Platinum Barco Retailer</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We offer discounts to students and all major New Jersey hospital systems, including <span className="font-medium text-foreground">RWJBarnabas Health, Hackensack Meridian Health, and Atlantic Health Care System</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamImg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-8 leading-tight">
              More than a uniform supplier—<br />
              <span className="italic text-teal-light">your partner in caregiving.</span>
            </h2>
            <div className="space-y-5 text-primary-foreground/85 leading-relaxed text-base md:text-lg font-light">
              <p>
                The Scrub Boutique ULTD is more than just a supplier of uniforms; it is a community of dedicated caregivers who understand the significance of comfort, functionality, and professionalism in the healthcare field. We believe uniforms should not only define you, but empower you in your daily work.
              </p>
              <p>
                Our objective is to offer high-quality, comfortable workwear at competitive prices—gentle on your body and built to support demanding shifts. We treat our customers like family, and trust is the foundation of every relationship we build.
              </p>
              <p>
                Quality is non-negotiable. Service is at the core of our ethos. We are dedicated to delivering unbeatable value because your dedication to others deserves nothing less.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://shop.thescrubboutiqueultd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Shop Online <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Visit Our Store
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
