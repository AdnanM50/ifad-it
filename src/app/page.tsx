import AboutSection from "@/components/landing/about-section"
import WhyChooseUs from "@/components/landing/choose-section"
import FAQSection from "@/components/landing/faqSection"
import FeaturedOn from "@/components/landing/featured"
import { HeroSection } from "@/components/landing/herosection"
import ServiceSection from "@/components/landing/service-section"
import TechStack from "@/components/landing/technology"
import TestimonialCarousel from "@/components/landing/testimonial"
import TustedSection from "@/components/landing/tusted-section"

import { getHomePage } from "@/lib/homeAPI"

export default async function HomePage() {
  const data = await getHomePage()
  if (!data) return null

  const blocks = data.blocks || []

  // ================= HERO =================
  const heroData = blocks.find(
    (b: any) => b.__component === "blocks.hero-section"
  )

  // ================= TRUSTED =================
  const trustedData = blocks.find(
    (b: any) =>
      b.__component === "blocks.slider-block" &&
      b.heading === "Trusted by 100+ Companies"
  )

  // ================= ABOUT + STATS =================
  const aboutData = blocks.find(
    (b: any) => b.__component === "blocks.about-section"
  )

  const statsData = blocks.find(
    (b: any) => b.__component === "blocks.stats-block"
  )

  // ================= SERVICES =================
  const serviceData = blocks.find(
    (b: any) => b.__component === "blocks.service-section"
  )

  // ================= TECH STACK =================
  const techStackData = blocks.find(
    (b: any) =>
      b.__component === "blocks.slider-block" &&
      b.heading === "Technology Stack"
  )

  // ================= WHY CHOOSE =================
  const whyChooseData = blocks.find(
    (b: any) => b.__component === "blocks.why-choose-section"
  )

  // ================= TESTIMONIAL =================
  const testimonialData = blocks.find(
    (b: any) => b.__component === "blocks.testimonial-section"
  )

  // ================= FAQ =================
  const faqData = blocks.find(
    (b: any) => b.__component === "blocks.faq-section"
  )

  // ================= FEATURED =================
  const featuredData = blocks.find(
    (b: any) =>
      b.__component === "blocks.slider-block" &&
      b.heading === "Featured On"
  )

  return (
    <>
      {heroData && <HeroSection data={heroData} />}

      {trustedData && <TustedSection data={trustedData} />}

      {/* 🔥 ABOUT + STATS (IMPORTANT FIX) */}
      {aboutData && (
        <AboutSection data={aboutData} stats={statsData} />
      )}

      {serviceData && <ServiceSection data={serviceData} />}

      {techStackData && <TechStack data={techStackData} />}

      {whyChooseData && <WhyChooseUs data={whyChooseData} />}

      {testimonialData && (
        <TestimonialCarousel data={testimonialData} />
      )}

      {faqData && <FAQSection data={faqData} />}

      {featuredData && <FeaturedOn data={featuredData} />}
    </>
  )
}
