'use client'

import PrimaryButton from "@/components/common/primary-button"
import Link from "next/link"

const ServiceHero = ({ data }: { data: any }) => {
  if (!data) return null

  const lines = data.subTitle?.split("\n").map((l: string) => l.trim()).filter(Boolean) || []

  const descriptionLines = lines.slice(0, lines.length - 3)
  const featureLines = lines.slice(-3)

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ECF8FE] via-[#F7FBFF] to-[#FFF6EC]">
      <div className="pointer-events-none absolute -left-20 top-[180px] h-[233px] w-[250px] rounded-full bg-[#94A492] blur-[300px]" />

      <div className="pointer-events-none absolute -right-20 top-[220px] h-[233px] w-[250px] rounded-full bg-[#F3680C] blur-[250px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-26 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1046px] text-center">

          {/* HEADING */}
          <h1 className="text-3xl font-extrabold arial-font tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl xl:text-[72px]">
            {data.title.split("GPS")[0]}
            <span className="mt-2 block text-[#F3680C]">
              GPS Vehicle Tracking Solution
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 text-sm sm:text-base lg:text-lg leading-relaxed font-inter font-normal text-[#6F7377]">
            {descriptionLines.map((line: string, i: number) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>

          {/* FEATURES */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-3 text-sm text-[#374151]">
            <Feature
              icon={locationIcon}
              text={featureLines[0]}
            />
            <Feature
              icon={graphIcon}
              text={featureLines[1]}
            />
            <Feature
              icon={shieldIcon}
              text={featureLines[2]}
            />
          </div>

          {/* CTA */}
          {data.cta?.href && (
            <div className="mt-10 mx-auto flex justify-center items-center">
              <Link href={data.cta.href}>
                <PrimaryButton className="w-fit">
                  {data.cta.text}
                </PrimaryButton>
              </Link>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default ServiceHero


function Feature({ text, icon }: { text: string; icon: any }) {
  return (
    <div className="flex items-center gap-2">
      <div>{icon}</div>
      <span className="text-lg font-medium font-inter text-[#1A1A1A]">
        {text}
      </span>
    </div>
  )
}

const locationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M0.75 8.40222C0.764407 4.16163 4.21376 0.735638 8.45435 0.750045C12.6949 0.764453 16.1209 4.21381 16.1065 8.45439V8.54135C16.0543 11.2979 14.5152 13.8457 12.6283 15.837C11.5491 16.9576 10.344 17.9497 9.03696 18.7935C8.68746 19.0958 8.16906 19.0958 7.81957 18.7935C5.87107 17.5253 4.16093 15.924 2.76739 14.0631C1.52535 12.4403 0.820165 10.4707 0.75 8.42831Z"
      stroke="#F36A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M8.42864 11.011C9.78774 11.011 10.8895 9.9092 10.8895 8.5501C10.8895 7.191 9.78774 6.08923 8.42864 6.08923C7.06954 6.08923 5.96777 7.191 5.96777 8.5501C5.96777 9.9092 7.06954 11.011 8.42864 11.011Z"
      stroke="#F36A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)

const graphIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path d="M22 17L13.5 8.5L8.5 13.5L2 7" stroke="#F36A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17H22V11" stroke="#F36A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const shieldIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path d="M10.49 2.23L5.5 4.11C4.35 4.54 3.41 5.9 3.41 7.12V14.55C3.41 15.73 4.19 17.28 5.14 17.99L9.44 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53 18.52 4.1L13.53 2.23"
      stroke="#F36A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <path d="M9.05 11.87L10.66 13.48L14.96 9.18"
      stroke="#F36A10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)
