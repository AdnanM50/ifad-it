import Link from "next/link"
import Image from "next/image"
import PrimaryButton from "../common/primary-button"

type HeroSectionProps = {
  data: {
    heading: string
    subTitle: string
    media?: {
      url: string
      alternativeText?: string | null
    }
    cta?: {
      text: string
      href: string
      isExternal: boolean
    }
  }
}

export function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null

  return (
    <section className="relative w-full h-[600px] md:h-[815px] pt-20 overflow-hidden">
      {/* LCP IMAGE FIX */}
      <div className="absolute inset-0">
        <Image
          src={data.media?.url || ""}
          alt={data.media?.alternativeText || "Hero background"}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl arial-font lg:text-6xl font-bold text-white mb-4 max-w-4xl text-balance">
          {data.heading}
        </h1>

        <p className="text-xl md:text-2xl text-white/90 !font-inter mb-8 max-w-2xl">
          {data.subTitle}
        </p>

        {data.cta?.href && (
          <Link
            href={data.cta.href}
            target={data.cta.isExternal ? "_blank" : "_self"}
          >
            <PrimaryButton>
              {data.cta.text}
            </PrimaryButton>
          </Link>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-[30px] h-[50px] border-2 border-white rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce mt-2"
            width="15"
            height="21"
            viewBox="0 0 15 21"
            fill="none"
          >
            <path d="M7.27 20.84V0.7" stroke="white" strokeWidth="2" />
            <path d="M1 14l6 6 6-6" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  )
}
