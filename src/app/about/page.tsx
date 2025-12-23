import AboutHero from "./_components/aboutHero"
import PartStory from "./_components/partstory"
import CoreValuesSection from "./_components/valuesection"
import BoardMembers from "./_components/team"
import CTASection from "./_components/lowerSection"

import { getAboutPage } from "@/lib/aboutAPI"

export default async function About() {
  const page = await getAboutPage()
  if (!page) return null

  const blocks = page.blocks || []

  const heroData = blocks.find(
    (b: any) => b.__component === "blocks.page-hero-section"
  )

  const storyData = blocks.find(
    (b: any) => b.__component === "blocks.our-story-block"
  )

  const statsData = blocks.find(
    (b: any) => b.__component === "blocks.stats-block"
  )

  const missionVisionData = blocks.filter(
    (b: any) => b.__component === "blocks.mission-vision-block"
  )

  const valuesData = blocks.find(
    (b: any) => b.__component === "blocks.our-values-section"
  )

  const teamBlocks = blocks.filter(
    (b: any) => b.__component === "blocks.team-section"
  )

  const ctaData = blocks.find(
    (b: any) => b.__component === "blocks.cta-section"
  )

  return (
    <>
      {heroData && <AboutHero data={heroData} />}

      {storyData && (
        <PartStory
          data={storyData}
          statsData={statsData}
          missionVisionData={missionVisionData}
        />
      )}

      {valuesData && <CoreValuesSection data={valuesData} />}

      {teamBlocks.length > 0 && <BoardMembers data={teamBlocks} />}

      {ctaData && <CTASection data={ctaData} />}
    </>
  )
}
