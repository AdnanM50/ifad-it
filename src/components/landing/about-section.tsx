import Image from "next/image"
import CountingAnimation from "../common/CountingAnimation"
import Link from "next/link"

type AboutSectionProps = {
  data: {
    experience: string
    subHeading: string
    heading: string
    content: string
    image?: {
      url: string
      alternativeText?: string | null
    }
    aboutCTA?: {
      text: string
      href: string
      isExternal: boolean
    }
  }
}

const AboutSection = ({ data }: AboutSectionProps) => {
  if (!data) return null

  const contentParts = data.content.split("\n\n")

  const description1 = contentParts[0]
  const description2 = contentParts[1]

  const bulletPoints =
    contentParts
      .find((p) => p.startsWith("We help you"))
      ?.split("\n")
      .filter((line) => line.startsWith("-"))
      .map((line) => line.replace("- ", "")) || []

  return (
    <div className="bg-[#FCFCFD] py-12 md:py-[120px] px-2 lg:px-0">
      <div className="container px-2 sm:px-0 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Image & Badge */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute md:flex hidden -top-16 left-0 z-30">
            <div className="bg-orange-500 text-white rounded-full w-20 h-20 sm:w-40 sm:h-40 border-4 border-white flex flex-col items-center justify-center text-center font-bold">
              <span className="text-[40px] arial-font">
                {data.experience.split(" ")[0]}
              </span>
              <span className="text-lg font-inter">
                Years of Experience
              </span>
            </div>
          </div>

          <div className="relative rounded-lg">
            <Image
              src={data.image?.url || "/about.png"}
              alt={data.image?.alternativeText || "About Image"}
              width={1000}
              height={1000}
              className="w-full h-auto xl:w-[578px] xl:h-[611px] mx-auto object-cover rounded-[24px] relative z-20"
            />

            <div className="absolute md:flex hidden -bottom-6 right-6 z-10">
              <Image
                src="/obj.png"
                alt="Decorative Shape"
                width={150}
                height={150}
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="section-title">
            {data.subHeading}
          </h3>

          <h2 className="section-subtitle mt-6 mb-5">
            {data.heading}
          </h2>

          <p className="section-description mb-3">
            {description1}
          </p>

          <p className="section-description">
            {description2}
          </p>

          {bulletPoints.length > 0 && (
            <div className="mt-7">
              <h4 className="font-semibold text-[#1A1A1A] text-lg font-inter mb-3">
                We help you:
              </h4>

              <ul className="space-y-3">
                {bulletPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#F36A10] mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <path
                          d="M14 2.33325C7.57171 2.33325 2.33337 7.57159 2.33337 13.9999C2.33337 20.4283 7.57171 25.6666 14 25.6666C20.4284 25.6666 25.6667 20.4283 25.6667 13.9999C25.6667 7.57159 20.4284 2.33325 14 2.33325ZM19.5767 11.3166L12.9617 17.9316C12.7984 18.0949 12.5767 18.1883 12.3434 18.1883C12.11 18.1883 11.8884 18.0949 11.725 17.9316L8.42337 14.6299C8.08504 14.2916 8.08504 13.7316 8.42337 13.3933C8.76171 13.0549 9.32171 13.0549 9.66004 13.3933L12.3434 16.0766L18.34 10.0799C18.6784 9.74159 19.2384 9.74159 19.5767 10.0799C19.915 10.4183 19.915 10.9666 19.5767 11.3166Z"
                          fill="#F36A10"
                        />
                      </svg>
                    </span>
                    <span className="text-[#1A1A1A] text-lg font-inter">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.aboutCTA?.href && (
            <Link
              href={data.aboutCTA.href}
              target={data.aboutCTA.isExternal ? "_blank" : "_self"}
            >
              <button className="mt-6 bg-[#F36A10] text-xl hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                {data.aboutCTA.text}
              </button>
            </Link>
          )}
        </div>
      </div>

      <CountingAnimation />
    </div>
  )
}

export default AboutSection
