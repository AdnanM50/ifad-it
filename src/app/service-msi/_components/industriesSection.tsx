'use client'

type Industry = {
  title: string
  description: string
  image: string
  icon: React.ReactNode
  gridClass?: string // ← New field for precise grid placement
}

const industries: Industry[] = [
  {
    title: 'Manufacturing & Production',
    description:
      'Production tracking, quality control, and inventory management.',
    image: '/Image.png', // ← Use correct image
    gridClass: 'col-span-2', // ← Top-left, spans 2 columns
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M3 21V7L9 3V7L15 3V7L21 3V21H3Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Retail & E-commerce',
    description: 'Sales analytics, inventory sync, customer insights.',
    image: '/Image.png',
    gridClass: 'col-start-2 row-start-2', // ← Middle-center
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: 'Healthcare & Pharmaceuticals',
    description:
      'Patient data, appointment systems, and inventory tracking.',
    image: '/Image.png', // ← Correct image!
    gridClass: 'row-span-2 col-start-3 row-start-2', // ← Right side, spans 2 rows
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 21C12 21 4 13.5 4 8.5C4 6 6 4 8.5 4C10 4 11.4 4.8 12 6C12.6 4.8 14 4 15.5 4C18 4 20 6 20 8.5C20 13.5 12 21 12 21Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: 'Financial Services',
    description:
      'Transaction monitoring, compliance reporting, risk analytics.',
    image: '/Image.png',
    gridClass: 'col-start-1 row-start-2', // ← Middle-left
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M3 10H21M7 15H7.01M11 15H13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
  },

]

export default function IndustriesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="text-sm font-medium text-[#F3680C]">Industries</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#1A1A1A] sm:text-4xl">
            Built For Your Industry
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#6F7377]">
            Specialized solutions designed for the unique challenges of each
            sector.
          </p>
        </div>

        {/* GRID - EXACT 5x5 PATTERN */}
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
          {industries.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[16px] ${item.gridClass ?? ''}`}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#122349]/0 via-[#122349]/60 to-[#122349]" />

              <div className="absolute bottom-0 z-10 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-[#F3680C]">
                  {item.icon}
                </div>

                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-[#E5E7EB]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}