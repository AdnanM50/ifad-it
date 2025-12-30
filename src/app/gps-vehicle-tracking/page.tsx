// import { getServicePage } from "@/lib/serviceAPI"

// import ServiceHero from "./_components/serviceHerosection"
import MeetITracker from "./_components/meetITracker"
import WhyITracker from "./_components/whyITracker"
import VehicleTypes from "./_components/vehicleTypes"
import WhyWeRecommend from "./_components/whyWeRecommend"
import ServiceFAQSection from "./_components/servicefaq"
import ServiceCTA from "./_components/ctaService"
import { getServicePage } from "@/lib/api/service/servicegps"
import ServiceHero from "./_components/serviceHerosection"

export default async function Page() {
  const page = await getServicePage("gps-vehicle-tracking")
  if (!page) return null

  const blocks = page.blocks || []

  const heroData = blocks.find(
    (b: any) => b.__component === "blocks.cta-section"
  )

  const meetData = blocks.find(
    (b: any) => b.__component === "blocks.policy-block" && b.Title === "Meet iTracker"
  )

  const meetLink = blocks.find(
    (b: any) => b.__component === "elements.link" && b.text === "Explore iTracker Solutions"
  )

  const cardData = blocks.find(
    (b: any) => b.__component === "blocks.card-section"
  )

  const whyITrackerData = blocks.find(
    (b: any) =>
      b.__component === "blocks.our-values-section" &&
      b.title === "Why iTracker Stands Out"
  )

  const vehicleTypesData = blocks.find(
    (b: any) =>
      b.__component === "blocks.our-values-section" &&
      b.title === "Versatile Solutions"
  )

  const recommendData = blocks.find(
    (b: any) => b.__component === "blocks.policy-block" && b.Title === "Why We Recommend iTracker"
  )

  const recommendLink = blocks.find(
    (b: any) => b.__component === "elements.link" && b.text === "Price Inquiry"
  )

  const faqData = blocks.find(
    (b: any) => b.__component === "blocks.faq-section"
  )

  const bottomCTA = blocks
    .filter((b: any) => b.__component === "blocks.cta-section")
    .at(-1)

  return (
    <div className="mt-[85px] lg:mt-[100px]">
      {heroData && <ServiceHero data={heroData} />}

      {meetData && (
        <MeetITracker data={meetData} link={meetLink} cardData={cardData} />
      )}

      {whyITrackerData && <WhyITracker data={whyITrackerData} />}

      {vehicleTypesData && <VehicleTypes data={vehicleTypesData} />}

      {recommendData && (
        <WhyWeRecommend data={recommendData} link={recommendLink} />
      )}

      {faqData && <ServiceFAQSection data={faqData} />}

      {bottomCTA && <ServiceCTA data={bottomCTA} />}
    </div>
  )
}
