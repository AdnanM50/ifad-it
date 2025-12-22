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
  // console.log("🚀 ~ HomePage ~ data:", data)

  // 🔹 Extract blocks manually
  const heroData = data.blocks.find(
    (b: any) => b.__component === "blocks.hero-section"
  )

  const trustedData = data.blocks.find(
    (b: any) =>
      b.__component === "blocks.slider-block" &&
      b.heading === "Trusted by 100+ Companies"
  )

  const aboutData = data.blocks.find(
    (b: any) => b.__component === "blocks.about-section"
  )

  const serviceData = data.blocks.find(
    (b: any) => b.__component === "blocks.service-section"
  )

  const techStackData = data.blocks.find(
    (b: any) =>
      b.__component === "blocks.slider-block" &&
      b.heading === "Technology Stack"
  )

  const whyChooseData = data.blocks.find(
    (b: any) => b.__component === "blocks.why-choose-section"
  )

  const testimonialData = data.blocks.find(
    (b: any) => b.__component === "blocks.testimonial-section"
  )

  const faqData = data.blocks.find(
    (b: any) => b.__component === "blocks.faq-section"
  )

  const featuredData = data.blocks.find(
    (b: any) =>
      b.__component === "blocks.slider-block" &&
      b.heading === "Featured On"
  )

  return (
    <>
      {heroData && <HeroSection data={heroData} />}

      {trustedData && <TustedSection data={trustedData} />}

      {aboutData && <AboutSection data={aboutData} />}

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
