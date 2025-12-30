'use client'

import Image from 'next/image'
import React from 'react'


export default function WhyISChooseIFAD({ data }: any) {

  return (
    <section className="bg-white py-24 sm:py-[120px]">
      <div className="container xl:px-0 px-2">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="section-title capitalize!"> {data?.title}</p>

          <h2 className="mt-2 section-subtitle">
            {data?.headline}
          </h2>

          <p className="mx-auto mt-5 max-w-[709px] section-description">
            {data?.subTitle}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 gap-y-8 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.values?.map((item: any) => {
            // const [first, ...rest] = item.text.split(' ')

            return (
              <div
                key={item?.id}
                className="relative rounded-[16px] border border-[#FDE1CE] bg-white px-4 sm:px-6 py-5 sm:py-8"
              >
            
                <div className="mb-4 sm:mb-6 flex size-16 items-center justify-center rounded-full bg-[#FFFAF5]">
                  {item.icon?.url && (
                    <Image
                      src={item.icon.url}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="object-fill size-8"
                    />
                  )}
                </div>

                {/* TITLE */}
                <h3 className="text-lg lg:text-2xl font-semibold font-inter text-[#1A1A1A]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-base leading-relaxed text-[#6F7377] font-inter">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
