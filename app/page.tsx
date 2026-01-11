"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { LeadFunnel } from "@/components/sections/LeadFunnel";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LeadFunnel
        onSubmit={(data) => {
          // Mock handler - log data for demo purposes
          console.log("Form submitted:", data);
          return new Promise((resolve) =>
            setTimeout(resolve, 1500)
          );
        }}
      />
      <HowItWorks />
    </>
  );
}

