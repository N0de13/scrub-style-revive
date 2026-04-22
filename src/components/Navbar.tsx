import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { brands } from "@/data/brands";
import logo from "@/assets/logo.jpg";

type NavItem =
  | { label: string; href: string }
  | { label: string; href: string; children: { label: string; href: string }[] };

const navLinks: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  {
    label: "Brands",
    href: "/brands",
    children: [
      { label: "All Brands", href: "/brands" },
      ...brands.map((b) => ({ label: b.name, href: `/brands/${b.slug}` })),
    ],
  },
  { label: "Embroidery", href: "/embroidery" },
  { label: "Groups", href: "/groups" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2">
        <div className="container flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <a href="tel:866-245-9816" className="flex items-center gap-1.5 hover:text-teal-light transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>866-245-9816</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              315 NJ-35 Store #3, Eatontown, NJ 07724
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/TheScrubBoutiqueUltd" target="_blank" rel="noopener noreferrer" className="hover:text-teal-light transition-colors">FB</a>
            <a href="https://www.instagram.com/thescrubboutiqueeatontown/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-light transition-colors">IG</a>
            <a href="https://www.tiktok.com/@thescrubboutique" target="_blank" rel="noopener noreferrer" className="hover:text-teal-light transition-colors">TT</a>
            <a href="https://www.linkedin.com/company/the-scrub-boutique" target="_blank" rel="noopener noreferrer" className="hover:text-teal-light transition-colors">LI</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center" aria-label="The Scrub Boutique ULTD home">
            <img
              src={logo}
              alt="The Scrub Boutique ULTD — Medical Uniforms, Chef Wear & Accessories"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const hasChildren = "children" in link;
              if (hasChildren) {
                return (
                  <div key={link.label} className="relative group">
                    <Link
                      to={link.href}
                      className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="bg-card border border-border rounded-2xl shadow-xl py-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-5 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return link.href.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://shop.thescrubboutiqueultd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Shop Online
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-card border-b border-border"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const hasChildren = "children" in link;
                  if (hasChildren) {
                    const isOpen = openDropdown === link.label;
                    return (
                      <div key={link.label} className="border-b border-border/50 last:border-0">
                        <button
                          className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-primary py-3"
                          onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isOpen && (
                          <div className="pb-3 pl-4 flex flex-col gap-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="text-sm text-foreground/70 hover:text-primary py-1.5"
                                onClick={() => {
                                  setOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return link.href.startsWith("/#") ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm font-medium text-foreground/80 hover:text-primary py-3 border-b border-border/50 last:border-0"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-sm font-medium text-foreground/80 hover:text-primary py-3 border-b border-border/50 last:border-0"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <a
                  href="https://shop.thescrubboutiqueultd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  Shop Online
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
