import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Sparkles, Users, Tag, BookOpen, Info, Home } from "lucide-react";

type LinkKey = "home" | "about" | "brands" | "embroidery" | "groups" | "blog" | "shop";

const ALL_LINKS: Record<LinkKey, {
  label: string;
  href: string;
  external?: boolean;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}> = {
  home: { label: "Home", href: "/", description: "Explore our boutique experience.", icon: Home },
  about: { label: "About Us", href: "/about", description: "Meet the family behind The Scrub Boutique.", icon: Info },
  brands: { label: "Shop Brands", href: "/brands", description: "Browse Barco, Cherokee, Grey's Anatomy & more.", icon: Tag },
  embroidery: { label: "Custom Embroidery", href: "/embroidery", description: "Logos, names & credentials, perfectly stitched.", icon: Sparkles },
  groups: { label: "Group Orders", href: "/groups", description: "Hospital, school & team uniform programs.", icon: Users },
  blog: { label: "Blog", href: "/blog", description: "Scrub care tips, brand spotlights & news.", icon: BookOpen },
  shop: { label: "Shop Online", href: "https://shop.thescrubboutiqueultd.com/", external: true, description: "Browse our full catalog and order online.", icon: ShoppingBag },
};

interface RelatedLinksProps {
  exclude?: LinkKey[];
  title?: string;
  eyebrow?: string;
}

const RelatedLinks = ({ exclude = [], title = "Keep Exploring", eyebrow = "More From The Scrub Boutique" }: RelatedLinksProps) => {
  const keys = (Object.keys(ALL_LINKS) as LinkKey[]).filter((k) => !exclude.includes(k));

  return (
    <section className="py-16 md:py-20 bg-muted/40 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="text-secondary font-medium text-sm uppercase tracking-[0.2em] mb-3">{eyebrow}</p>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground leading-tight">{title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {keys.map((k) => {
            const item = ALL_LINKS[k];
            const Icon = item.icon;
            const className =
              "group bg-card p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all flex items-start gap-4";
            const inner = (
              <>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-foreground">{item.label}</h3>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </>
            );
            return item.external ? (
              <a key={k} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <Link key={k} to={item.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
