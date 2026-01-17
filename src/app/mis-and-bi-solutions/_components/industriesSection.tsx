'use client'

import React from 'react'

type ApiImage = {
  url: string
  alternativeText?: string
}

type ApiCard = {
  id: number
  title: string
  subTitle: string
  image: ApiImage
  icon: ApiImage
}

type IndustryCardProps = {
  title: string
  description: string
  image: string
  icon: string
  height?: any
}

const IndustryCard = ({
  title,
  description,
  image,
  icon,
  height = false,
}: IndustryCardProps) => {
  const heightClass = height === false ? 'h-full' : height

  return (
    <div
      className={`relative ${heightClass} w-full overflow-hidden rounded-2xl bg-[#122349]`}
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#122349]/60 to-[#122349]" />

      {/* Content */}
      <div className="absolute bottom-0 z-10 sm:p-5 p-3 xl:p-8">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-[#F3680C]">
          <img src={icon} alt="" className="h-6 w-6" />
        </div>

        <h3 className="text-2xl font-inter font-semibold mt-6 text-white">
          {title}
        </h3>
        <p className="mt-2 text-base font-inter text-gray-200">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function IndustriesSection({ policy, cards }: any) {
  const industries: IndustryCardProps[] =
    cards?.imageCards?.map((item: ApiCard) => ({
      title: item.title,
      description: item.subTitle,
      image: item.image?.url,
      icon: item.icon?.url,
    })) || []

  return (
    <section className="bg-white py-24 sm:py-[120px]">
      <div className="container">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="section-title capitalize!">
            {policy?.SubTitle}
          </p>
          <h2 className="mt-2 section-subtitle">
            {policy?.Title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl section-description">
            {policy?.content}
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* XL Layout */}
          <div className="hidden xl:flex gap-5">
            <div className="w-[760px] h-[524px]">
              <IndustryCard {...industries[0]} />
            </div>

            <div className="flex flex-col gap-5 w-[368px] h-[524px]">
              <div className="h-[250px]">
                <IndustryCard {...industries[1]} />
              </div>
              <div className="h-[524px]">
                <IndustryCard height="h-[524px]" {...industries[2]} />
              </div>
            </div>
          </div>

          {/* MD Layout - Updated for 2 cards per row */}
          <div className="hidden md:grid xl:hidden grid-cols-1 sm:grid-cols-2 gap-5">
            {/* First Row */}
            <div className="h-[300px] sm:h-[350px]">
              <IndustryCard {...industries[0]} />
            </div>
            <div className="h-[300px] sm:h-[350px]">
              <IndustryCard {...industries[1]} />
            </div>
            
            {/* Second Row */}
            <div className="h-[300px] sm:h-[350px]">
              <IndustryCard {...industries[2]} />
            </div>
            <div className="h-[300px] sm:h-[350px]">
              <IndustryCard {...industries[3]} />
            </div>
            
            {/* Third Row (if needed, centered) */}
            {industries[4] && (
              <div className="h-[300px] sm:h-[350px] sm:col-span-2">
                <IndustryCard {...industries[4]} />
              </div>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-3">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="w-full h-auto min-h-[250px]"
              >
                <IndustryCard {...industry} />
              </div>
            ))}
          </div>

          {/* Bottom Cards - Only for XL */}
          <div className="mt-5 hidden xl:flex gap-5">
            <div className="w-[368px] h-[250px]">
              <IndustryCard {...industries[3]} />
            </div>
            <div className="w-[368px] h-[250px]">
              <IndustryCard {...industries[4]} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}