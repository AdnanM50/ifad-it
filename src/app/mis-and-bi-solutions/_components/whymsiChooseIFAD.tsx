'use client'

import Image from 'next/image'
import React from 'react'

type WhyUsItem = {
  title: string
  description: string
  badge: string
  icon: React.ReactNode
}

const whyUsData: WhyUsItem[] = [
  {
    title: 'We Understand Bangladesh',
    description:
      '10+ years building MIS solutions for local businesses. We know your challenges and regulatory requirements.',
    badge: '10+ Years in BD',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L19 5V11C19 16 12 22 12 22C12 22 5 16 5 11V5L12 2Z"
          stroke="#F3680C"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: 'Scalable & Secure',
    description:
      'Systems that grow with you. Enterprise-grade security that protects your sensitive data.',
    badge: '99.9 Uptime',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1L3 5V11C3 16.5 12 23 12 23C12 23 21 16.5 21 11V5L12 1Z"
          stroke="#F3680C"
          strokeWidth="2"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="#F3680C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Full-Cycle Support',
    description:
      'From requirements analysis to deployment and training—we’re with you every step.',
    badge: '24/7 Support',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 10C18 6.686 15.314 4 12 4C8.686 4 6 6.686 6 10V18"
          stroke="#F3680C"
          strokeWidth="2"
        />
        <path
          d="M4 18H8V14H4V18ZM16 18H20V14H16V18Z"
          stroke="#F3680C"
          strokeWidth="2"
        />
      </svg>
    ),
  },
]

export default function WhyMSIChooseIFAD({ policy, cards }: any) {
  console.log("🚀 ~ WhyMSIChooseIFAD ~  policy, cards:",  policy, cards)
  return (
    <section className="bg-[#FCFCFD] py-24 sm:py-[120px]">
      <div className="container xl:px-0 px-2">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="section-title capitalize!"> {policy.SubTitle}</p>

          <h2 className="mt-2 section-subtitle">
            {policy.Title}
          </h2>

          <p className="mx-auto section-description">
            {policy.content}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 gap-y-8 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards?.textCards?.map((item: any) => {
            const [first, ...rest] = item.text.split(' ')

            return (
              <div
                key={item?.id}
                className="relative rounded-[16px] border border-[#FDE1CE] bg-white px-4 sm:px-6 py-5 sm:py-8"
              >
                {/* BADGE – EXACT FIGMA */}
                <div className="absolute -top-[29px] right-6 z-10">
                  <div className="flex h-[58px] font-inter w-[92px] flex-col justify-center gap-[2px] rounded-[8px] bg-[#F36A10] px-[8px] py-[6px] text-start">
                    <span className="text-xl font-semibold leading-none text-white">
                      {first}
                    </span>
                    <span className="text-[14px] font-normal leading-tight text-white">
                      {rest.join(' ')}
                    </span>
                  </div>
                </div>

                {/* ICON */}
                <div className="mb-4 sm:mb-6 flex size-16 items-center justify-center rounded-full bg-[#FFFAF5]">
                  {item.icon?.url && (
                    <Image
                      src={item.icon.url}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="object-fill size-8"
                    />
                  )}
                </div>

                {/* TITLE */}
                <h3 className="text-lg lg:text-2xl font-semibold font-inter text-[#1A1A1A]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-base leading-relaxed text-[#6F7377] font-inter">
                  {item.subTitle}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
