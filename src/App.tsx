import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { trackPageView } from "./lib/analytics";

import Index from "./pages/Index";
import About from "./pages/About";
import Embroidery from "./pages/Embroidery";
import Groups from "./pages/Groups";
import Brands from "./pages/Brands";
import BrandPage from "./pages/BrandPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import SmsPopup from "./components/SmsPopup";
import SmithWarrenBadges from "./pages/SmithWarrenBadges";
import NewCustomerDiscount from "./pages/NewCustomerDiscount";

const queryClient = new QueryClient();

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <ScrollToTop />
        <SmsPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/embroidery" element={<Embroidery />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:slug" element={<BrandPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/smith-warren-badges" element={<SmithWarrenBadges />} />
          <Route path="/new-customer-discount" element={<NewCustomerDiscount />} />
          {/* Legacy URL redirects from the old site */}
          <Route path="/news" element={<Navigate to="/blog" replace />} />
          <Route path="/news/*" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/news" element={<Navigate to="/blog" replace />} />
          <Route path="/tag/pumpkins" element={<Navigate to="/" replace />} />
          <Route path="/tag/*" element={<Navigate to="/blog" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

