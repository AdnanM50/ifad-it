'use client'

import Image from 'next/image'

export default function ServeClient({ data }: { data: any }) {
  if (!data) return null

  return (
    <section className="bg-[#FCFCFD] py-24 lg:py-[120px]">
      <div className="container xl:px-0 px-2">
        {/* HEADER */}
        <div className="text-center">
          <p className="section-title capitalize!">
            {data.title}
          </p>

          <h2 className="mt-3 section-subtitle ">
            {data.headline}
          </h2>

          <p className="mt-4 section-description max-w-[627px] mx-auto">
            {data.subTitle}
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data.values?.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-xl border border-[#E5E7EB] bg-white px-6 py-8 text-center"
            >
              {/* ICON */}
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#FFFAF5]">
                <Image
                  src={item.icon?.url}
                  alt={item.icon?.alternativeText || item.title}
                  width={1000}
                  height={1000}
                  className='size-8'
                />
              </div>

              {/* TITLE */}
              <h3 className="sm:text-xl textbase font-inter font-semibold text-[#1A1A1A]">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-xs sm:text-base font-inter leading-relaxed text-[#6B7280] whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
