import { useEffect, useState } from "react";
import { X, MessageSquare } from "lucide-react";
import nurseImg from "@/assets/sms-nurse.png";

const STORAGE_KEY = "sms-popup-dismissed-v1";
const SMS_URL = "https://lp.constantcontactpages.com/sl/wKsaPu3";

const SmsPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 6000);
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
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center bg-foreground/40 backdrop-blur-sm animate-fade-in p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sms-popup-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-slate-900 text-slate-100 shadow-2xl overflow-hidden animate-scale-in border border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-slate-800/80 hover:bg-slate-800 p-2 text-slate-300 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-5">
          <div className="sm:col-span-2 bg-gradient-to-br from-slate-950/40 via-primary/20 to-accent/20 flex items-end justify-center p-4 sm:p-2">
            <img
              src={nurseImg}
              alt="Cartoon nurse holding a phone"
              width={768}
              height={768}
              loading="lazy"
              className="w-40 sm:w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          <div className="sm:col-span-3 p-6 sm:p-8 flex flex-col gap-4">
            <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-accent/30 text-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
              <MessageSquare className="h-3.5 w-3.5" />
              Email & SMS List
            </span>
            <h2
              id="sms-popup-title"
              className="font-serif text-3xl sm:text-4xl leading-tight text-white"
            >
              Pssst… get the <em className="text-teal-light not-italic">good stuff</em> first.
            </h2>
            <p className="text-sm text-slate-300">
              Join our email and SMS list for early access to new scrub drops, embroidery
              specials, and Lakewood-only perks.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={SMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                Join Our Email and SMS List
              </a>
              <button
                onClick={close}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                No thanks, maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsPopup;
