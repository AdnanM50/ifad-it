'use client'

import Image from 'next/image'

interface ValueItem {
  id: number
  title: string
  description: string
  icon: {
    url: string
    alternativeText?: string | null
  }
}

interface ItProgramProps {
  data: {
    title: string
    headline: string
    subTitle: string
    values: ValueItem[]
  }
}

const ItProgram = ({ data }: ItProgramProps) => {
  if (!data) return null

  return (
    <section className="bg-white py-16 lg:py-[120px]">
      <div className="container">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {/* Small top label */}
          <p className="text-sm font-inter font-medium uppercase tracking-wide text-[#F36A10]">
            {data.title}
          </p>

          {/* Main heading */}
          <h2 className="mt-3 text-3xl font-inter font-bold text-[#0F172A] sm:text-4xl">
            {data.headline}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base font-inter text-[#64748B] ">
            {data.subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.values.map((item) => (
            <div
              key={item.id}
              className="rounded-[16px] border border-[#EEF2F6] bg-white p-6 shadow-sm"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4EC]">
                <Image
                  src={item.icon.url}
                  alt={item.icon.alternativeText || item.title}
                  width={24}
                  height={24}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-inter font-semibold text-[#0F172A]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm font-inter text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ItProgram
