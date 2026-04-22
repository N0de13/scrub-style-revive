import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Leah Osborne",
    role: "Nursing Student · White Coat Ceremony",
    text: "I had my white coat ceremony, and I needed work shoes that would fit a wider foot. Peter was wonderful and completely accommodating—he even brought the shoes to me personally. Truly above and beyond.",
  },
  {
    name: "Carol Cirz",
    role: "Embroidery Customer",
    text: "I came here after speaking to Peter about embroidering a scrub jacket for my daughter. He was one of the only people willing to go above and beyond to guarantee it was done right. Exceptional service.",
  },
  {
    name: "Mary Osborne",
    role: "Nursing Parent",
    text: "My daughter needed shoes for her clinical ceremony that weren't in stock. Pete went way above and beyond, ordering two sizes from the distributor to make sure they arrived at her school in three days.",
  },
  {
    name: "Christina Anton",
    role: "Custom Apparel · Sports Team",
    text: "Peter is a pleasure to work with! He created a custom hoodie for the water polo team. It turned out gorgeous and was delivered very quick. 5-star business.",
  },
  {
    name: "Lynn McKelvey",
    role: "Long-time Customer",
    text: "Peter is pleasant, helpful, wonderful! He found not 1 but 4 pairs of work shoes for me—in my hard-to-find size 11. A full lineup of scrub brands. Great store. I'll be back. Promise!",
  },
  {
    name: "Elizabeth Jones",
    role: "Healthcare Professional",
    text: "I came here after my first day of work in scrubs from Amazon that were just super uncomfortable. Michelle was so helpful in finding me scrubs that fit right and pulling different styles to compare.",
  },
  {
    name: "Melody Rose",
    role: "Healthcare Worker",
    text: "Great place! Erin was so kind and helpful when I needed to buy a few pairs of scrubs. I would highly recommend this place—and shout out to Erin.",
  },
  {
    name: "Kristina Falco",
    role: "Embroidery Customer",
    text: "Great experience getting a jacket embroidered. Friendly, fast, and amazing job. Absolutely love it. Highly recommend.",
  },
  {
    name: "Corrine McGrath",
    role: "Local Guide · Loyal Customer",
    text: "They have a great selection of colors, brands, and styles. I buy all my scrubs here. They wash and dry beautifully—never need ironing. The employees are so helpful and friendly. You get what you pay for.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/40">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3"
          >
            Loved by Healthcare Professionals
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6"
          >
            Stories from <span className="italic text-secondary">our customers</span>
          </motion.h2>

          {/* Star summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-5 py-2.5 shadow-sm"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">5.0 on Google</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">· Hundreds of happy customers</span>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="break-inside-avoid bg-card border border-border rounded-2xl p-7 mb-6 hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-5 right-5 w-7 h-7 text-secondary/15" />

              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-foreground/90 leading-relaxed text-sm mb-5">
                {t.text}
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm flex-shrink-0">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-foreground truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/search?q=the+scrub+boutique+ultd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Read all reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
