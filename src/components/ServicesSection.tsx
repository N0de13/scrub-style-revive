import { motion } from "framer-motion";
import { Shirt, PenTool, Users, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Medical Scrubs",
    description: "Premium scrubs from top brands in sizes XXS to 5XL. Sleek, modern designs and classic styles for every professional.",
  },
  {
    icon: PenTool,
    title: "Custom Embroidery",
    description: "We digitize your logo and embroider it on scrubs, hats, shirts — anything. Add a professional touch to your workwear.",
  },
  {
    icon: Users,
    title: "Group & Hospital Orders",
    description: "Special group discounts for hospitals, clinics, and medical offices. Custom uniforms for your entire team.",
  },
  {
    icon: Stethoscope,
    title: "Accessories",
    description: "Stethoscopes, compression socks, Nurse Mates bags, and more. Everything you need to complement your look.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Services & Specialties
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
