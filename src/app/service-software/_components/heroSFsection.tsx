'use client'

import PrimaryButton from "@/components/common/primary-button"

const ServiceSFHero = ({ data }: { data: any }) => {
  console.log("🚀 ~ ServiceMSIHero ~ data:", data)
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ECF8FE] via-[#F7FBFF] to-[#FFF6EC]">
      {/* LEFT BLUR CIRCLE */}
      <div className="pointer-events-none absolute  -left-20 top-[180px] h-[233px] w-[250px] rounded-full bg-[#94A492] blur-[300px]" />

      {/* RIGHT BLUR CIRCLE */}
      <div className="pointer-events-none absolute -right-20 top-[220px] h-[233px] w-[250px] rounded-full bg-[#F36A10] blur-[250px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-26 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1046px]  text-center">
          {/* HEADING */}
          <h1 className="text-3xl font-extrabold arial-font tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl xl:text-[72px]">
           Turn Data Into Decisions 
            <span className="mt-2 block text-[#F36A10]">
             That Drive Growth
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed font-inter font-normal text-[#6F7377] ">
           Real-time analytics. Custom dashboards. Smarter business intelligence 
for Bangladesh's forward-thinking companies.
          </p>

          <div className="mt-10 mx-auto flex justify-center items-center">
            <PrimaryButton children="Schedule a Meeting" className="w-fit " onClick={() => {}} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServiceSFHero

