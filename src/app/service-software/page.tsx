import ServiceSFHero from './_components/heroSFsection'
import ServiceSFFAQSection from './_components/serviceSFfaq'
import ServiceSFCTA from './_components/ctaSFService'
import { getServiceSoftwarePage } from '@/lib/serviceSd'


export default async function Page() {
  const page = await getServiceSoftwarePage('software-development')
  if (!page) return null

  const blocks = page.blocks || []

  const heroData = blocks.find(
    (b: any) => b.__component === 'blocks.cta-section'
  )

  const faqData = blocks.find(
    (b: any) => b.__component === 'blocks.faq-section'
  )

  const bottomCTA = blocks
    .filter((b: any) => b.__component === 'blocks.cta-section')
    .at(-1)

  // 🔹 RENDER
  return (
    <div className="mt-[85px] lg:mt-[100px]">
      {heroData && <ServiceSFHero data={heroData} />}

      {faqData && <ServiceSFFAQSection data={faqData} />}

      {bottomCTA && <ServiceSFCTA data={bottomCTA} />}
    </div>
  )
}
