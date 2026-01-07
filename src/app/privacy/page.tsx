import React from 'react'
import { getPrivacyData } from '@/lib/api/privacyAPI'

export default async function Page() {
  const page = await getPrivacyData()
  if (!page) return null

  const blocks = page.blocks || []

  const hero = blocks.find(
    (b: any) => b.__component === 'blocks.page-hero-section'
  )

  const policy = blocks.find(
    (b: any) => b.__component === 'blocks.policy-block'
  )

  // Split content by double line breaks to preserve spacing
  const contentSections = policy?.content
    ?.split('\n\n')
    .map((text: string) => text.trim())
    .filter(Boolean)

  return (
    <div className="mt-[85px] lg:mt-[100px]">
      {/* ================= HERO ================= */}
      {hero && (
        <div
          className="relative h-[260px] md:h-80 flex items-center justify-center bg-center bg-cover"
          style={{
            backgroundImage: `url(${hero.image?.url})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold arial-font">
            {hero.title}
          </h1>
        </div>
      )}

      {/* ================= CONTENT ================= */}
      <div className="container font-inter mx-auto px-4 py-12 md:py-16">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">
          {policy?.Title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-8">
          {policy?.SubTitle}
        </p>

        {/* Policy Body */}
        <div className="space-y-6 text-[15px] leading-relaxed text-[#333]">
          {contentSections?.map((section: string, index: number) => {
      
            const isHeading =
              section.length < 60 &&
              !section.includes('.') &&
              !section.includes(':')


            const formattedText = section
              .replace(
                /(https?:\/\/[^\s]+)/g,
                `<a href="$1" target="_blank" class="text-blue-600 hover:underline">$1</a>`
              )
              .replace(
                /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
                `<a href="mailto:$1" class="text-blue-600 hover:underline">$1</a>`
              )

            if (isHeading) {
              return (
                <h3
                  key={index}
                  className="text-lg font-semibold mt-10"
                >
                  {section}
                </h3>
              )
            }

            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
