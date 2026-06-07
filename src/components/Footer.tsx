import familyPhoto from "@/assets/tsb-family.jpg.asset.json";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm uppercase tracking-wider">Family Owned &amp; Operated</h4>
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={familyPhoto.url}
                alt="The Scrub Boutique ULTD — family owned and operated"
                className="w-full h-40 object-cover object-top"
                loading="lazy"
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
              <a href="https://www.instagram.com/thescrubboutiquelakewood/" target="_blank" rel="noopener noreferrer" className="text-background/60 text-sm hover:text-background transition-colors">Instagram</a>
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
