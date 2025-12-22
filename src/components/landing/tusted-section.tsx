import Image from "next/image"

type TrustedSectionProps = {
  data: {
    heading: string
    logos: {
      id: number
      url: string
      alternativeText?: string | null
    }[]
  }
}

const TrustedSection = ({ data }: TrustedSectionProps) => {
  if (!data) return null

  const marqueeItems = [...data.logos, ...data.logos]

  return (
    <section className="py-12 md:py-[120px] bg-white">
      <h2 className="text-2xl sm:text-5xl !font-bold text-center mb-8 md:mb-16 arial-font">
        {data.heading}
      </h2>

      {/* Marquee Container */}
      <div className="bg-[#F36A10] py-8 overflow-hidden">
        <div className="flex items-center gap-6 sm:gap-12 whitespace-nowrap animate-marquee">
          {marqueeItems.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex items-center mx-4 sm:mx-8 min-w-max"
            >
              <Image
                src={logo.url}
                alt={logo.alternativeText || "Trusted Company"}
                width={150}
                height={40}
                className="w-[150px] h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedSection
