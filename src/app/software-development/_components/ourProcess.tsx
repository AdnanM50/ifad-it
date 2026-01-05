'use client'

import Image from 'next/image'

export default function OurProcess({ data }: any) {
  if (!data) return null

  return (
    <section className="relative bg-white py-16 sm:py-[120px]">
      <div className="mx-auto max-w-[996px] xl:px-0 px-4">

        <div className="mb-14 text-center">
          <p className="section-title capitalize!">
            {data.title}
          </p>

          <h2 className="mt-2 section-subtitle">
            {data.headline}
          </h2>

          <p className="mt-4 mx-auto max-w-2xl section-description ">
            {data.subTitle}
          </p>
        </div>

        <div className="relative">

          <div className="absolute left-8 top-6 bottom-20 hidden w-px border-l border-dashed border-orange-200 sm:block" />

          <div className="space-y-6">
            {data.values?.map((item: any, index: number) => (
              <div
                key={item.id}
                className="relative flex items-start gap-2.5 sm:gap-5"
              >
                {/* Icon */}
                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FFFAF5] text-[#F36A10] md:size-16 xl:mr-6 mr-0">
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alternativeText || item.title}
                    width={22}
                    height={22}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-gray-100 bg-white px-3 py-3 font-inter sm:px-6 sm:py-8">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-[#F36A10] sm:text-2xl">
                      {(index + 1).toString().padStart(2, '0')}.
                    </span>

                    <h3 className="text-lg font-semibold text-[#1A1A1A] sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#6F7377] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
