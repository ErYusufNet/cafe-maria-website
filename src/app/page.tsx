"use client";

import { useState, useCallback } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpecialCoffee from "@/components/SpecialCoffee";
import OurStory from "@/components/OurStory";
import TopCategories from "@/components/TopCategories";
import FoodMenu from "@/components/FoodMenu";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import DrinkCustomizer from "@/components/DrinkCustomizer";
import VisitInfo from "@/components/VisitInfo";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ToastContainer from "@/components/ToastContainer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useSmoothScroll();

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Loader onComplete={handleLoadComplete} />

      {isLoaded && (
        <main>
          <Header />
          <Hero />
          <SpecialCoffee />
          <OurStory />
          <TopCategories />
          <FoodMenu />
          <Testimonials />
          <InstagramGallery />
          <DrinkCustomizer />
          <VisitInfo />
          <Footer />
          <CartDrawer />
          <ToastContainer />
        </main>
      )}
    </>
  );
}
