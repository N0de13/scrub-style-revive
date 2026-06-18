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
  { label: "Blog", href: "/blog" },
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
              Address: 60 Chambers Brg Rd Unit 4, Lakewood, NJ 08701
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/TheScrubBoutiqueUltd" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/thescrubboutiquelakewood/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@thescrubboutique" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="TikTok">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.27 4.92-3.4 6.32-2.14 1.41-4.85 1.63-7.18.62-2.33-1.01-3.98-3.12-4.41-5.62-.14-.79-.14-1.6 0-2.39.43-2.5 2.08-4.61 4.41-5.62 2.33-1.01 5.04-.79 7.18.62 2.13 1.4 3.4 3.8 3.4 6.32V9.95c-1.54.17-3.12.68-4.24 1.79-1.12 1.08-1.67 2.64-1.75 4.17h-.02z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/the-scrub-boutique" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
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
