import { motion } from "framer-motion";
import skechersBannerAsset from "@/assets/skechers-slip-ins-scrubs-by-barco-nj.png.asset.json";

const SkechersBanner = () => {
  return (
    <section className="py-8 bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-border/50 group relative bg-black/5 shadow-sm hover:shadow-lg transition-shadow"
        >
          <a
            href="https://shop.thescrubboutiqueultd.com/ProductPage?s=skechers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Shop Skechers Slip-ins Scrubs by Barco online at The Scrub Boutique"
            className="block relative"
          >
            <img
              src={skechersBannerAsset.url}
              alt="Skechers Slip-ins Scrubs by Barco in Violet Burst with Skechers sneakers, Lakewood NJ"
              className="w-full h-auto"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-4 pointer-events-none">
              <span className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-semibold shadow-lg text-sm tracking-wide opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Shop Skechers Slip-ins
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkechersBanner;
