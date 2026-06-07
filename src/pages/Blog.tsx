import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Seo, buildBreadcrumbLd, buildSpeakableLd, siteUrl } from "@/components/Seo";
import { posts } from "@/data/blog";

const SITE = siteUrl;

const Blog = () => {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "The Scrub Boutique ULTD Journal",
    url: `${SITE}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.date,
      image: `${SITE}${p.image}`,
      description: p.metaDescription,
    })),
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Medical Uniform Journal | The Scrub Boutique ULTD, Lakewood NJ"
        description="Expert guides on scrubs, nursing footwear, embroidery and uniforms from New Jersey's premier medical boutique in Lakewood, NJ."
        canonicalPath="/blog"
        keywords={["scrubs blog", "nursing tips New Jersey", "medical uniforms Lakewood", "scrub care", "nurse accessories NJ", "chef coats NJ"]}
        jsonLd={[
          itemListLd,
          buildBreadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
          ]),
          buildSpeakableLd(`${SITE}/blog`, ["h1", "h2", "p"]),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={[{ name: "Journal" }]} />
      <header className="bg-secondary/30 border-b border-border">
        <div className="container py-16 md:py-24 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">The Journal</p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">Notes on Medical Style</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical, fashion-forward guides for nurses, doctors, chefs and first responders across New Jersey.
          </p>
        </div>
      </header>

      <main className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <Link to={`/blog/${p.slug}`} className="block">
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
                    {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </time>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
                <h2 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                  {p.title}
                </h2>
                <p className="text-muted-foreground line-clamp-3">{p.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
