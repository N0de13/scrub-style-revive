import { useEffect, useState } from "react";
import { X, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "email-popup-dismissed-v1";
const PROMO_CODE = "Lakewood15";

const EmailPopup = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center bg-foreground/40 backdrop-blur-sm animate-fade-in p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-popup-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-card text-card-foreground shadow-2xl overflow-hidden animate-scale-in border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-background/80 hover:bg-background p-2 text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-to-br from-primary/15 via-accent/15 to-secondary/20 px-6 pt-10 pb-6 sm:px-10 sm:pt-12 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 text-accent-foreground px-3 py-1 text-xs font-medium uppercase tracking-wider">
            <Mail className="h-3.5 w-3.5" />
            New Customer Offer
          </span>
          <h2
            id="email-popup-title"
            className="mt-4 font-serif text-3xl sm:text-4xl leading-tight text-foreground"
          >
            Take <em className="text-primary not-italic">15% off</em> your first order
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Join our email list for new arrivals, embroidery specials, and
            Lakewood-only perks.
          </p>
        </div>

        <div className="p-6 sm:p-8 flex flex-col gap-4">
          <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Your code
            </p>
            <p className="font-serif text-2xl text-foreground mt-1 tracking-widest">
              {PROMO_CODE}
            </p>
            <button
              onClick={copyCode}
              className="mt-2 text-xs text-primary hover:underline"
            >
              {copied ? "Copied!" : "Tap to copy"}
            </button>
          </div>

          <Link
            to="/new-customer-discount"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            Sign Up & Claim 15% Off
          </Link>
          <button
            onClick={close}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            No thanks, maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
