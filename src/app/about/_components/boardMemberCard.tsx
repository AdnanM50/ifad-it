import Image from 'next/image'
import React from 'react'

interface BoardMember {
  name: string
  title: string
  imageSrc: string
  alt: string
}

interface BoardMemberCardProps {
  member: BoardMember
  index: number
  nameClass?: string
}

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ member, index,nameClass }) => {
  return (
    <div
      key={index}
      className="bg-[#FEF7F0] w-full max-w-[320px] rounded-b-lg rounded-t-lg  overflow-hidden duration-300 flex flex-col"
    >
      <div className="relative w-full max-w-[320px] h-64 md:h-72 rounded-t-lg overflow-hidden lg:h-[360px]">
        <Image
          src={member.imageSrc}
          alt={member.alt}
        width={1000}
            height={1000}
        //   fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 rounded-t-lg hover:scale-105"
        />
      </div>
      <div className="sm:py-6 py-4 px-[9px] text-center">
        <h3 className={`${nameClass} font-semibold text-[#1A1A1A] text-xl font-inter sm:text-2xl`}>{member.name}</h3>
        <p className="text-sm sm:text-base font-normal text-[#F36A10] mt-2  font-inter">{member.title}</p>
      </div>
    </div>
  )
}

export default BoardMemberCard
