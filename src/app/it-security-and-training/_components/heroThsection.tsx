'use client'

import Link from 'next/link'
import PrimaryButton from '@/components/common/primary-button'

const ServiceISHero = ({ data }: { data: any }) => {
  if (!data) return null

  // 🔹 Split title into 2 lines automatically
  const titleWords = data.title?.split(' ')
  const firstLine = titleWords?.slice(0, Math.ceil(titleWords.length / 2)).join(' ')
  const secondLine = titleWords?.slice(Math.ceil(titleWords.length / 2)).join(' ')

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ECF8FE] via-[#F7FBFF] to-[#FFF6EC]">
      
      {/* LEFT BLUR */}
      <div className="pointer-events-none absolute -left-20 top-[180px] h-[233px] w-[250px] rounded-full bg-[#94A492] blur-[300px]" />

      {/* RIGHT BLUR */}
      <div className="pointer-events-none absolute -right-20 top-[220px] h-[233px] w-[250px] rounded-full bg-[#F36A10] blur-[250px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1046px] text-center">

          {/* 🔹 TITLE */}
          <h1 className="text-3xl font-extrabold arial-font tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl xl:text-[72px]">
            {firstLine}
            <span className="mt-2 block text-[#F36A10]">
              {secondLine}
            </span>
          </h1>

          {/* 🔹 SUBTITLE */}
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed font-inter font-normal text-[#6F7377] ">
            {data.subTitle}
          </p>

          {/* 🔹 CTA (EXACT PATTERN YOU REQUESTED) */}
          {data.cta?.href && (
            <div className="mt-10 mx-auto flex justify-center items-center">
              <Link href={data.cta.href}>
                <PrimaryButton className="w-fit">
                  {data.cta.text}
                </PrimaryButton>
              </Link>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default ServiceISHero
