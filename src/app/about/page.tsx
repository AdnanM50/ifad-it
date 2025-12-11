import React from 'react'
import AboutHero from './_components/aboutHero'
import CoreValuesSection from './_components/valuesection'
import BoardMembers from './_components/team'
import PartStory from './_components/partstory'
import CTASection from './_components/lowerSection'


const About = () => {
  return (
  <>
  <AboutHero />
  <PartStory />
  <CoreValuesSection />
  <BoardMembers />
  <CTASection />
  </>
  )
}

export default About