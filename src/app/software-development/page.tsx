import ServiceSFHero from "./_components/heroSFsection";
import ServiceSFFAQSection from "./_components/serviceSFfaq";
import ServiceSFCTA from "./_components/ctaSFService";
import { getServiceSoftwarePage } from "@/lib/api/service/serviceSd";
import WhySDChooseIFAD from "./_components/whySdChooseIFAD";
import WhySDTracker from "./_components/whySDTracker";
// import DevelopmentApproach from "./_components/ourProcess";
import OurProcess from "./_components/ourProcess";
import DevelopmentApproach from "./_components/developApproce";
import TechnologyStack from "./_components/developApproce";
import IndustriesSection from "./_components/industriesSection";
import MeetSDTracker from "./_components/meetSFTracker";

export default async function Page() {
  const page = await getServiceSoftwarePage("software-development");
  if (!page) return null;

  const blocks = page.blocks || [];

  const heroData = blocks.find(
    (b: any) => b.__component === "blocks.cta-section"
  );

  const meetData = blocks.find(
    (b: any) => b.__component === "blocks.policy-block" && b.id === 66
  )

  const cardData = blocks.find(
    (b: any) => b.__component === "blocks.card-section" && b.id === 36
  );

  const whySDTrackerData = blocks.find(
    (b: any) => b.__component === "blocks.our-values-section" && b.id === 70
  );

  const ourProcess = blocks.find(
    (b: any) => b.__component === "blocks.our-values-section" && b.id === 71
  );
  const industries = blocks.find(
    (b: any) => b.__component === "blocks.policy-block" && b.id === 67
  );
  const cardpolicy = blocks.find(
    (b: any) => b.__component === "blocks.image-card-block" && b.id === 14
  );
  const developmentApproach = blocks.find(
    (b: any) => b.__component === "blocks.our-values-section" && b.id === 72
  );
  const logos = blocks.find(
    (b: any) => b.__component === "blocks.slider-block" && b.id === 44
  );

  const whySDChooseIFAD = blocks.find(
    (b: any) => b.__component === "blocks.our-values-section" && b.id === 73
  );

  const faqData = blocks.find(
    (b: any) => b.__component === "blocks.faq-section"
  );

  const bottomCTA = blocks
    .filter((b: any) => b.__component === "blocks.cta-section")
    .at(-1);

  return (
    <div className="mt-[85px] lg:mt-[100px]">
      {heroData && <ServiceSFHero data={heroData} />}
      <MeetSDTracker data={meetData} cardData={cardData} />
      {whySDTrackerData && <WhySDTracker data={whySDTrackerData} />}
      {ourProcess && <OurProcess data={ourProcess} />}
      {industries && (
        <IndustriesSection policy={industries} cards={cardpolicy} />
      )}
      {developmentApproach && (
        <TechnologyStack logos={logos} data={developmentApproach} />
      )}
      {whySDChooseIFAD && <WhySDChooseIFAD data={whySDChooseIFAD} />}
      {faqData && <ServiceSFFAQSection data={faqData} />}
      {bottomCTA && <ServiceSFCTA data={bottomCTA} />}
    </div>
  );
}
