import { HeroSection } from "@/components/sections/HeroSection";
import { LeadFunnelWrapper } from "@/components/sections/LeadFunnelWrapper";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaFooter } from "@/components/sections/CtaFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LeadFunnelWrapper />
      <TrustBadges />
      <ServiceGrid />
      <HowItWorks />
      <Testimonials />
      <CtaFooter />
    </>
  );
}

