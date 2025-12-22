'use client'

import CountingAnimation from '@/components/common/CountingAnimation'
import MissionVisionSection from './missionSection'

const PartStory = ({
  data,
  statsData,
  missionVisionData,
}: {
  data: any
  statsData: any
  missionVisionData: any[]
}) => {
  if (!data) return null

  return (
    <>
      {/* OUR STORY */}
      <div className="py-12 md:py-[120px] xl:px-0 px-2 container">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* LEFT */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="section-title">{data.title}</h3>

            <h1 className="section-subtitle">{data.heading}</h1>

            <p className="section-description mt-4 whitespace-pre-line">
              {data.content}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img
              src={data.image?.url}
              alt={data.image?.alternativeText || data.title}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* STATS */}
      {statsData && <CountingAnimation data={statsData} />}

      {/* MISSION + VISION */}
      {missionVisionData?.length > 0 && (
        <MissionVisionSection data={missionVisionData} />
      )}
    </>
  )
}

export default PartStory
