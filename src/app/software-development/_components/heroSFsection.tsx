'use client'

import PrimaryButton from "@/components/common/primary-button"
import Link from "next/link"

const ServiceSFHero = ({ data }: { data: any }) => {

  if (!data) return null

  const { title, subTitle, cta } = data

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ECF8FE] via-[#F7FBFF] to-[#FFF6EC]">

      <div className="pointer-events-none absolute -left-20 top-[180px] h-[233px] w-[250px] rounded-full bg-[#94A492] blur-[300px]" />

      <div className="pointer-events-none absolute -right-20 top-[220px] h-[233px] w-[250px] rounded-full bg-[#F36A10] blur-[250px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-26 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1046px] text-center">
          {/* HEADING */}
         <h1 className="arial-font font-extrabold text-[#1A1A1A] 
               text-3xl sm:text-4xl md:text-5xl xl:text-[72px]
               max-w-[800px] mx-auto leading-tight">
  <span className="">
    {title?.split(' ').slice(0, -3).join(' ')}
  </span>

  <span className=" text-[#F36A10] mt-2 max-w-[760px]">
    {title?.split(' ').slice(-3).join(' ')}
  </span>
</h1>


          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed font-inter font-normal text-[#6F7377] whitespace-pre-line">
            {subTitle}
          </p>

          {/* CTA BUTTON */}
          <div className="mt-10 mx-auto flex justify-center items-center">
           {data.cta?.href && (
            <div className="mt-10 flex justify-center">
              <Link href={data.cta.href}>
                <PrimaryButton className="w-fit">
                  {data.cta.text}
                </PrimaryButton>
              </Link>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSFHero
