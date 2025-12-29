// src/app/service-it-security/page.tsx
import ServiceISHero from './_components/heroThsection'
import ServiceThFAQSection from './_components/serviceThfaq'
import ServiceThCTA from './_components/ctaThService'
import { getServiceITSecurityPage } from '@/lib/serviceIS'

export default async function Page() {
  const page = await getServiceITSecurityPage('it-security-and-training')
  if (!page) return null

  const blocks = page.blocks || []

  // ===== BLOCK EXTRACTION =====
  const heroData = blocks.find(
    (b: any) => b.__component === 'blocks.cta-section'
  )

  const faqData = blocks.find(
    (b: any) => b.__component === 'blocks.faq-section'
  )

  const bottomCTA = blocks
    .filter((b: any) => b.__component === 'blocks.cta-section')
    .at(-1)

  return (
    <div className="mt-[85px] lg:mt-[100px]">
      {heroData && <ServiceISHero data={heroData} />}

      {faqData && <ServiceThFAQSection data={faqData} />}

      {bottomCTA && <ServiceThCTA data={bottomCTA} />}
    </div>
  )
}
