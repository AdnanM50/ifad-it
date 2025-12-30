// src/app/service-it-security/page.tsx
import ServiceISHero from './_components/heroThsection'
import ServiceThFAQSection from './_components/serviceThfaq'
import ServiceThCTA from './_components/ctaThService'
import { getServiceITSecurityPage } from '@/lib/serviceIS'
import MeetISTracker from './_components/meetISTracker'
import WhyISTracker from './_components/whyISTracker'
import ItProgram from './_components/itProgram'
import ServeClient from './_components/serveclient'
import WhyISChooseIFAD from './_components/whyISChooseIFAD'

export default async function Page() {
  const page = await getServiceITSecurityPage('it-security-and-training')
  if (!page) return null

  const blocks = page.blocks || []

  // ===== BLOCK EXTRACTION =====
  const heroData = blocks.find(
    (b: any) => b.__component === 'blocks.cta-section'
  )
  const meetPolicy = blocks.find(
    (b: any) => b.__component === 'blocks.policy-block'
  )
  const meetCards = blocks.find(
    (b: any) => b.__component === 'blocks.card-section'
  )
  const securityData = blocks.find(
    (b: any) => b.__component === 'blocks.our-values-section'
  )
  const itTraningProgram = blocks.find(
    (b: any) => b.__component === 'blocks.our-values-section' && b.id === 75 
  )

  const serveClient = blocks.find(
    (b: any) => b.__component === 'blocks.our-values-section' && b.id === 76 
  )

  const whyISChooseIFAD = blocks.find(
    (b: any) => b.__component === 'blocks.our-values-section' && b.id === 77 
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
      <MeetISTracker data={meetPolicy} cards={meetCards} />
      {securityData && <WhyISTracker data={securityData} />}
      {itTraningProgram && <ItProgram data={itTraningProgram} />}
      {serveClient && <ServeClient data={serveClient} />}
      {whyISChooseIFAD && <WhyISChooseIFAD data={whyISChooseIFAD} />}
      {faqData && <ServiceThFAQSection data={faqData} />}
      {bottomCTA && <ServiceThCTA data={bottomCTA} />}
    </div>
  )
}
