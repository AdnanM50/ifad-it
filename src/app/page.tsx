import AboutSection from "@/components/landing/about-section";
import { HeroSection } from "@/components/landing/herosection";
import ServiceSection from "@/components/landing/service-section";
import TustedSection from "@/components/landing/tusted-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TustedSection />
      <AboutSection />
      <ServiceSection />
    </>
  );
}
