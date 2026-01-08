import ServiceMSIHero from "./_components/msiHerosection"
import MeetMSITracker from "./_components/meetmsiTracker"
import WhyMSITracker from "./_components/whymsiTracker"
import IndustriesSection from "./_components/industriesSection"
import WhyMSIChooseIFAD from "./_components/whymsiChooseIFAD"
import ServiceMSIFAQSection from "./_components/servicemsifaq"
import ServiceMSICTA from "./_components/ctamsiService"

import { getServiceMSIPage } from "@/lib/api/service/servicemsi"

/**
 * ✅ SERVER COMPONENT (SSR)
 */
export default async function Page() {
  const page = await getServiceMSIPage("mis-and-bi-solutions")

  if (!page) return null

  const blocks = page.blocks || []

  const heroData = blocks.find(
    (b: any) =>
      b.__component === "blocks.cta-section" 
  )

  // const meetData = blocks.find(
  //   (b: any) =>
  //     b.__component === "blocks.policy-block" &&
  //     b.SubTitle === "The Challenge"
  // )
  const meetData = blocks[1]

  const meetCards = blocks.find(
    (b: any) => b.__component === "blocks.card-section"
  )

  const servicesData = blocks[3]
  // const servicesData = blocks.find(
  //   (b: any) =>
  //     b.__component === "blocks.our-values-section" &&
  //     b.title === "Our Services"
  // )

  // 🔹 Industries (Policy + Image Cards)
  const industriesPolicy = blocks[4]

  // const industriesPolicy = blocks.find(
  //   (b: any) =>
  //     b.__component === "blocks.policy-block" &&
  //     b.SubTitle === "Industries"
  // )

  const industriesCards = blocks.find(
    (b: any) => b.__component === "blocks.image-card-block"
  )

  // 🔹 Why Choose IFAD (Policy + Text Cards)
  const whyChoosePolicy = blocks[6]
  // const whyChoosePolicy = blocks.find(
  //   (b: any) =>
  //     b.__component === "blocks.policy-block" &&
  //     b.SubTitle === "Why Us"
  // )

  const whyChooseCards = blocks.find(
    (b: any) => b.__component === "blocks.text-cards"
  )

  // 🔹 FAQ
  const faqData = blocks.find(
    (b: any) => b.__component === "blocks.faq-section"
  )

  // 🔹 Bottom CTA (LAST)
  const bottomCTA = blocks
    .filter((b: any) => b.__component === "blocks.cta-section")
    .at(-1)


  return (
    <div className="mt-[85px] lg:mt-[100px]">
      {heroData && <ServiceMSIHero data={heroData} />}

      {meetData && (
        <MeetMSITracker
          data={meetData}
          cards={meetCards}
        />
      )}

      {servicesData && <WhyMSITracker data={servicesData} />}

      {industriesPolicy && industriesCards && (
        <IndustriesSection
          policy={industriesPolicy}
          cards={industriesCards}
        />
      )}

      {whyChoosePolicy && whyChooseCards && (
        <WhyMSIChooseIFAD
          policy={whyChoosePolicy}
          cards={whyChooseCards}
        />
      )}

      {faqData && <ServiceMSIFAQSection data={faqData} />}

      {bottomCTA && <ServiceMSICTA data={bottomCTA} />}
    </div>
  )
}
