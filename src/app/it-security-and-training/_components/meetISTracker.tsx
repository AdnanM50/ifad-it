'use client'

import Image from 'next/image'

interface PolicyBlock {
  Title: string
  SubTitle: string
  content: string
}

interface CardItem {
  id: number
  title: string
  description: string
  icon: {
    url: string
    alternativeText?: string | null
  }
}

const MeetISTracker = ({
  data,
  cards,
}: {
  data: PolicyBlock
  cards: { cards: CardItem[] }
}) => {
  if (!data || !cards?.cards?.length) return null

  return (
    <section className="bg-white py-16 lg:py-[120px]">
      <div className="container xl:px-0 px-2">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">

          <div>
            {/* Subtitle */}
            <p className="section-title text-[#F36A10] capitalize!">
              {data.SubTitle}
            </p>

            {/* Title */}
            <h2 className="mt-4 section-subtitle whitespace-pre-line">
              {data.Title}
            </h2>

        
            {data.content
              ?.split('\n\n')
              .map((para, idx) => {

                if (para.trim().startsWith('-')) {
                  return (
                    <div
                      key={idx}
                      className="mt-6 flex items-center gap-4 rounded-[16px] bg-[#FBFAF9] px-6 py-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#FEF4EC]">
                        <Image
                          src={cards.cards[0].icon.url}
                          alt={cards.cards[0].icon.alternativeText || 'Trusted'}
                          width={22}
                          height={22}
                        />
                      </div>

                      <p className="text-sm font-inter font-medium text-[#1A1A1A]">
                        {para.replace('-', '').trim()}
                      </p>
                    </div>
                  )
                }

                return (
                  <p
                    key={idx}
                    className="mt-4 section-description "
                  >
                    {para}
                  </p>
                )
              })}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {cards.cards.map((card, index) => (
              <FeatureCard
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

function FeatureCard({
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
      bg: 'bg-[#F7FFF9]',
      iconBg: 'bg-[#E9FFF1]',
      border: 'border-[#D9F5E6]',
    },
    {
      bg: 'bg-[#F9FBFF]',
      iconBg: 'bg-[#EAF1FF]',
      border: 'border-[#DCE6FF]',
    },
    {
      bg: 'bg-[#FFFBF5]',
      iconBg: 'bg-[#FFF1D9]',
      border: 'border-[#FFE6B3]',
    },
    {
      bg: 'bg-[#FFF7F7]',
      iconBg: 'bg-[#FFECEC]',
      border: 'border-[#FFDADA]',
    },
  ]

  const style = styles[index % styles.length]

  return (
    <div
      className={`rounded-2xl border p-6 ${style.bg} ${style.border}`}
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] ${style.iconBg}`}
      >
        <Image
          src={icon.url}
          alt={icon.alternativeText || title}
          width={24}
          height={24}
        />
      </div>

      <h3 className="text-lg font-inter font-semibold text-[#1A1A1A]">
        {title}
      </h3>

      <p className="mt-1 text-sm font-inter text-[#6F7377] ">
        {description}
      </p>
    </div>
  )
}
