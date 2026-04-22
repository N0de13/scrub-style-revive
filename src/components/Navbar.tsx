import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Brands", href: "/#brands" },
  { label: "Embroidery", href: "/embroidery" },
  { label: "Groups", href: "/groups" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <a href="#home" className="font-display text-xl md:text-2xl font-bold text-primary tracking-tight">
            The Scrub Boutique <span className="text-secondary text-sm font-body font-normal">ULTD</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
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
              <div className="container py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary py-2"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://shop.thescrubboutiqueultd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold text-center hover:opacity-90 transition-opacity"
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
