"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { LeadFunnel } from "@/components/sections/LeadFunnel";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaFooter } from "@/components/sections/CtaFooter";

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
      <TrustBadges />
      <ServiceGrid />
      <HowItWorks />
      <Testimonials />
      <CtaFooter />
    </>
  );
}

