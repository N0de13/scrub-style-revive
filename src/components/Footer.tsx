import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="inline-block bg-background rounded-xl p-3 mb-4">
              <img
                src={logo}
                alt="The Scrub Boutique ULTD"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              New Jersey's premier destination for medical scrubs, custom embroidery, and professional uniforms.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="https://shop.thescrubboutiqueultd.com/" target="_blank" rel="noopener noreferrer" className="text-background/60 text-sm hover:text-background transition-colors">Shop Online</a>
              <a href="#embroidery" className="text-background/60 text-sm hover:text-background transition-colors">Embroidery</a>
              <a href="#groups" className="text-background/60 text-sm hover:text-background transition-colors">Group Orders</a>
              <a href="#contact" className="text-background/60 text-sm hover:text-background transition-colors">Contact Us</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.facebook.com/TheScrubBoutiqueUltd" target="_blank" rel="noopener noreferrer" className="text-background/60 text-sm hover:text-background transition-colors">Facebook</a>
              <a href="https://www.instagram.com/thescrubboutiqueeatontown/" target="_blank" rel="noopener noreferrer" className="text-background/60 text-sm hover:text-background transition-colors">Instagram</a>
              <a href="https://www.tiktok.com/@thescrubboutique" target="_blank" rel="noopener noreferrer" className="text-background/60 text-sm hover:text-background transition-colors">TikTok</a>
              <a href="https://www.linkedin.com/company/the-scrub-boutique" target="_blank" rel="noopener noreferrer" className="text-background/60 text-sm hover:text-background transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">© 2026 The Scrub Boutique ULTD — Monmouth County, New Jersey</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
