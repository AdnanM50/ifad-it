'use client'

type WhyUsItem = {
  title: string
  description: string
  badge: string
  icon: React.ReactNode
}

const whyUsData: WhyUsItem[] = [
  {
    title: 'We Understand Bangladesh',
    description:
      '10+ years building MIS solutions for local businesses. We know your challenges and regulatory requirements.',
    badge: '10+ Years in BD',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L19 5V11C19 16 12 22 12 22C12 22 5 16 5 11V5L12 2Z"
          stroke="#F3680C"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: 'Scalable & Secure',
    description:
      'Systems that grow with you. Enterprise-grade security that protects your sensitive data.',
    badge: '99.9 Uptime',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1L3 5V11C3 16.5 12 23 12 23C12 23 21 16.5 21 11V5L12 1Z"
          stroke="#F3680C"
          strokeWidth="2"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="#F3680C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Full-Cycle Support',
    description:
      'From requirements analysis to deployment and training—we’re with you every step.',
    badge: '24/7 Support',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 10C18 6.686 15.314 4 12 4C8.686 4 6 6.686 6 10V18"
          stroke="#F3680C"
          strokeWidth="2"
        />
        <path
          d="M4 18H8V14H4V18ZM16 18H20V14H16V18Z"
          stroke="#F3680C"
          strokeWidth="2"
        />
      </svg>
    ),
  },
]

export default function WhyMSIChooseIFAD() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="text-sm font-medium text-[#F3680C]">
            Why Us
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
            Why Choose IFAD IT LTD
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#6F7377]">
            Trusted expertise, proven results, and commitment to your success.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-[16px] border border-[#FDEBE3] bg-[#FFFCFA] p-6"
            >
              {/* BADGE */}
              <span className="absolute -top-3 right-6 rounded-md bg-[#F3680C] px-3 py-1 text-xs font-semibold text-white">
                {item.badge}
              </span>

              {/* ICON */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1E8]">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-sm font-semibold text-[#1A1A1A]">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm leading-relaxed text-[#6F7377]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
