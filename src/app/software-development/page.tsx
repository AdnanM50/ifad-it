import ServiceSFHero from './_components/heroSFsection'
import ServiceSFFAQSection from './_components/serviceSFfaq'
import ServiceSFCTA from './_components/ctaSFService'
import { getServiceSoftwarePage } from '@/lib/api/service/serviceSd'
import WhySDChooseIFAD from './_components/whySdChooseIFAD'
import WhySDTracker from './_components/whySDTracker'


export default async function Page() {
  const page = await getServiceSoftwarePage('software-development')
  if (!page) return null

  const blocks = page.blocks || []

  const heroData = blocks.find(
    (b: any) => b.__component === 'blocks.cta-section'
  )

  const whySDTrackerData = blocks.find(
    (b: any) => b.__component === 'blocks.our-values-section' && b.id === 70
  )

  const whySDChooseIFAD = blocks.find(
    (b: any) => b.__component === 'blocks.our-values-section' && b.id === 73
  )


  const faqData = blocks.find(
    (b: any) => b.__component === 'blocks.faq-section'
  )

  const bottomCTA = blocks
    .filter((b: any) => b.__component === 'blocks.cta-section')
    .at(-1)

  return (
    <div className="mt-[85px] lg:mt-[100px]">
      {heroData && <ServiceSFHero data={heroData} />}
  {whySDTrackerData && <WhySDTracker data={whySDTrackerData} />}
      {whySDChooseIFAD && <WhySDChooseIFAD data={whySDChooseIFAD} />}
      {faqData && <ServiceSFFAQSection data={faqData} />}

      {bottomCTA && <ServiceSFCTA data={bottomCTA} />}
    </div>
  )
}
