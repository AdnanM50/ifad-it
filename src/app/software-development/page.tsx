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

export default async function Page() {
  const page = await getServiceSoftwarePage("software-development");
  if (!page) return null;

  const blocks = page.blocks || [];

  const heroData = blocks.find(
    (b: any) => b.__component === "blocks.cta-section"
  );

  const whySDTrackerData = blocks.find(
    (b: any) => b.__component === "blocks.our-values-section" && b.id === 70
  );

  const ourProcess = blocks.find(
    (b: any) => b.__component === "blocks.our-values-section" && b.id === 71
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
      {whySDTrackerData && <WhySDTracker data={whySDTrackerData} />}
      <OurProcess data={ourProcess} />
      {/* <IndustriesSection /> */}
      {developmentApproach && <TechnologyStack logos={logos} data={developmentApproach} /> }
      {whySDChooseIFAD && <WhySDChooseIFAD data={whySDChooseIFAD} />}
      {faqData && <ServiceSFFAQSection data={faqData} />}
      {bottomCTA && <ServiceSFCTA data={bottomCTA} />}
    </div>
  );
}
