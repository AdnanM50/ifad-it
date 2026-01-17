"use client"

import Image from "next/image"
import FeatureCard from "./featureCard"

const WhyITracker = ({ data }: { data: any }) => {
  if (!data) return null

  return (
    <section className="bg-[#FCFCFD] py-20 lg:py-[120px]">
      <div className="container">
        {/* HEADER */}
        <div className="text-center">
          <p className="section-title capitalize!">
            {data.title}
          </p>

          <h2 className="mt-6 section-subtitle">
            {data.headline?.split(".")[0]}.
            <br />
            {data.headline?.split(".")[1]}
          </h2>

          <p className="mt-5 section-description">
            {data.subTitle}
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.values?.map((item: any) => (
            <FeatureCard
              key={item.id}
              icon={
                <Image
                  src={item.icon?.url}
                  alt={item.icon?.alternativeText || item.title}
                  width={32}
                  height={32}
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

export default WhyITracker
