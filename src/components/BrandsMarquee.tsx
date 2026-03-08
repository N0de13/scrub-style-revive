const brands = [
  "BARCO", "GREY'S ANATOMY", "ZAVATE", "MEDI CHIC", "LANDAU",
  "WHITE CROSS", "NURSE MATES", "FIRST TACTICAL", "SANMAR",
];

const BrandsMarquee = () => {
  return (
    <section id="brands" className="py-16 bg-primary overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-teal-light font-medium text-sm uppercase tracking-[0.2em] mb-3">Trusted Partners</p>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground">
          Premium Brands We Carry
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="mx-8 md:mx-12 text-xl md:text-2xl font-display font-semibold text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="container mt-10 text-center">
        <p className="text-primary-foreground/60 text-sm">
          All healthcare workers receive <span className="text-accent font-semibold">10% off</span> with appropriate ID
        </p>
      </div>
    </section>
  );
};

export default BrandsMarquee;
