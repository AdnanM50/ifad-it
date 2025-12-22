'use client'

import BoardMemberCard from './boardMemberCard'

const BoardMembers = ({ data }: { data: any[] }) => {
  if (!data || data.length === 0) return null

  const boardBlock = data.find(b => b.heading === 'Board Members')
  const leadershipBlock = data.find(b => b.heading === 'Leadership Team')

  if (!boardBlock && !leadershipBlock) return null

  const boardMembers = boardBlock?.teams || []
  const leadershipMembers = leadershipBlock?.teams || []

  return (
    <section className="py-12 px-2 xl:px-0 sm:py-16 md:py-[120px] bg-[#FCFCFD]">
      <div className="max-w-7xl mx-auto">

        {/* ===================== BOARD MEMBERS ===================== */}
        {boardMembers.length > 0 && (
          <>
            <div className="text-center mb-8">
              <p className="section-title">Our Team</p>
              <h2 className="section-subtitle mt-1">Board Members</h2>
            </div>

            {/* Row 1 → 2 members */}
            <div className="flex mx-auto w-full gap-6 sm:gap-8 justify-center items-center md:flex-row flex-col">
              {boardMembers.slice(0, 2).map((member: any, index: number) => (
                <BoardMemberCard
                  key={member.id}
                  index={index}
                  member={{
                    name: member.name,
                    title: member.designation,
                    imageSrc: member.image?.url || '',
                    alt: member.image?.alternativeText || member.name,
                  }}
                />
              ))}
            </div>

            {/* Row 2 → 3 members */}
            <div className="flex mx-auto w-full gap-6 sm:gap-8 justify-center items-center md:flex-row flex-col mt-8 md:mt-12">
              {boardMembers.slice(2, 5).map((member: any, index: number) => (
                <BoardMemberCard
                  key={member.id}
                  index={index + 2}
                  member={{
                    name: member.name,
                    title: member.designation,
                    imageSrc: member.image?.url || '',
                    alt: member.image?.alternativeText || member.name,
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* ===================== LEADERSHIP TEAM ===================== */}
        {leadershipMembers.length > 0 && (
          <>
            {/* Title */}
            <div className="flex flex-col pb-8 lg:pb-12 items-center">
              <h1 className="section-subtitle mt-8 sm:mt-16 mb-8 sm:mb-12">
                Leadership Team
              </h1>

              {/* First Leader (MD) */}
              <BoardMemberCard
                index={0}
                member={{
                  name: leadershipMembers[0].name,
                  title: leadershipMembers[0].designation,
                  imageSrc: leadershipMembers[0].image?.url || '',
                  alt:
                    leadershipMembers[0].image?.alternativeText ||
                    leadershipMembers[0].name,
                }}
              />
            </div>

            {/* Rest Leaders */}
            <div className="flex mx-auto w-full max-w-7xl flex-wrap gap-6 sm:gap-8 justify-center items-center md:flex-row flex-col mt-8 md:mt-12">
              {leadershipMembers.slice(1).map((member: any, index: number) => (
                <BoardMemberCard
                  key={member.id}
                  index={index + 1}
                  member={{
                    name: member.name,
                    title: member.designation,
                    imageSrc: member.image?.url || '',
                    alt: member.image?.alternativeText || member.name,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default BoardMembers
