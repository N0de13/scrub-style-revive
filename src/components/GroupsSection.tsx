import { motion } from "framer-motion";
import groupsImg from "@/assets/groups.jpg";

const hospitals = [
  "RWJ Barnabas",
  "Monmouth Medical Center",
  "Hackensack Meridian Health",
  "Jersey Shore University Medical Center",
  "Atlantic Health Care",
  "Centra State Medical Center",
];

const GroupsSection = () => {
  return (
    <section id="groups" className="py-24 bg-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">Hospital & Group Orders</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Outfitting <span className="italic text-secondary">Teams</span><br />
              Across New Jersey
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We proudly service major healthcare systems throughout New Jersey. Whether you need uniforms for a small practice or an entire hospital, we offer group discounts and custom embroidery for your team.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {hospitals.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {h}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex px-8 py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Contact for Group Orders
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img
              src={groupsImg}
              alt="Team of healthcare professionals in matching scrubs"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GroupsSection;
