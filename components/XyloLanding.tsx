"use client";

import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import ProcessSection from "@/components/sections/process-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import CtaBanner from "@/components/sections/cta-banner";

export default function XyloLanding() {
  useEffect(() => {
    const header = document.getElementById("header");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (header) {
          header.classList.add(
            "bg-black/80",
            "backdrop-blur",
            "border-b",
            "border-purple-900/20"
          );
        }
      } else {
        if (header) {
          header.classList.remove(
            "bg-black/80",
            "backdrop-blur",
            "border-b",
            "border-purple-900/20"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen items-center flex-col bg-black text-white">
      <Header />

      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
