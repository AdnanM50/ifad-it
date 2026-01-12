'use client'

import PrimaryButton from "@/components/common/primary-button"
import Link from "next/link"

const MeetITracker = ({
  data,
  link,
  cardData,
}: {
  data: any
  link: any
  cardData: any
}) => {
  if (!data) return null

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container xl:px-0 px-2">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <p className="section-title capitalize!">
              {data.SubTitle}
            </p>

            <h2 className="mt-2 section-subtitle">
              {data.Title}
            </h2>

            <p className="mt-4 section-description whitespace-pre-line">
              {data.content}
            </p>

            {link?.href && (
              <Link
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
              >
                <PrimaryButton className="mt-8">
                  {link.text}
                </PrimaryButton>
              </Link>
            )}
          </div>

          {/* RIGHT STATS */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
            {cardData?.cards?.map((card: any, idx: number) => (
              <StatCard
                index={idx} // Pass index instead of card.id for reliable array access
                key={card.id}
                value={card.title}
                label={card.description}
                iconUrl={card.icon?.url}
                iconAlt={card.icon?.alternativeText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetITracker

function StatCard({
  value,
  label,
  iconUrl,
  iconAlt,
  index,
}: {
  value: string
  label: string
  iconUrl?: string
  iconAlt?: string
  index: number
}) {
  const styles = [
    {
      bg: 'bg-[#FAFDFF]',
      iconBg: 'bg-[#EBF7FE]',
      border: 'border-[#DDF0FD]',
    },
    {
      bg: 'bg-[#FFFBFA]',
      iconBg: 'bg-[#FDEFEC]',
      border: 'border-[#FDEBE7]',
    },
    {
      bg: 'bg-[#FFFDFA]',
      iconBg: 'bg-[#FEF6EB]',
      border: 'border-[#FEF0DD]',
    },
    {
      bg: 'bg-[#FBFEFD]',
      iconBg: 'bg-[#EEFBF7]',
      border: 'border-[#CDF4E6]',
    },
  ]

  // Use index to pick a style (cycle through if more than 4 cards)
  const style = styles[index % styles.length]

  return (
    <div className={`flex flex-col items-center justify-center rounded-[16px] border ${style.border} p-6 text-center ${style.bg}`}>
      
      <div className={`mb-4 flex size-12 items-center justify-center rounded-md ${style.iconBg}`}>
        {iconUrl && (
          <img
            src={iconUrl}
            alt={iconAlt || label}
            className="h-6 w-6"
          />
        )}
      </div>

      <h3 className="text-xl lg:text-2xl font-inter font-bold text-[#1A1A1A]">
        {value}
      </h3>
      <p className="mt-1 text-xs lg:text-base font-inter text-[#6F7377]">
        {label}
      </p>
    </div>
  )
}