import React from 'react'
import ServiceSFCTA from './_components/ctaSFService'
import ServiceSFFAQSection from './_components/serviceSFfaq'

const Page = () => {
  return (
    <div className='mt-[85px] lg:mt-[100px]'>
    <ServiceSFFAQSection />
    <ServiceSFCTA />
    </div>
  )
}

export default Page