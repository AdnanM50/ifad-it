'use client';

import Image from 'next/image';
import BoardMemberCard from './boardMemberCard';

interface BoardMember {
  name: string;
  title: string;
  imageSrc: string;
  alt: string;
}

const boardMembers: BoardMember[] = [
  {
    name: 'Iftekhar Ahmed Tipu',
    title: 'Chairman, IFAD Group',
    imageSrc: '/team/member1.png',
    alt: 'Iftekhar Ahmed Tipu',
  },
  {
    name: 'Mrs. Nilufar Ahmed',
    title: 'Director, IFAD Group',
    imageSrc: '/team/member2.png',
    alt: 'Mrs. Nilufar Ahmed',
  },
  {
    name: 'Tanveer Ahmed',
    title: 'Group Vice Chairman (I)',
    imageSrc: '/team/member3.png',
    alt: 'Tanveer Ahmed',
  },
  {
    name: 'Taskeen Ahmed',
    title: 'Group Vice Chairman (II)',
    imageSrc: '/team/member4.png',
    alt: 'Taskeen Ahmed',
  },
  {
    name: 'Tashfeen Ahmed',
    title: 'Group Vice Chairman (III)',
    imageSrc: '/team/member5.png',
    alt: 'Tashfeen Ahmed',
  },
  {
    name: 'Reazul Haque Chowdhury',
    title: 'Group Managing Director',
    imageSrc: '/team/member6.png',
    alt: 'Reazul Haque Chowdhury',
  },
  {
    name: 'Shejuti A. Ahmed',
    title: 'Group Human Resource Director',
    imageSrc: '/team/member7.png',
    alt: 'Shejuti A. Ahmed',
  },
  {
    name: 'Uttiya Bakshi Abir',
    title: 'Executive Director',
    imageSrc: '/team/member8.png',
    alt: 'Uttiya Bakshi Abir',
  },
  {
    name: 'Kaushik Sarkar',
    title: 'Chief Technical Officer (Automotive Division)',
    imageSrc: '/team/member9.png',
    alt: 'Kaushik Sarkar',
  },
  {
    name: 'Mahbub Baset',
    title: 'Chief Operating Officer (FMCG Division)',
    imageSrc: '/team/member10.png',
    alt: 'Mahbub Baset',
  },
  {
    name: 'Amir Daud',
    title: 'Amir Daud',
    imageSrc: '/team/member11.png',
    alt: 'Amir Daud',
  },
  {
    name: 'AKM Mafrul Haq',
    title: 'General Manager, Human Resources',
    imageSrc: '/team/member12.png',
    alt: 'AKM Mafrul Haq',
  },
  {
    name: 'Mr. Shah Jalal Chowdhury',
    title: 'Head Of Group Finance Operations',
    imageSrc: '/team/member13.png',
    alt: 'Mr. Shah Jalal Chowdhury',
  },
  {
    name: 'MD. Sazzad Hossain Talukdar,FCS',
    title: 'Company Secretary (Automotive Division)',
    imageSrc: '/team/member14.png',
    alt: 'MD. Sazzad Hossain Talukdar,FCS',
  },
  {
    name: 'Md. Habibur Rahman',
    title: 'Group Head Of Information Technology',
    imageSrc: '/team/member15.png',
    alt: 'Md. Habibur Rahman',
  },
  {
    name: 'Md. Afsar Uddin',
    title: 'Chief Financial and Supply Chain Officer',
    imageSrc: '/team/member16.png',
    alt: 'Md. Afsar Uddin',
  },
  {
    name: 'Mr. Masudul Haque MBA, LLB, FCS, GRCP, GRCA',
    title: 'Head of Internal Audit & Compliance',
    imageSrc: '/team/member17.png',
    alt: 'Mr. Masudul Haque MBA, LLB, FCS, GRCP, GRCA',
  }
];

const BoardMembers: React.FC = () => {


  return (
    <section className="py-12 px-2 xl:px-0 sm:py-16 md:py-[120px] bg-[#FCFCFD]">

     <div className="max-w-7xl mx-auto">
         <div className="text-center mb-8">
        <p className="section-title">Our Team</p>
        <h2 className="section-subtitle mt-1">Board Members</h2>
      </div>

      <div
        className='flex mx-auto w-full gap-6 sm:gap-8 justify-center items-center md:flex-row flex-col'
      >
       <BoardMemberCard member={boardMembers[0]} index={0} />
       <BoardMemberCard member={boardMembers[1]} index={1} />
      </div>
      <div
        className='flex mx-auto w-full gap-6 sm:gap-8  justify-center items-center md:flex-row flex-col mt-8 md:mt-12'
      >
       <BoardMemberCard member={boardMembers[2]} index={2} />
       <BoardMemberCard member={boardMembers[3]} index={3} />
       <BoardMemberCard member={boardMembers[4]} index={4} />
      </div>
      <div className="flex flex-col pb-8 lg:pb-12 items-center">
        <h1 className='section-subtitle mt-8 sm:mt-16 mb-8 sm:mb-12'>Leadership Team</h1>
        <BoardMemberCard member={boardMembers[5]} index={5}  />
      </div>
       <div
        className='flex mx-auto w-full max-w-7xl flex-wrap gap-6 sm:gap-8  justify-center items-center md:flex-row flex-col mt-8 md:mt-12'
      >
       <BoardMemberCard member={boardMembers[6]} index={6} />
       <BoardMemberCard member={boardMembers[7]} index={7} />
       <BoardMemberCard member={boardMembers[8]} index={8} />
       <BoardMemberCard member={boardMembers[9]} index={9} />
       <BoardMemberCard member={boardMembers[10]} index={10} />
       <BoardMemberCard member={boardMembers[11]} index={11} />
       <BoardMemberCard member={boardMembers[12]} index={12} />
       <BoardMemberCard member={boardMembers[13]} index={13} />
       <BoardMemberCard member={boardMembers[14]} index={14} />
       <BoardMemberCard member={boardMembers[15]} index={15} />
       <BoardMemberCard member={boardMembers[16]} index={16} />
      </div>
     </div>
    </section>
  );
};

export default BoardMembers;