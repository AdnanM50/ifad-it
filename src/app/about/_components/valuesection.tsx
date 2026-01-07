'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type CoreValuesSectionProps = {
  data: any
}

const CoreValuesSection = ({ data }: CoreValuesSectionProps) => {
 

  if (!data) return null

  return (
    <section className="py-16 xl:py-[120px] xl:px-0 px-2 bg-white">
      <div className="container xl:px-0 px-2">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h3 className="section-title mb-2">
            {data.title}
          </h3>

          <h2 className="section-subtitle mb-4">
            {data.headline}
          </h2>

          <p className="section-description max-w-2xl mx-auto">
            {data.subTitle}
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.values?.map((value: any, index: number) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white sm:px-6 p-4 sm:py-8 py-4 card-hover2 rounded-3xl border border-[#EBECF0] transition-shadow duration-700"
            >
              {/* ICON */}
              <div className="mb-4 size-16 bg-[#FEF7F0] rounded-full flex items-center justify-center">
                {value.icon?.url && (
                  <Image
                    src={value.icon.url}
                    alt={value.icon.alternativeText || value.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                )}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold font-inter text-[#1A1A1A] mb-3">
                {value.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#6F7377] text-base font-inter font-normal whitespace-pre-line">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValuesSection
