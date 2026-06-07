import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">
            Visit Our Store
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              title: "Address",
              lines: ["315 NJ-35 Store #3", "Lakewood, NJ 07724"],
              href: "https://www.google.com/maps/place/315+NJ-35,+Lakewood,+NJ+07724",
            },
            {
              icon: Phone,
              title: "Phone",
              lines: ["(866) 245-9816", "(732) 308-7788"],
              href: "tel:866-245-9816",
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["customerservice@", "tsbuniforms.com"],
              href: "mailto:customerservice@tsbuniforms.com",
            },
            {
              icon: Clock,
              title: "Visit Us",
              lines: ["Mon–Sat: 10am–6pm", "Sunday: Closed"],
              href: undefined,
            },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href?.startsWith("http") ? "_blank" : undefined}
              rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="block bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 text-center hover:bg-primary-foreground/10 transition-colors"
            >
              <item.icon className="w-8 h-8 text-teal-light mx-auto mb-4" />
              <h3 className="font-display font-semibold text-primary-foreground mb-2">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-primary-foreground/70">{line}</p>
              ))}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
