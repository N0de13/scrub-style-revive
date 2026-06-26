import { motion } from "framer-motion";
import designYourOwnBadgeAsset from "@/assets/design-your-own-badge.png.asset.json";

const BadgeBanner = () => {
  return (
    <section className="py-12 bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-border/50 group relative bg-black/5 shadow-sm hover:shadow-lg transition-shadow"
        >
          <a href="/smith-warren-badges" className="block relative aspect-[21/9] sm:aspect-[3.5/1] w-full">
            <img
              src={designYourOwnBadgeAsset.url}
              alt="Design Your Own Custom Smith & Warren Badge"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/15 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
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

export default BadgeBanner;
