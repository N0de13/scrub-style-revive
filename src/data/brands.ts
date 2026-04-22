export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  category: "scrubs" | "footwear" | "tactical" | "apparel";
  shortDescription: string;
  longDescription: string[];
  bestFor: string[];
  popularStyles: string[];
  features: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  // SEO
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

export const brands: Brand[] = [
  {
    slug: "barco",
    name: "Barco",
    tagline: "Platinum Retailer · The full Barco family in NJ",
    category: "scrubs",
    shortDescription:
      "As a Barco Platinum Retailer in New Jersey, we carry the complete Barco scrub lineup—including Barco One, Grey's Anatomy, Skechers by Barco, KD110, and Wink—at the best prices with the newest styles.",
    longDescription: [
      "The Scrub Boutique ULTD is one of New Jersey's few Platinum-level Barco retailers, which means our Eatontown store stocks deeper sizes, more colors, and the newest releases across the entire Barco family before most other shops in Monmouth County.",
      "Whether you wear Barco for the four-way stretch, the modern tailored fit, or the antimicrobial fabric, we'll help you find the right line for your shift, your specialty, and your dress code.",
    ],
    bestFor: [
      "Nurses on 12-hour shifts who need stretch and recovery",
      "Hospital systems standardizing on Barco One or Grey's Anatomy",
      "Students starting clinicals who need an affordable, durable scrub",
    ],
    popularStyles: [
      "Barco One mock-wrap tops & jogger pants",
      "Grey's Anatomy Spandex Stretch sets",
      "Skechers by Barco Vitality & Reliance lines",
      "KD110 modern fashion scrubs",
      "Wink performance scrubs",
    ],
    features: [
      { title: "Full Barco family", text: "Barco One, Grey's Anatomy, Skechers by Barco, KD110, Wink, and more." },
      { title: "Platinum-level inventory", text: "Top-tier stocking allowance means more colors, more sizes, more often." },
      { title: "Try before you buy", text: "Fitting room expertise instead of guessing online." },
    ],
    faqs: [
      {
        q: "Where can I buy Barco scrubs in New Jersey?",
        a: "The Scrub Boutique ULTD in Eatontown, NJ is a Barco Platinum Retailer carrying the full Barco family in person, including Barco One, Grey's Anatomy, Skechers by Barco, KD110, and Wink.",
      },
      {
        q: "What does 'Platinum Retailer' mean?",
        a: "Platinum is Barco's highest retailer tier. It means we stock more styles, more colors, and a wider size range (XXS–5XL) than standard accounts and get early access to new releases.",
      },
      {
        q: "Do you offer hospital and group discounts on Barco?",
        a: "Yes. We work with NJ hospital systems, medical offices, and schools to provide group pricing and embroidery on Barco scrubs. Contact our group specialists to set up a program.",
      },
    ],
    seoTitle: "Barco Scrubs in New Jersey | Platinum Retailer | The Scrub Boutique ULTD",
    seoDescription:
      "Shop the full Barco family—Barco One, Grey's Anatomy, Skechers by Barco, KD110—at New Jersey's Platinum Barco Retailer in Eatontown. Sizes XXS–5XL.",
    keywords: ["Barco scrubs NJ", "Barco Platinum Retailer New Jersey", "Barco One Eatontown", "buy Barco scrubs near me"],
  },
  {
    slug: "greys-anatomy",
    name: "Grey's Anatomy",
    tagline: "Tailored, flattering scrubs by Barco",
    category: "scrubs",
    shortDescription:
      "Grey's Anatomy by Barco delivers a tailored, fashion-forward fit with soft, durable fabrics. Shop the full collection at our Eatontown, NJ scrub boutique.",
    longDescription: [
      "Grey's Anatomy scrubs are loved across New Jersey hospitals for their flattering tailoring, smooth Spandex Stretch fabric, and feminine details that feel more like ready-to-wear than uniform.",
      "We stock the original Spandex Stretch line as well as Signature, Active, and Impact collections, in core colors plus seasonal drops.",
    ],
    bestFor: [
      "Nurses and techs who want a tailored, flattering silhouette",
      "Professionals who prefer soft, drapey fabric over heavy poly",
      "Anyone who wants matching sets in classic or trend colors",
    ],
    popularStyles: [
      "Grey's Anatomy Spandex Stretch tops & pants",
      "Signature 2-pocket mock wraps",
      "Active straight-leg pants",
      "Impact performance jackets",
    ],
    features: [
      { title: "Tailored fit", text: "Designed with feminine darts, princess seams, and a smooth drape." },
      { title: "Stretch fabric", text: "Spandex Stretch moves with you through long shifts." },
      { title: "Color depth", text: "Core hospital colors plus the latest seasonal releases." },
    ],
    faqs: [
      {
        q: "Are Grey's Anatomy scrubs true to size?",
        a: "Most Grey's Anatomy styles run true to size with a tailored cut. Our Eatontown fitting room makes it easy to compare Signature, Active, and Spandex Stretch fits side by side.",
      },
      {
        q: "Where can I try on Grey's Anatomy scrubs in NJ?",
        a: "Visit The Scrub Boutique ULTD at 315 NJ-35 in Eatontown, NJ. We carry the full Grey's Anatomy lineup in sizes XXS through 5XL.",
      },
    ],
    seoTitle: "Grey's Anatomy Scrubs in New Jersey | Eatontown, NJ | The Scrub Boutique ULTD",
    seoDescription:
      "Shop Grey's Anatomy by Barco scrubs in Eatontown, NJ. Spandex Stretch, Signature, Active & Impact collections in sizes XXS–5XL.",
    keywords: ["Grey's Anatomy scrubs NJ", "Grey's Anatomy Eatontown", "Spandex Stretch scrubs New Jersey"],
  },
  {
    slug: "zavate",
    name: "Zavate",
    tagline: "Modern, sustainable performance scrubs",
    category: "scrubs",
    shortDescription:
      "Zavate scrubs combine fashion-forward design with eco-conscious, antimicrobial performance fabric. Shop Zavate at The Scrub Boutique ULTD in Eatontown, NJ.",
    longDescription: [
      "Zavate is a fast-rising favorite among NJ healthcare professionals who want modern silhouettes and sustainable fabrics without sacrificing performance.",
      "Their pieces feature antimicrobial finishes, four-way stretch, and thoughtful details like hidden pockets and back yokes that keep their shape wash after wash.",
    ],
    bestFor: [
      "Style-driven professionals who want modern cuts",
      "Eco-conscious shoppers who care about sustainable fabrics",
      "Anyone tired of stiff, traditional poly-cotton scrubs",
    ],
    popularStyles: [
      "Ava one-pocket tops",
      "Lily mock-wrap tops",
      "Stella jogger pants",
      "Yoga waistband pants",
    ],
    features: [
      { title: "Sustainable fabric", text: "Made with recycled and responsibly sourced materials." },
      { title: "Antimicrobial", text: "Built-in odor and bacteria resistance." },
      { title: "Modern fit", text: "Tailored, contoured cuts that feel fashion-forward." },
    ],
    faqs: [
      {
        q: "Where can I buy Zavate scrubs near me in NJ?",
        a: "The Scrub Boutique ULTD in Eatontown, NJ carries Zavate in store with full size runs and the latest seasonal colors.",
      },
    ],
    seoTitle: "Zavate Scrubs in New Jersey | Eatontown, NJ | The Scrub Boutique ULTD",
    seoDescription:
      "Shop Zavate sustainable, antimicrobial performance scrubs in Eatontown, NJ. Modern fits, latest colors, sizes XXS–5XL.",
    keywords: ["Zavate scrubs NJ", "Zavate Eatontown", "sustainable scrubs New Jersey"],
  },
  {
    slug: "medi-chic",
    name: "Medi Chic",
    tagline: "Boutique-style scrubs with a fashion edge",
    category: "scrubs",
    shortDescription:
      "Medi Chic delivers boutique-quality scrubs with on-trend cuts, premium fabrics, and details you won't find on big-box brands. Shop Medi Chic in Eatontown, NJ.",
    longDescription: [
      "Medi Chic is one of our most-requested boutique brands—designed for healthcare professionals who treat their scrubs like part of their wardrobe rather than a uniform.",
      "Expect rich color stories, unique pocket placements, and elevated fabrics that drape and recover beautifully.",
    ],
    bestFor: [
      "Aesthetic, dental, and dermatology offices that want elevated dress codes",
      "Spa, wellness, and concierge medicine practices",
      "Anyone who prefers limited-edition styles over mass-market basics",
    ],
    popularStyles: [
      "Tailored V-neck tops",
      "High-waisted jogger pants",
      "Drape-front knit tops",
    ],
    features: [
      { title: "Boutique quality", text: "Premium fabrics with thoughtful tailoring." },
      { title: "Trend-led colors", text: "Seasonal palettes you won't see everywhere." },
      { title: "Fashion-forward", text: "Cuts that feel ready-to-wear, not uniform." },
    ],
    faqs: [
      {
        q: "Is Medi Chic good for medspa and dental offices?",
        a: "Yes—Medi Chic is one of the most popular brands among NJ medspas, dental offices, and concierge practices that want their team to look elevated and on-brand.",
      },
    ],
    seoTitle: "Medi Chic Scrubs in New Jersey | Eatontown, NJ | The Scrub Boutique ULTD",
    seoDescription:
      "Shop Medi Chic boutique-style scrubs in Eatontown, NJ. Trend-led colors, premium fabrics, perfect for medspas and dental offices.",
    keywords: ["Medi Chic scrubs NJ", "boutique scrubs New Jersey", "medspa scrubs Eatontown"],
  },
  {
    slug: "landau",
    name: "Landau",
    tagline: "Heritage scrubs and lab coats trusted for decades",
    category: "scrubs",
    shortDescription:
      "Landau is a heritage scrub and lab coat brand known for clinical-grade durability. Shop Landau Proflex, Forward, and lab coats in Eatontown, NJ.",
    longDescription: [
      "Landau has outfitted American healthcare workers for over 80 years. Their lab coats are the gold standard in many NJ teaching hospitals, and their scrubs are built to survive industrial laundering.",
      "We stock Landau Proflex, Forward, Smitten, and the full lab-coat lineup in unisex and women's cuts, multiple lengths, and tall sizing.",
    ],
    bestFor: [
      "Physicians and residents who need a quality lab coat",
      "Hospitals with industrial laundry programs",
      "Anyone who wants a no-fuss, long-lasting scrub",
    ],
    popularStyles: [
      "Landau Proflex stretch scrubs",
      "Forward by Landau modern fits",
      "Classic men's & women's lab coats",
      "Smitten by Landau",
    ],
    features: [
      { title: "Built to last", text: "Industrial-laundry-tested durability." },
      { title: "Lab coat experts", text: "Multiple lengths, fits, and tall sizing in stock." },
      { title: "Heritage quality", text: "Trusted by US healthcare for 80+ years." },
    ],
    faqs: [
      {
        q: "Where can I get a Landau lab coat in New Jersey?",
        a: "The Scrub Boutique ULTD in Eatontown, NJ stocks Landau lab coats in multiple lengths, fits, and tall sizing, with embroidery available in-house.",
      },
    ],
    seoTitle: "Landau Scrubs & Lab Coats in New Jersey | Eatontown, NJ",
    seoDescription:
      "Shop Landau Proflex, Forward, Smitten scrubs and Landau lab coats in Eatontown, NJ. Embroidery available. Sizes XXS–5XL plus tall.",
    keywords: ["Landau scrubs NJ", "Landau lab coat New Jersey", "lab coat embroidery Eatontown"],
  },
  {
    slug: "white-cross",
    name: "White Cross",
    tagline: "Print scrubs and fashion tops, designed in Canada",
    category: "scrubs",
    shortDescription:
      "White Cross is famous for print scrub tops, soft fabrics, and feminine fits. Shop White Cross FIT, V-Tess, and Marvella in Eatontown, NJ.",
    longDescription: [
      "If you love a great print scrub top, you'll love White Cross. Their FIT line offers tailored solids, V-Tess delivers softness with stretch, and Marvella brings a more elevated feminine cut.",
      "We rotate White Cross prints throughout the year to keep your rotation fresh.",
    ],
    bestFor: [
      "Pediatrics, OB/GYN, and oncology teams that love print tops",
      "Anyone who wants a soft, feminine fit",
      "Shoppers who like to refresh prints seasonally",
    ],
    popularStyles: [
      "White Cross FIT tailored solids",
      "V-Tess soft-stretch tops",
      "Marvella fashion fits",
      "Seasonal print scrub tops",
    ],
    features: [
      { title: "Best-in-class prints", text: "Rotating seasonal prints for pediatrics, OB, oncology and more." },
      { title: "Soft fabrics", text: "Brushed, drapey hand-feel that wears like loungewear." },
      { title: "Feminine fits", text: "Tailored cuts designed by a women-led brand." },
    ],
    faqs: [
      {
        q: "Where can I buy White Cross print scrubs in NJ?",
        a: "The Scrub Boutique ULTD in Eatontown, NJ regularly stocks new White Cross print scrub tops in addition to FIT, V-Tess, and Marvella solids.",
      },
    ],
    seoTitle: "White Cross Scrubs & Print Tops in New Jersey | Eatontown, NJ",
    seoDescription:
      "Shop White Cross FIT, V-Tess, Marvella, and seasonal print scrub tops in Eatontown, NJ. Sizes XXS–5XL.",
    keywords: ["White Cross scrubs NJ", "print scrub tops New Jersey", "White Cross FIT Eatontown"],
  },
  {
    slug: "nurse-mates",
    name: "Nurse Mates",
    tagline: "Nursing footwear built for 12-hour shifts",
    category: "footwear",
    shortDescription:
      "Nurse Mates shoes deliver slip-resistant, supportive footwear for healthcare workers. Try them on in Eatontown, NJ.",
    longDescription: [
      "Standing for 12 hours wrecks the wrong shoe. Nurse Mates is one of the most trusted nursing footwear brands in the country, with slip-resistant outsoles, built-in arch support, and stain-resistant uppers.",
      "We stock Bryar, Align, Velocity, and seasonal styles—come in to fit them in person.",
    ],
    bestFor: [
      "Nurses, techs, and EMTs on long shifts",
      "Anyone who needs slip-resistant work shoes",
      "Healthcare professionals with arch or heel pain",
    ],
    popularStyles: ["Bryar", "Align", "Velocity"],
    features: [
      { title: "Slip-resistant", text: "Outsoles rated for healthcare environments." },
      { title: "All-day support", text: "Built-in arch support and cushioned footbeds." },
      { title: "Easy to clean", text: "Stain-resistant materials." },
    ],
    faqs: [
      {
        q: "Where can I try on Nurse Mates shoes in New Jersey?",
        a: "The Scrub Boutique ULTD in Eatontown, NJ carries Nurse Mates in store so you can fit them in person before committing.",
      },
    ],
    seoTitle: "Nurse Mates Shoes in New Jersey | Eatontown, NJ | The Scrub Boutique ULTD",
    seoDescription:
      "Try on Nurse Mates Bryar, Align, and Velocity nursing shoes in Eatontown, NJ. Slip-resistant footwear for healthcare professionals.",
    keywords: ["Nurse Mates NJ", "nursing shoes New Jersey", "slip resistant shoes Eatontown"],
  },
  {
    slug: "first-tactical",
    name: "First Tactical",
    tagline: "Uniforms and gear for police, fire, and EMS",
    category: "tactical",
    shortDescription:
      "First Tactical builds uniforms, pants, and outerwear for law enforcement, fire, and EMS. Shop First Tactical at The Scrub Boutique ULTD in Eatontown, NJ.",
    longDescription: [
      "First Tactical is engineered by people who have served in public safety. Pants, shirts, and outerwear are built for movement, durability, and discreet utility.",
      "We supply NJ police, fire, and EMS departments and individual first responders—plus we can embroider department insignia in-house.",
    ],
    bestFor: ["Police & corrections", "Fire & rescue", "EMS & paramedics", "Public safety departments"],
    popularStyles: [
      "Tactical pants & cargo styles",
      "Job shirts & polos",
      "Soft-shell jackets",
    ],
    features: [
      { title: "Built for duty", text: "Reinforced stress points and articulated knees." },
      { title: "Department-ready", text: "We embroider insignia and badges in-house." },
      { title: "Stocked locally", text: "Eatontown, NJ inventory for quick fits." },
    ],
    faqs: [
      {
        q: "Do you outfit New Jersey police, fire, and EMS departments?",
        a: "Yes. The Scrub Boutique ULTD supplies First Tactical and other public-safety uniforms to NJ departments and individual first responders, with in-house embroidery for insignia and badges.",
      },
    ],
    seoTitle: "First Tactical Uniforms in New Jersey | Police, Fire, EMS | Eatontown, NJ",
    seoDescription:
      "Shop First Tactical pants, shirts, and outerwear for NJ police, fire, and EMS in Eatontown. In-house embroidery for department insignia.",
    keywords: ["First Tactical NJ", "police uniforms New Jersey", "EMS uniforms Eatontown", "fire department uniforms NJ"],
  },
  {
    slug: "sanmar",
    name: "SanMar",
    tagline: "Corporate apparel & promotional wear with embroidery",
    category: "apparel",
    shortDescription:
      "SanMar gives us access to thousands of polos, jackets, T-shirts, and corporate apparel pieces—ready to be embroidered in-house for your business or team in NJ.",
    longDescription: [
      "Through SanMar, we can source and embroider virtually any corporate apparel program—polos, button-downs, fleece, soft-shells, headwear, bags, and more.",
      "Combined with our in-house embroidery, this is the easiest way for NJ businesses, schools, and organizations to outfit their staff without minimums on most styles.",
    ],
    bestFor: [
      "Small businesses needing branded polos and jackets",
      "Schools, sports teams, and clubs",
      "Corporate teams wanting consistent branded apparel",
    ],
    popularStyles: ["Port Authority polos", "OGIO jackets", "Nike & Sport-Tek corporate styles", "Headwear and bags"],
    features: [
      { title: "Massive catalog", text: "Thousands of styles, colors, and sizes available to order." },
      { title: "In-house embroidery", text: "Add your logo, name, or department right here in Eatontown." },
      { title: "Group-friendly", text: "Most pieces have low or no minimums." },
    ],
    faqs: [
      {
        q: "Can I order custom embroidered polos for my NJ business?",
        a: "Yes. Through SanMar we can source thousands of corporate apparel styles and embroider your logo in-house at our Eatontown, NJ location—usually with no minimum order.",
      },
    ],
    seoTitle: "SanMar Corporate Apparel & Embroidery in New Jersey | Eatontown, NJ",
    seoDescription:
      "Custom embroidered polos, jackets, and corporate apparel from SanMar. Sourced and stitched in Eatontown, NJ—no minimums on most styles.",
    keywords: ["SanMar NJ", "embroidered polos New Jersey", "corporate apparel Eatontown", "custom embroidery NJ"],
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
