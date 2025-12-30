'use client'

import FeatureCard from '@/app/gps-vehicle-tracking/_components/featureCard'
import Image from 'next/image'

const WhyISTracker = ({ data }: { data: any }) => {
  if (!data) return null

  const { title, headline, subTitle, values = [] } = data

  return (
    <section className="bg-[#FCFCFD] py-20 lg:py-[120px]">
      <div className="container">
        {/* HEADER */}
        <div className="text-center">
          <p className="section-title capitalize!">{title}</p>

          <h2 className="mt-6 section-subtitle">
            {headline}
          </h2>

          <p className="mt-5 section-description max-w-[593px] mx-auto ">
            {subTitle}
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item: any) => (
            <FeatureCard
              key={item.id}
              icon={
                <Image
                  src={item.icon?.url}
                  alt={item.icon?.alternativeText || item.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              }
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyISTracker