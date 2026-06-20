import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import designYourOwnBadgeAsset from "@/assets/design-your-own-badge.png.asset.json";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              icon: MapPin,
              title: "Address",
              lines: ["60 Chambersbridge Road", "Unit 4", "Lakewood, NJ 08701"],
              href: "https://maps.app.goo.gl/7ZGULnNvccpsntKH9",
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
              lines: ["peter@tsbuniforms.com"],
              href: "mailto:peter@tsbuniforms.com",
            },
            {
              icon: Clock,
              title: "Visit Us",
              lines: ["Mon–Sat: 10am–6pm", "Sunday: Closed"],
              href: undefined,
            },
            {
              icon: MessageSquare,
              title: "Sign Up For SMS",
              lines: ["Get deals & updates"],
              href: "https://lp.constantcontactpages.com/sl/wKsaPu3",
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl overflow-hidden border border-primary-foreground/10"
        >
          <iframe
            src="https://maps.google.com/maps?q=60+Chambersbridge+Road,+Unit+4,+Lakewood,+NJ+08701&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Scrub Boutique Location"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 rounded-2xl overflow-hidden border border-primary-foreground/10 group relative bg-black/10"
        >
          <a href="/smith-warren-badges" className="block relative aspect-[21/9] sm:aspect-[3.2/1] w-full">
            <img
              src={designYourOwnBadgeAsset.url}
              alt="Design Your Own Custom Smith & Warren Badge"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
              <span className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-lg text-sm tracking-wide opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Design Your Badge Now
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
