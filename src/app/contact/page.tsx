import ContactHero from "./_components/contactHero"
import ContactSection from "./_components/formsection"
import MapSection from "./_components/mapsection"

import { getContactPage } from "@/lib/api/contactAPI"

export default async function ContactPage() {
  const page = await getContactPage()

  if (!page) return null

  const blocks = page.blocks || []

  const heroData = blocks.find(
    (b: any) => b.__component === "blocks.page-hero-section"
  )

  const formData = blocks.find(
    (b: any) => b.__component === "blocks.form-block"
    
  )
  const contactinfo = blocks.find(
     (b: any) => b.__component === "blocks.contact-block"
  )

  const contactData = blocks.find(
    (b: any) => b.__component === "blocks.contact-block"
  )

  return (
    <>
      {heroData && <ContactHero data={heroData} />}
      {formData && <ContactSection data={formData} contactinfo={contactinfo} />}
      {contactData && <MapSection data={contactData} />}
    </>
  )
}