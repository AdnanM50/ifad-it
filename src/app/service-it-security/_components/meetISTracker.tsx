'use client'

import Image from 'next/image'

const MeetISTracker = ({
  data,
  cards,
}: {
  data: any
  cards: any
}) => {
  if (!data || !cards) return null

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            {/* Subtitle */}
            <p className="section-title capitalize!">
              {data.SubTitle}
            </p>

            {/* Title */}
            <h2 className="mt-6 section-subtitle whitespace-pre-line">
              {data.Title}
            </h2>

            {/* Content (supports line breaks) */}
            {data.content
              ?.split('\n\n')
              .map((para: string, idx: number) => (
                <p
                  key={idx}
                  className="mt-4 section-description whitespace-pre-line"
                >
                  {para}
                </p>
              ))}

            {/* TRUSTED SINCE CARD (1st card highlighted) */}
            {cards.cards?.[0] && (
              <div className="mt-8 flex max-w-sm items-center gap-3 rounded-[12px] bg-[#FBFAF9] p-4">
                <div className="flex size-12 items-center justify-center rounded-[12px] bg-[#FEF4EC]">
                  <Image
                    src={cards.cards[0].icon.url}
                    alt={cards.cards[0].icon.alternativeText || cards.cards[0].title}
                    width={24}
                    height={24}
                  />
                </div>

                <div>
                  <p className="text-lg font-inter font-semibold text-[#1A1A1A]">
                    {cards.cards[0].title}
                  </p>
                  <p className="text-sm text-[#6F7377] whitespace-pre-line">
                    {cards.cards[0].description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT STAT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {cards.cards
              ?.slice(1)
              .map((card: any, index: number) => (
                <StatCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  index={index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetISTracker

/* ---------------- STAT CARD ---------------- */

function StatCard({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: any
  index: number
}) {
  const styles = [
    {
      bg: 'bg-[#FFFAFA]',
      iconBg: 'bg-[#FDECEC]',
      border: 'border-[#FDE8E8]',
    },
    {
      bg: 'bg-[#FFFDFA]',
      iconBg: 'bg-[#FEF7EB]',
      border: 'border-[#FEF1DD]',
    },
    {
      bg: 'bg-[#FAFCFF]',
      iconBg: 'bg-[#EBF3FE]',
      border: 'border-[#DDE9FD]',
    },
    {
      bg: 'bg-[#FAFFFC]',
      iconBg: 'bg-[#EBFFF2]',
      border: 'border-[#C2FFDB]',
    },
  ]

  const style = styles[index % styles.length]

  return (
    <div
      className={`flex flex-col items-start rounded-[16px] border ${style.border} p-6 ${style.bg}`}
    >
      <div
        className={`mb-4 flex size-12 items-center justify-center rounded-md ${style.iconBg}`}
      >
        <Image
          src={icon.url}
          alt={icon.alternativeText || title}
          width={24}
          height={24}
        />
      </div>

      <h3 className="text-xl lg:text-2xl font-inter font-bold text-[#1A1A1A]">
        {title}
      </h3>

      <p className="mt-1 text-xs lg:text-base font-inter text-[#6F7377] whitespace-pre-line">
        {description}
      </p>
    </div>
  )
}
