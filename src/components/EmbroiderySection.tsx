import { motion } from "framer-motion";
import embroideryImg from "@/assets/embroidery.jpg";

const EmbroiderySection = () => {
  return (
    <section id="embroidery" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={embroideryImg}
              alt="Custom embroidered medical scrubs"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold text-sm shadow-lg">
              Save Big on Group Orders
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">Custom Embroidery</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Your Logo,<br />
              <span className="italic text-secondary">Perfectly Stitched</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Add a personal and professional touch to your workwear with custom embroidery. We digitize your logo and can place it on scrubs, hats, shirts — anything. Beautiful design that showcases your name, title, or logo in style.
            </p>
            <ul className="space-y-3 mb-8">
              {["We digitize your logo for any garment", "Professional, clean custom designs", "Group discounts for offices & hospitals"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmbroiderySection;
