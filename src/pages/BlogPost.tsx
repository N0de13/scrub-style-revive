import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { Seo, buildBreadcrumbLd, buildSpeakableLd, siteUrl } from "@/components/Seo";
import { posts } from "@/data/blog";

const SITE = siteUrl;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${SITE}/blog/${post.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "The Scrub Boutique ULTD" },
    publisher: {
      "@type": "Organization",
      name: "The Scrub Boutique ULTD",
      logo: { "@type": "ImageObject", url: `${SITE}/og-image.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [...post.shortKeywords, ...post.longKeywords].join(", "),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = buildBreadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Journal", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const speakableLd = buildSpeakableLd(url, ["h1", "h2", "p"]);

  return (
    <div className="min-h-screen">
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        keywords={[...post.shortKeywords, ...post.longKeywords]}
        image={`${SITE}${post.image}`}
        jsonLd={[articleLd, faqLd, breadcrumbLd, speakableLd]}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { name: "Journal", path: "/blog" },
          { name: post.title },
        ]}
      />

      <article>
        <div className="container max-w-4xl pt-12 pb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-foreground leading-tight mb-6">{post.title}</h1>
          <p className="text-xl text-muted-foreground">{post.excerpt}</p>
        </div>

        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[16/9] overflow-hidden rounded-3xl bg-muted mb-12"
          >
            <img src={post.image} alt={post.title} width={1280} height={768} className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="container max-w-3xl pb-16">
          <div className="prose-content space-y-10">
            {post.sections.map((s, i) => (
              <section key={i}>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">{s.heading}</h2>
                {s.paragraphs.map((para, j) => (
                  <p key={j} className="text-foreground/80 leading-relaxed text-lg mb-4">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* FAQ */}
          <section className="mt-20 pt-12 border-t border-border">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">FAQ</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faqs.map((f, i) => (
                <div key={i} className="border border-border rounded-2xl p-6 bg-card">
                  <h3 className="font-display text-xl text-foreground mb-3">{f.q}</h3>
                  <p className="text-foreground/80 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Local CTA */}
          <section className="mt-16 p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground">
            <h2 className="font-display text-2xl md:text-3xl mb-3">Visit our Lakewood, NJ boutique</h2>
            <p className="opacity-90 mb-6 max-w-xl">
              Get expert fittings, custom embroidery, and the full Barco Platinum lineup at 60 Chambersbridge Road, Unit 4 in Lakewood — proudly serving Monmouth County and the Jersey Shore.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="tel:866-245-9816" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold">
                <Phone className="w-4 h-4" /> 866-245-9816
              </a>
              <a
                href="https://maps.app.goo.gl/7ZGULnNvccpsntKH9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
              >
                <MapPin className="w-4 h-4" /> 60 Chambersbridge Road, Lakewood
              </a>
            </div>
          </section>
        </div>
      </article>

      {/* Related */}
      <section className="bg-secondary/30 border-t border-border py-16">
        <div className="container">
          <h2 className="font-display text-3xl text-foreground mb-8">Keep reading</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                <div className="aspect-[5/3] overflow-hidden rounded-2xl bg-muted mb-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks exclude={["blog"]} />
      <Footer />
    </div>
  );
};

export default BlogPost;
