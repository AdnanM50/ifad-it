'use client'

import Image from 'next/image'

export default function TechnologyStack({ data, logos }: any) {
  if (!data) return null

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1353px] xl:px-0 px-2">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            {/* Subtitle */}
            <p className="section-title capitalize!">
              {data.title}
            </p>

            {/* Title */}
            <h2 className="mt-2 section-subtitle max-w-[377px]">
              {data.headline}
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[606px] section-description ">
              {data.subTitle}
            </p>

            {/* Features (API-driven) */}
            <div className="mt-6 space-y-4">
              {data.values?.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3"
                >
                  {/* Icon */}
                 <div className="">
                   <div
                    className={`flex size-10 items-center justify-center rounded-[8px] ${
                      index === 0 ? 'bg-[#E8FDFB]' : 'bg-[#ECE8FD]'
                    }`}
                  >
                    <Image
                      src={item.icon.url}
                      alt={item.icon.alternativeText || item.title}
                      width={18}
                      height={18}
                    />
                  </div>
                 </div>

                  {/* Text */}
                  <div>
                    <p className="section-description font-semibold text-[#1A1A1A]!">
                      {item.title}
                    </p>
                    <p className="text-sm! mt-1.5 section-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl max-w-[683px] border border-[#F36A1033] bg-[#FBFAF9] py-12 px-8">
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              {logos?.logos?.map((logo: any) => (
                <div
                  key={logo.id}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={logo.url}
                    alt={logo.alternativeText || 'Technology Logo'}
                    width={64}
                    height={64}
                    className="size-16 object-contain sm:size-20"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
