import AboutSection from "@/components/landing/about-section";
import WhyChooseUs from "@/components/landing/choose-section";
import FAQSection from "@/components/landing/faqSection";
import FeaturedOn from "@/components/landing/featured";
import { HeroSection } from "@/components/landing/herosection";
import ServiceSection from "@/components/landing/service-section";
import TechStack from "@/components/landing/technology";
import TestimonialCarousel from "@/components/landing/testimonial";
import TustedSection from "@/components/landing/tusted-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TustedSection />
      <AboutSection />
      <ServiceSection />
      <TechStack />
      <WhyChooseUs />
      <TestimonialCarousel />
      <FAQSection />
      <FeaturedOn />
    </>
  );
}
