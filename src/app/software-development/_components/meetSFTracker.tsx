'use client'


const MeetSDTracker = ({
  data,
  // link,
  cardData,
}: {
  data: any
  // link: any
  cardData: any
}) => {
  if (!data) return null

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container">
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

            {/* {link?.href && (
              <Link
                href={link.href}
                target={link.isExternal ? "_blank" : "_self"}
              >
                <PrimaryButton className="mt-8">
                  {link.text}
                </PrimaryButton>
              </Link>
            )} */}
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
