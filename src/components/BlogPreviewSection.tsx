import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/blog";

const BlogPreviewSection = () => {
  const latest = posts.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">From the Journal</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Notes on medical style</h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latest.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/blog/${p.slug}`} className="group block">
                <div className="aspect-[5/3] overflow-hidden rounded-2xl bg-muted mb-5">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
