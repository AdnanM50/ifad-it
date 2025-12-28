'use client'

import React from 'react'

type Industry = {
  title: string
  description: string
  image: string
  icon: React.ReactNode
  height?: any
}

const industries: Industry[] = [
  {
    title: 'Manufacturing & Production',
    description:
      'Production tracking, quality control, and inventory management.',
    image: '/Image.png',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M3 21V7L9 3V7L15 3V7L21 3V21H3Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Retail & E-commerce',
    description: 'Sales analytics, inventory sync, customer insights.',
    image: '/Image.png',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: 'Healthcare & Pharmaceuticals',
    description:
      'Patient data, appointment systems, and inventory tracking.',
    image: '/Image.png',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 21C12 21 4 13.5 4 8.5C4 6 6 4 8.5 4C10 4 11.4 4.8 12 6C12.6 4.8 14 4 15.5 4C18 4 20 6 20 8.5C20 13.5 12 21 12 21Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: 'Financial Services',
    description:
      'Transaction monitoring, compliance reporting, risk analytics.',
    image: '/Image.png',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M3 10H21M7 15H7.01M11 15H13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: 'Government & NGOs',
    description:
      'Program tracking, budget monitoring, and impact measurement.',
    image: '/Image.png',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" stroke="white" strokeWidth="2" />
        <path d="M12 14V20" stroke="white" strokeWidth="2" />
        <path d="M8 20H16" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
]


const IndustryCard = ({ title, description, image, icon, height = false }: Industry) => {
  const heightClass = height === false ? 'h-full' : height;

  return (
    <div className={`relative ${heightClass} w-full overflow-hidden rounded-2xl bg-[#122349]`}>
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#122349]/60 to-[#122349]" />

      {/* Content */}
      <div className="absolute bottom-0 z-10 p-5">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-[#F3680C]">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-xs text-gray-200">{description}</p>
      </div>
    </div>
  )
}

export default function IndustriesSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="section-title capitalize">Industries</p>
          <h2 className="mt-2 section-subtitle">Built For Your Industry</h2>
          <p className="mx-auto mt-4 max-w-xl section-description">
            Specialized solutions designed for the unique challenges of each
            sector.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* 🔑 FIX IS HERE: items-stretch */}
          <div className="flex flex-col md:flex-row gap-5 md:items-stretch">
            {/* Large Card */}
            <div className="w-full md:w-[760px] h-[524px]">
              <IndustryCard {...industries[0]} />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-5 w-full md:w-[368px] h-[524px]">
              <div className="h-[250px]">
                <IndustryCard {...industries[1]} />
              </div>
              <div className="h-[524px]">
                <IndustryCard height="h-[524px]" {...industries[2]} />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-5 flex flex-col w-fit md:flex-row gap-5">
            <div className="w-full md:w-[368px] h-[250px]">
              <IndustryCard {...industries[3]} />
            </div>
            <div className="w-full md:w-[368px] h-[250px]">
              <IndustryCard {...industries[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
