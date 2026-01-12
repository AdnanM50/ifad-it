'use client'
import Image from 'next/image'

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="mt-1 flex-shrink-0"
  >
    <path
      d="M11.6667 0C5.23833 0 0 5.23833 0 11.6667C0 18.095 5.23833 23.3333 11.6667 23.3333C18.095 23.3333 23.3333 18.095 23.3333 11.6667C23.3333 5.23833 18.095 0 11.6667 0ZM17.2433 8.98333L10.6283 15.5983C10.465 15.7617 10.2433 15.855 10.01 15.855C9.77667 15.855 9.555 15.7617 9.39167 15.5983L6.09 12.2967C5.75167 11.9583 5.75167 11.3983 6.09 11.06C6.42833 10.7217 6.98833 10.7217 7.32667 11.06L10.01 13.7433L16.0067 7.74667C16.345 7.40833 16.905 7.40833 17.2433 7.74667C17.5817 8.085 17.5817 8.63333 17.2433 8.98333Z"
      fill="#F36A10"
    />
  </svg>
)

const MissionVisionSection = ({ data }: { data: any[] }) => {
  if (!data?.length) return null

  return (
    <section className="py-12 md:py-[120px] bg-white">
      <div className="container xl:px-0 px-2 space-y-20">
        {data.map((item, index) => {
          const lines = item.content?.split('\n').filter(Boolean) || []

          const bulletLines = lines.filter((l: string) => l.trim().startsWith('-'))
          const normalLines = lines.filter((l: string) => !l.trim().startsWith('-'))

          return (
            <div
              key={item.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10`}
            >
              {/* TEXT */}
              <div className="md:w-1/2 space-y-4">
                <div className=" gap-3">
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alternativeText || item.title}
                    width={40}
                    height={40}
                  />
                  <h3 className="section-title">{item.title}</h3>
                </div>

                {normalLines.map((line: string, i: number) => (
                  <p key={i} className="section-description">
                    {line}
                  </p>
                ))}

                {/* Bullet list with SVG */}
                {bulletLines.length > 0 && (
                  <ul className="space-y-3 pt-2">
                    {bulletLines.map((line: string, i: number) => (
                      <li key={i} className="flex gap-3">
                        <CheckIcon />
                        <span className="section-description">
                          {line.replace(/^-/, '').trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
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
          )
        })}
      </div>
    </section>
  )
}

export default MissionVisionSection
