"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b to-white from-gray-100 dark:to-black dark:from-gray-900 transition-colors duration-300 overflow-hidden">
      {/* 💫 Aesthetic blurred patches */}
      {/* Top Left */}
      <div className="absolute top-10 left-[-60px] w-80 h-80 rounded-full blur-[100px] pointer-events-none z-0 bg-green-400/30 dark:bg-white/10" />

      {/* Bottom Right */}
      <div className="absolute bottom-[-50px] right-[-60px] w-96 h-96 rounded-full blur-[100px] pointer-events-none z-0 bg-green-400/30 dark:bg-white/10" />

      {/* Center Right */}
      <div className="absolute top-1/2 right-[20%] w-64 h-64 rounded-full blur-[100px] pointer-events-none z-0 bg-green-400/30 dark:bg-white/10" />

      {/* Bottom Left - New */}
      <div className="absolute bottom-[15%] left-[-40px] w-72 h-72 rounded-full blur-[100px] pointer-events-none z-0 bg-green-400/30 dark:bg-white/10" />

      {/* Top Right - New */}
      <div className="absolute top-96 right-[0%] w-64 h-64 rounded-full blur-[90px] pointer-events-none z-0 bg-green-400/30 dark:bg-white/10" />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <DemoSection />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
