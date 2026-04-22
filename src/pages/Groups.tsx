import { motion } from "framer-motion";
import { Tag, Sparkles, Headphones, Shirt, Store, ArrowRight, Check, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import groupsHero from "@/assets/groups-hero.png";
import teamImg from "@/assets/groups-team.jpg";

const features = [
  {
    icon: Tag,
    title: "Group Pricing Solutions",
    text: "Tailored programs and competitive discounts for any group size, with industry-leading product selection and an exceptional customer experience.",
  },
  {
    icon: Sparkles,
    title: "Personalized Embroidery",
    text: "Easy, hassle-free logo embroidery and monogramming, completed in-house by our meticulous embroidery team.",
  },
  {
    icon: Headphones,
    title: "White-Glove Assistance",
    text: "Dedicated group specialists ready to assist by phone, email, or contact form to manage every detail of your order.",
  },
  {
    icon: Shirt,
    title: "Wide Range of Apparel",
    text: "Scrubs, lab coats, undershirts, T-shirts, jackets, chef wear, hi-vis safety apparel, public safety uniforms, shoes, and accessories.",
  },
  {
    icon: Store,
    title: "In-Store Expertise",
    text: "Knowledgeable staff to help your team embrace the latest trends—uniforms with antimicrobial and sustainable materials.",
  },
];

const idealFor = [
  "Hospitals & Health Systems",
  "Medical & Dental Offices",
  "Surgical & Specialty Practices",
  "Nursing & Allied Health Schools",
  "Veterinary Clinics",
  "Spas & Wellness Centers",
  "Chef & Culinary Teams",
  "Public Safety & First Responders",
];

const Groups = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={teamImg}
            alt=""
            className="w-full h-full object-cover opacity-25"
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
              For Groups & Organizations
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.05] mb-6">
              Outfit your team.
              <br />
              <span className="italic text-teal-light">Save together.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl font-light leading-relaxed">
              Group discounts and full-service uniform programs for medical offices, hospitals, schools, and organizations near Eatontown, New Jersey.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Start a Group Order <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:732-308-7788"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> 732-308-7788
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={groupsHero}
                alt="The Scrub Boutique ULTD group order program"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] bg-muted"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                Why Group Programs Work
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Better outfits.<br />
                <span className="italic text-secondary">Better pricing.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Group programs make professional uniforms more accessible and affordable for medical offices and organizations. When teams source together, everyone benefits—from coordinated branding to streamlined reorders and meaningful savings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Scrub Boutique ULTD partners with healthcare providers, schools, and organizations across the Tri-State to build programs that fit both budget and dress code.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
              What We Offer Groups
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Full-service uniform <span className="italic text-secondary">programs</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
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
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {f.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">
                Built For Your Team
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Whoever you outfit,<br />
                <span className="italic text-secondary">we have you covered</span>.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Set color, brand, or style standards across departments and team members—our staff makes establishing dress code standards effortless.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={teamImg}
                alt="Hospital team in matching navy scrubs"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hospital systems strip */}
      <section className="py-16 bg-primary">
        <div className="container text-center">
          <p className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-3">
            Trusted Healthcare Partners
          </p>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-8">
            Discounts for major NJ hospital systems
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-primary-foreground/70 font-display text-lg md:text-xl">
            <span>RWJBarnabas Health</span>
            <span className="hidden sm:inline text-primary-foreground/30">·</span>
            <span>Hackensack Meridian Health</span>
            <span className="hidden sm:inline text-primary-foreground/30">·</span>
            <span>Atlantic Health Care System</span>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-6">
            All healthcare workers receive <span className="text-accent font-semibold">10% off</span> with appropriate ID
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-warm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-accent-foreground mb-4 leading-tight">
              Let's build your group program.
            </h2>
            <p className="text-accent-foreground/85 mb-8 text-base md:text-lg max-w-xl mx-auto">
              Reach out to our group specialists by phone, email, or contact form—we'll respond promptly with pricing and next steps.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:732-308-7788"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" /> 732-308-7788
              </a>
              <a
                href="mailto:customerservice@tsbuniforms.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-card text-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-accent-foreground/30 text-accent-foreground font-semibold text-sm hover:bg-accent-foreground/10 transition-colors"
              >
                Contact Form <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Groups;
