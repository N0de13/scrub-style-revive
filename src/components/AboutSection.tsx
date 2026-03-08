import { motion } from "framer-motion";
import storeImg from "@/assets/store.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={storeImg}
              alt="The Scrub Boutique ULTD store interior"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[16/10]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">About Us</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              New Jersey's Finest<br />
              <span className="italic text-secondary">Scrub Boutique</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Located in Eatontown, NJ, The Scrub Boutique ULTD offers a wide range of sizes from XXS to 5XL. Our selection includes top brands such as Barco, Zavate, Medi Chic, Landau, White Cross, Nurse Mates, First Tactical, and Sanmar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a Barco Uniforms Platinum Retailer, we offer the best possible prices with the newest styles and fashions. We understand comfort, durability, and style matter in your workwear.
            </p>
            <div className="flex flex-wrap gap-6">
              <div>
                <div className="text-3xl font-display font-bold text-primary">XXS–5XL</div>
                <div className="text-sm text-muted-foreground">Size Range</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Premium Brands</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-primary">Platinum</div>
                <div className="text-sm text-muted-foreground">Barco Retailer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
