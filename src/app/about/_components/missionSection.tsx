'use client'
import Image from 'next/image'

const MissionVisionSection = ({ data }: { data: any[] }) => {
  if (!data?.length) return null

  return (
    <section className="py-12 md:py-[120px] bg-white">
      <div className="container space-y-20">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10`}
          >
            {/* TEXT */}
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src={item.icon.url}
                  alt={item.icon.alternativeText || item.title}
                  width={40}
                  height={40}
                />
                <h3 className="section-title">{item.title}</h3>
              </div>

              <p className="section-description whitespace-pre-line">
                {item.content}
              </p>
            </div>

            {/* IMAGE */}
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.image.url}
                alt={item.image.alternativeText || item.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MissionVisionSection
