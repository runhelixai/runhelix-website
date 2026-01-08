'use client'
import React, { useEffect } from "react";
import Herobanner from "./herobanner";
import SimplePricing from "./simplePricing";
import CreatorsLove from "./creatorsLove";
import ProductDataTable from "./productDataTable";
import IndustriesServiced from "./industriesServiced";
import AiGeneratedProduct from "./aiGeneratedProduct";
import GalleryView from "./galleryView";
import VideoGenerated from "./videoGenerated";
import Prompttooutput from "./PromptToOutput";
import Ugcads from "./ugcads";
import Helixblogs from "./helixblogs";
import AiUgc from "./aiUgc";

export default function HomePage() {
  useEffect(() => {
    // Ensure the page always starts at the top on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      const lenis = window.lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: false });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Scroll to top immediately and check again after a short delay
    scrollToTop();
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
      <Herobanner />
      <AiGeneratedProduct />
      <IndustriesServiced />
      <Prompttooutput />
      <GalleryView />
      <AiUgc />
      <VideoGenerated />

      {/* <ProductDataTable /> */}
      {/* <CreatorsLove /> */}
      {/* <Ugcads /> */}
      <SimplePricing />
      {/* <Helixblogs /> */}
    </div>
  );
}
