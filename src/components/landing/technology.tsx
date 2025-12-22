import Image from "next/image"

const TechStack = ({ data }: { data: any }) => {

  if (!data) return null

  return (
    <section className="py-12 md:py-[120px] bg-white">
      {/* Heading */}
      <h2 className="text-2xl sm:text-5xl !font-bold text-center mb-8 md:mb-16 arial-font">
        {data.heading}
      </h2>

      {/* Logos (STATIC — no animation) */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {data.logos.map((logo: any) => (
            <div key={logo.id} className="flex items-center justify-center">
              <Image
                src={logo.url}
                alt={logo.alternativeText || "Technology"}
                width={60}
                height={60}
                className="max-w-11 max-h-11  object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
