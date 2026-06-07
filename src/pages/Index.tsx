import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BrandsMarquee from "@/components/BrandsMarquee";
import EmbroiderySection from "@/components/EmbroiderySection";
import GroupsSection from "@/components/GroupsSection";
import PromoBar from "@/components/PromoBar";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  Seo,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
  buildBreadcrumbLd,
  buildSpeakableLd,
  siteUrl,
} from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="The Scrub Boutique ULTD | Premium Scrubs & Uniforms in Lakewood, NJ"
        description="Family-owned scrub & uniform boutique in Lakewood, NJ. Barco Platinum Retailer with custom embroidery, group programs, and sizes XXS–5XL for nurses, chefs & first responders."
        canonicalPath="/"
        keywords={[
          "scrubs Lakewood NJ",
          "medical uniforms New Jersey",
          "Barco Platinum Retailer NJ",
          "nursing scrubs Monmouth County",
          "custom embroidery Lakewood",
          "chef uniforms NJ",
          "scrub store near me",
          "hospital uniform programs NJ",
        ]}
        image={`${siteUrl}/og-image.jpg`}
        jsonLd={[
          organizationJsonLd,
          websiteJsonLd,
          localBusinessJsonLd,
          buildBreadcrumbLd([{ name: "Home", path: "/" }]),
          buildSpeakableLd(`${siteUrl}/`, ["h1", ".speakable", "p"]),
        ]}
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BrandsMarquee />
      <EmbroiderySection />
      <GroupsSection />
      <PromoBar />
      <BlogPreviewSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
