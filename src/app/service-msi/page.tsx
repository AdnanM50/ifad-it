import React from 'react'
import ServiceMSIHero from './_components/msiHerosection'
import MeetMSITracker from './_components/meetmsiTracker'
import WhyMSITracker from './_components/whymsiTracker'
import IndustriesSection from './_components/industriesSection'
import ServiceMSICTA from './_components/ctamsiService'
import ServiceMSIFAQSection from './_components/servicemsifaq'


const Page = () => {
  return (
    <div className='mt-[85px] lg:mt-[100px]'>
        <ServiceMSIHero />
        <MeetMSITracker />
        <WhyMSITracker />
        {/* <IndustriesSection /> */}
        <ServiceMSIFAQSection />
        <ServiceMSICTA />
    </div>
  )
}

export default Page