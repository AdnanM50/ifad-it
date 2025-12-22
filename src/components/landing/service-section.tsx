

import Image from "next/image"
import Link from "next/link"

type ServiceSectionProps = {
  data: {
    title: string
    headline: string
    subTitle: string
    services: {
      id: number
      title: string
      description: string
      icon?: {
        url: string
        alternativeText?: string | null
      }
      cta?: {
        text: string
        href: string
        isExternal: boolean
      }
    }[]
  }
}

const ServiceSection = ({ data }: ServiceSectionProps) => {
  if (!data) return null

  return (
    <section className="relative xl:max-h-[897px] bg-[#141414] w-full py-6 sm:py-16 lg:py-[120px] px-2 xl:px-0">
      {/* Decorative Blurs */}
      <div className="absolute top-[677px] left-[49px] w-[151px] h-[151px] rounded-full z-50 bg-[#21EFF6] blur-[247px]" />
      <div className="absolute top-5 right-[49px] w-[177px] h-[177px] rounded-full z-50 bg-[#F36A10] blur-[350px]" />

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg text-[#F36A10] font-inter font-medium mb-2">
            {data.title}
          </h2>

          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold !arial-font text-white mb-4">
            {data.headline}
          </h1>

          <p className="text-white text-lg max-w-2xl font-inter mx-auto">
            {data.subTitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service) => (
            <div
              key={service.id}
              className="card-hover bg-[#141414] rounded-3xl px-4 md:px-6 py-4 md:py-8 border border-[#F36A10] transition-all duration-300"
            >
              {/* Icon */}
              {service.icon?.url && (
                <div className="mb-4">
                  <Image
                    src={service.icon.url}
                    alt={service.icon.alternativeText || service.title}
                    width={80}
                    height={80}
                  />
                </div>
              )}

              <h3 className="text-lg sm:text-xl xl:text-[28px] font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base font-inter text-gray-300 mb-4">
                {service.description}
              </p>

              {/* CTA */}
              {service.cta?.href && (
                <Link
                  href={service.cta.href}
                  target={service.cta.isExternal ? "_blank" : "_self"}
                  className="w-full"
                >
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-[8px] flex items-center justify-center space-x-2 transition-colors">
                    <span className="text-xl font-inter font-medium">
                      {service.cta.text}
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                    >
                      <path
                        d="M3.25 0.75L9.32106 0.750007C9.87335 0.750008 10.3211 1.19772 10.3211 1.75001L10.3211 7.82107"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0.75 10.25L9.25 1.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
