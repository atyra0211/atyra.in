import React, { useCallback, useEffect, useState } from "react";
import "@/App.css";
import { Toaster } from "sonner";
import { initLenis, scrollToSection } from "@/lib/lenis";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import About from "@/components/About";
import WhyAtyra from "@/components/WhyAtyra";
import CustomOrders from "@/components/CustomOrders";
import Occasions from "@/components/Occasions";
import Gallery from "@/components/Gallery";
import InstagramSection from "@/components/InstagramSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { err: false };
  }
  static getDerivedStateFromError() {
    return { err: true };
  }
  render() {
    if (this.state.err) {
      return (
        <div className="grid min-h-screen place-items-center bg-cream text-cocoa">
          Something went wrong — please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [formPreset, setFormPreset] = useState(null);

  useEffect(() => {
    initLenis();
  }, []);

  const exploreCategory = useCallback((cat) => {
    setGalleryFilter(cat.galleryFilter || "All");
    scrollToSection("#gallery");
  }, []);

  const enquireProduct = useCallback((product) => {
    setFormPreset({ product_type: product.productType });
    scrollToSection("#custom-orders");
  }, []);

  const pickOccasion = useCallback((occasion) => {
    if (occasion) setFormPreset({ occasion });
    scrollToSection("#custom-orders");
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen overflow-x-clip bg-cream font-sans text-ink">
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Intro />
          <Categories onExplore={exploreCategory} />
          <Featured onEnquire={enquireProduct} />
          <About />
          <WhyAtyra />
          <CustomOrders preset={formPreset} />
          <Occasions onPick={pickOccasion} />
          <Gallery filter={galleryFilter} onFilterChange={setGalleryFilter} />
          <InstagramSection />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster position="top-center" toastOptions={{ style: { fontFamily: "Manrope, sans-serif" } }} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
