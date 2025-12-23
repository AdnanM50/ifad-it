import Image from "next/image"
import CountingAnimation from "../common/CountingAnimation"
import Link from "next/link"

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="mt-1 flex-shrink-0"
  >
    <path
      d="M11.6667 0C5.23833 0 0 5.23833 0 11.6667C0 18.095 5.23833 23.3333 11.6667 23.3333C18.095 23.3333 23.3333 18.095 23.3333 11.6667C23.3333 5.23833 18.095 0 11.6667 0ZM17.2433 8.98333L10.6283 15.5983C10.465 15.7617 10.2433 15.855 10.01 15.855C9.77667 15.855 9.555 15.7617 9.39167 15.5983L6.09 12.2967C5.75167 11.9583 5.75167 11.3983 6.09 11.06C6.42833 10.7217 6.98833 10.7217 7.32667 11.06L10.01 13.7433L16.0067 7.74667C16.345 7.40833 16.905 7.40833 17.2433 7.74667C17.5817 8.085 17.5817 8.63333 17.2433 8.98333Z"
      fill="#F36A10"
    />
  </svg>
)

const AboutSection = ({
  data,
  stats,
}: {
  data: any
  stats?: any
}) => {
  if (!data) return null

  const lines = data.content?.split("\n").filter(Boolean) || []

  const bulletLines = lines.filter((l: string) => l.trim().startsWith("-"))
  const normalLines = lines.filter((l: string) => !l.trim().startsWith("-"))

  return (
    <div className="bg-[#FCFCFD] py-12 md:py-[120px] px-2 lg:px-0">
      <div className="container px-2 sm:px-0 flex flex-col lg:flex-row gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute md:flex hidden -top-16 left-0 z-30">
            <div className="bg-orange-500 text-white rounded-full w-20 h-20 sm:w-40 sm:h-40 border-4 border-white flex flex-col items-center justify-center text-center font-bold">
              <span className="text-[40px] arial-font">
                {data.experience?.match(/\d+/)?.[0] || "10"}+
              </span>
              <span className="text-lg font-inter">
                Years of Experience
              </span>
            </div>
          </div>

          <div className="relative rounded-lg">
            <Image
              src={data.image?.url}
              alt={data.image?.alternativeText || "About IFAD IT"}
              width={578}
              height={611}
              className="w-full h-auto xl:w-[578px] xl:h-[611px] mx-auto object-cover relative z-20"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h3 className="section-title">
            {data.subHeading}
          </h3>

          <h2 className="section-subtitle mt-6 mb-5">
            {data.heading}
          </h2>

          {/* Normal paragraphs */}
          {normalLines.map((line: string, i: number) => (
            <p key={i} className="section-description mb-3 ">
              {line}
            </p>
          ))}

          {/* SVG bullet list */}
          {bulletLines.length > 0 && (
            <ul className="space-y-3 mt-4">
              {bulletLines.map((line: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <CheckIcon />
                  <span className="section-description !text-[#1A1A1A]">
                    {line.replace(/^-/, "").trim()}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {data.aboutCTA?.href && (
            <Link href={data.aboutCTA.href}>
              <button className="mt-6 bg-[#F36A10] text-xl hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition">
                {data.aboutCTA.text}
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* STATS (unchanged) */}
      <CountingAnimation data={stats} />
    </div>
  )
}

export default AboutSection
