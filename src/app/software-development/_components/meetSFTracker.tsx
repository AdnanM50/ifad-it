'use client'

const MeetSDTracker = ({
  data,
  cardData,
}: {
  data: any
  cardData: any
}) => {
  if (!data) return null

  const contentLines = data.content?.split('\n') || []
  const mainContent = contentLines.slice(0, -1).join('\n')
  const highlightText = contentLines[contentLines.length - 1]

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="section-title capitalize!">
              {data.SubTitle}
            </p>

            <h2 className="mt-2 section-subtitle">
              {data.Title}
            </h2>

            <p className="mt-4 section-description whitespace-pre-line">
              {mainContent}
            </p>

            {highlightText && (
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#FFF7F3] px-5 py-4 max-w-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE5D9]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Z"
                      stroke="#F97316"
                      strokeWidth="2"
                    />
                    <path
                      d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6"
                      stroke="#F97316"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <p className="text-sm font-inter font-medium text-[#1A1A1A]">
                  {highlightText}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {cardData?.cards?.map((card: any) => (
              <StatCard
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

export default MeetSDTracker

function StatCard({
  value,
  label,
  iconUrl,
  iconAlt,
}: {
  value: string
  label: string
  iconUrl?: string
  iconAlt?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[16px] border border-[#DDF0FD] p-6 text-center bg-[#FAFDFF]">
      <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-[#EBF7FE]">
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