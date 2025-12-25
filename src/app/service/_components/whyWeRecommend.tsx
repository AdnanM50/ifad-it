'use client'

import PrimaryButton from '@/components/common/primary-button'


const features = [
  'Military-grade security with 99.9% uptime',
  'Mobile apps for Android & iOS',
  'Comprehensive reporting and analytics',
  'Geofencing and route optimization',
  'Affordable pricing built for Bangladesh',
]

const WhyWeRecommend =({ data,link }: { data: any,link:any }) => {
  return (
    <section className="bg-[#FCFCFD] py-24 lg:py-[120px]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center">
          <p className="section-title capitalize!">
            IFAD IT LTD Recommends
          </p>

          <h2 className="mt-6 section-subtitle">
            Why We Recommend iTracker
          </h2>

          <p className="mx-auto mt-4 section-description">
            The smart, efficient, and reliable choice for modern vehicle
            management.
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="mt-14 rounded-xl max-w-[896px] border border-[#E5E7EB] bg-white p-6 drop-shadow-custom sm:p-8">
          <p className="text-base sm:text-xl font-inter! leading-relaxed text-[#6F7377] ">
            As IFAD Group&apos;s IT arm, we&apos;ve witnessed iTracker transform
            fleet operations for hundreds of businesses since 2015. The 
            platform combines cutting-edge GPS technology with practical,
            Bangladesh-focused features that deliver measurable results.
          </p>

          <p className="mt-6 text-base sm:text-lg font-semibold text-[#1A1A1A] font-inter!">
            Whether you&apos;re protecting a single vehicle or managing
            enterprise fleets, iTracker offers:
          </p>

          {/* FEATURES LIST */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-[#F36A1026] text-[#F3680C]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#F36A10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <p className="text-base font-inter! font-normal text-[#1A1A1A]!">{item}</p>
              </div>
            ))}
          </div>

          {/* QUOTE */}
          <div className="mt-8 border-l-4 border-[#F3680C] bg-[#FFF7EF] px-4 py-3">
            <p className="text-2xl font-semibold font-inter! text-[#1A1A1A]">
              &quot;This isn&apos;t just tracking. It&apos;s total fleet
              intelligence.&quot;
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center mx-auto flex justify-center">
            {/* <button className="rounded-md bg-[#F3680C] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#e05f0a]">
              Price Inquiry
            </button> */}
            <PrimaryButton>Price Inquiry</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWeRecommend