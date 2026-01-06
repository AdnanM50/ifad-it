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

  const cardStyles = [
    {
      bg: 'bg-[#FAFCFF]',
      border: 'border-[#DDE9FD]',
      iconBg: 'bg-[#EBF6FE]',
    },
    {
      bg: 'bg-[#FFFAFA]',
      border: 'border-[#FDE8E8]',
      iconBg: 'bg-[#FDEFEC]',
    },
    {
      bg: 'bg-[#FAFFFC]',
      border: 'border-[#C2FFDB]',
      iconBg: 'bg-[#EEFBF7]',
    },
    {
      bg: 'bg-[#FFFDFA]',
      border: 'border-[#FEF1DD]',
      iconBg: 'bg-[#FEF6EB]',
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container xl:px-0 px-2">
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
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#FBFAF9] px-5 py-4 max-w-[684px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#FEF4EC]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.4768 12.8906L16.9918 21.4166C17.0087 21.517 16.9946 21.6202 16.9514 21.7124C16.9081 21.8046 16.8377 21.8813 16.7497 21.9324C16.6616 21.9835 16.56 22.0065 16.4586 21.9983C16.3571 21.9902 16.2605 21.9512 16.1818 21.8866L12.6018 19.1996C12.4289 19.0705 12.219 19.0007 12.0033 19.0007C11.7875 19.0007 11.5776 19.0705 11.4048 19.1996L7.81875 21.8856C7.74007 21.9501 7.64361 21.989 7.54225 21.9972C7.44088 22.0054 7.33942 21.9825 7.25141 21.9315C7.16341 21.8805 7.09303 21.804 7.04967 21.712C7.00631 21.62 6.99204 21.5169 7.00875 21.4166L8.52275 12.8906" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>

                <p className="text-sm font-inter font-medium text-[#1A1A1A]">
                  {highlightText}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {cardData?.cards?.map((card: any, index: number) => {
              const style = cardStyles[index % cardStyles.length]

              return (
                <StatCard
                  key={card.id}
                  value={card.title}
                  label={card.description}
                  iconUrl={card.icon?.url}
                  iconAlt={card.icon?.alternativeText}
                  bg={style.bg}
                  border={style.border}
                  iconBg={style.iconBg}
                />
              )
            })}
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
  bg,
  border,
  iconBg,
}: {
  value: string
  label: string
  iconUrl?: string
  iconAlt?: string
  bg: string
  border: string
  iconBg: string
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[16px] border p-6 text-center ${bg} ${border}`}
    >
      <div
        className={`mb-4 flex size-12 items-center justify-center rounded-md ${iconBg}`}
      >
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
