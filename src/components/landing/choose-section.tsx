'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '../common/primary-button'

interface FeatureCardProps {
  title: string
  description: string
  icon: {
    url: string
    alternativeText?: string | null
  }
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group bg-white rounded-[24px] px-4 sm:py-8 py-4 sm:px-[22.11px] chooes-us-shadow transition-all duration-500 border border-[#EBECF0] max-w-[280px] w-full">
      <div className="flex justify-center mb-4">
        <div className="size-[100px] flex items-center justify-center rounded-full bg-[#FFFAF5] transition-colors">
          <Image
            src={icon.url}
            alt={icon.alternativeText || title}
            width={56}
            height={56}
            className="w-[56px] h-[56px] object-contain"
          />
        </div>
      </div>

      <h3 className="sm:text-2xl text-xl font-semibold text-[#1A1A1A] font-inter text-center mb-3">
        {title}
      </h3>

      <p className="text-[#6F7377] text-base font-inter text-center whitespace-pre-line">
        {description}
      </p>
    </div>
  )
}

const WhyChooseUs = ({ data }: { data: any }) => {
  if (!data) return null

  return (
    <section className="bg-[#FCFCFD] py-12 md:py-[120px] px-2 lg:px-0">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-4">
          <span className="section-title">
            {data.title}
          </span>
        </div>

        {/* Heading */}
        <h2 className="section-subtitle max-w-[1163px] text-center mx-auto mb-4">
          {data.headline}
        </h2>

        {/* Subtitle */}
        <p className="text-center section-description max-w-[864px] mx-auto mb-12">
          {data.subTitle}
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {data.whyChoose.map((item: any) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        {/* CTA — FIXED AS YOU REQUESTED */}
        <div className="flex justify-center mt-12">
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
      </div>
    </section>
  )
}

export default WhyChooseUs
