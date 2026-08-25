"use client";
import AboutSection from "@/components/sections/AboutSection";

import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import TechSection from "@/components/sections/TechSection";
import { Footer } from "@/components/Footer";
import AchievementMarquee from "@/components/AchievementMarquee";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <HeroSection />
      
      <AchievementMarquee />

      {/* ABOUT */}
      <AboutSection />

      {/* PROJECTS */}
      <FeaturesSection />

      {/* TECH */}
      <TechSection />
      
      <Footer />
    </main>
  );
}
