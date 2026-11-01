import { useEffect, useState } from "react";
import { X } from "lucide-react";
import flyerImg from "@/assets/big-sale-flyer.png.asset.json";

const STORAGE_KEY = "email-popup-dismissed-v2";
const DIRECTIONS_URL = "https://maps.app.goo.gl/7ZGULnNvccpsntKH9";

const EmailPopup = () => {
  const [open, setOpen] = useState(false);

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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm animate-fade-in p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Big Sale: brand-name scrub tops and pants only $15 each"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute -right-2 -top-2 z-10 rounded-full bg-slate-900 hover:bg-slate-800 p-2 text-slate-300 hover:text-white transition-colors shadow-lg border border-slate-700"
        >
          <X className="h-4 w-4" />
        </button>

        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="block rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={flyerImg.url}
            alt="The Scrub Boutique ULTD Big Sale — brand-name scrub tops and pants only $15 each. Stop in today at 60 Chambersbridge Road, Unit 4, Lakewood NJ 08701."
            width={1024}
            height={1536}
            className="w-full h-auto max-h-[80vh] object-contain bg-white"
          />
        </a>

        <button
          onClick={close}
          className="mt-3 mx-auto block text-xs text-slate-300 hover:text-white transition-colors"
        >
          No thanks, maybe later
        </button>
      </div>
    </div>
  );
};

export default EmailPopup;
