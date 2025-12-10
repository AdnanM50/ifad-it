'use client';

import Image from 'next/image';

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
    imageSrc: '/images/nilufar-ahmed.jpg',
    alt: 'Mrs. Nilufar Ahmed',
  },
  {
    name: 'Tanveer Ahmed',
    title: 'Group Vice Chairman (I)',
    imageSrc: '/images/tanveer-ahmed.jpg',
    alt: 'Tanveer Ahmed',
  },
  {
    name: 'Taskeen Ahmed',
    title: 'Group Vice Chairman (II)',
    imageSrc: '/images/taskeen-ahmed.jpg',
    alt: 'Taskeen Ahmed',
  },
  {
    name: 'Tashfeen Ahmed',
    title: 'Group Vice Chairman (III)',
    imageSrc: '/images/tashfeen-ahmed.jpg',
    alt: 'Tashfeen Ahmed',
  },
];

const BoardMembers: React.FC = () => {


  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      {/* Section Title */}
     <div className="max-w-[1280px] mx-auto">
         <div className="text-center mb-8">
        <p className="text-xs text-orange-500 uppercase tracking-wider">Our Team</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">Board Members</h2>
      </div>

      <div
        className={`grid gap-6 ${
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {boardMembers.map((member, index) => (
          <div
            key={index}
            className="bg-orange-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="relative w-full h-64 md:h-72 lg:h-80">
              <Image
                src={member.imageSrc}
                alt={member.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 text-lg">{member.name}</h3>
              <p className="text-sm text-orange-600 mt-1">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default BoardMembers;