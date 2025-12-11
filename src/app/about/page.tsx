import React from 'react'
import AboutHero from './_components/aboutHero'
// import StorySection from './_components/storySection'
import CoreValuesSection from './_components/valuesection'
import BoardMembers from './_components/team'


const About = () => {
  return (
  <>
  <AboutHero />
  {/* <StorySection /> */}
  <CoreValuesSection />
  <BoardMembers />
  </>
  )
}

export default About