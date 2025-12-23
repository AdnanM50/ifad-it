import React from "react"

const AboutHero = ({ data }: { data: any }) => {
  if (!data) return null

  return (
    <section
      className="relative w-full mt-20 lg:h-[544px] h-[444px] "
      style={{
        // ONLY override the image, keep gradient from CSS
        backgroundImage: data.image?.url
          ? `linear-gradient(
              0deg,
              rgba(5, 1, 0, 0.60) 0%,
              rgba(5, 1, 0, 0.60) 100%
            ), url(${data.image.url})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white">
        <h2 className="text-4xl md:text-5xl lg:text-[72px] arial-font font-bold mb-4 sm:mb-6">
          {data.title}
        </h2>

        <p className="text-center max-w-[706px] text-base md:text-lg font-inter whitespace-pre-line">
          {data.subTitle}
        </p>
      </div>
    </section>
  )
}

export default AboutHero
