'use client'

import PrimaryButton from '@/components/common/primary-button'
import Link from 'next/link'

const WhyWeRecommend = ({ data, link }: { data: any; link: any }) => {
  if (!data) return null

  // Split content into paragraphs
  const contentLines = data.content
    ?.split('\n')
    .map((line: string) => line.trim())
    .filter(Boolean)

  // Extract feature list (lines starting with "-")
  const features = contentLines
    .filter((line: string) => line.startsWith('-'))
    .map((line: string) => line.replace(/^-\s*/, ''))

  // Extract quote (line wrapped in quotes)
  const quote = contentLines.find((line: string) =>
    line.startsWith('"') || line.startsWith('“')
  )

  // Main description (before feature list)
  const description = contentLines.filter(
    (line: string) => !line.startsWith('-') && line !== quote
  )

  return (
    <section className="bg-[#FCFCFD] py-24 lg:py-[120px]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">
          <p className="section-title capitalize!">
            {data.SubTitle}
          </p>

          <h2 className="mt-6 section-subtitle">
            {data.Title}
          </h2>

          <p className="mx-auto mt-4 section-description">
            {description[0]}
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="mt-14 rounded-xl max-w-[896px] border border-[#E5E7EB] bg-white p-6 drop-shadow-custom sm:p-8">

          {description.slice(1).map((text: string, idx: number) => (
            <p
              key={idx}
              className="text-base sm:text-xl font-inter! leading-relaxed text-[#6F7377] mt-6"
            >
              {text}
            </p>
          ))}

          {/* FEATURES LIST */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-[#F36A1026] text-[#F3680C]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.3337 4L6.00033 11.3333L2.66699 8"
                      stroke="#F36A10"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-base font-inter! font-normal text-[#1A1A1A]!">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* QUOTE */}
          {quote && (
            <div className="mt-8 border-l-4 border-[#F3680C] bg-[#FFF7EF] px-4 py-3">
              <p className="text-2xl font-semibold font-inter! text-[#1A1A1A]">
                {quote.replace(/"/g, '')}
              </p>
            </div>
          )}

          {/* CTA */}
          {link?.href && (
            <div className="mt-8 text-center mx-auto flex justify-center">
              <Link
                href={link.href}
                target={link.isExternal ? '_blank' : '_self'}
              >
                <PrimaryButton>
                  {link.text}
                </PrimaryButton>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WhyWeRecommend
