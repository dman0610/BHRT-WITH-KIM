import HeroFlyer from "@/components/sections/HeroFlyer";
import MissionPillars from "@/components/sections/MissionPillars";
import SymptomBar from "@/components/sections/SymptomBar";
import ServicePreview from "@/components/sections/ServicePreview";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
import ScrollAnimator from "@/components/layout/ScrollAnimator";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <HeroFlyer />
      <MissionPillars />
      <SymptomBar />
      <ServicePreview />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
