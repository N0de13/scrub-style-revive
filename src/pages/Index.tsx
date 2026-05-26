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

const Index = () => {
  return (
    <div className="min-h-screen">
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
