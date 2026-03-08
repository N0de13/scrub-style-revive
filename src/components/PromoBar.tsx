const PromoBar = () => {
  return (
    <section className="bg-gradient-warm py-8">
      <div className="container text-center">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-accent-foreground mb-2">
          Get 10% Off When You Spend $100 or More
        </h2>
        <p className="text-accent-foreground/80 mb-6">Visit us in-store or shop online to save on premium medical wear</p>
        <a
          href="https://shop.thescrubboutiqueultd.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Shop Now & Save
        </a>
      </div>
    </section>
  );
};

export default PromoBar;
