'use client'

import PrimaryButton from '@/components/common/primary-button'

const MeetMSITracker = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="section-title capitalize!">
              Your Fleet Management Partner
            </p>

            <h2 className="mt-2 section-subtitle">
              Meet iTracker
            </h2>

            <p className="mt-4 section-description">
              Managing vehicles shouldn’t be stressful. iTracker delivers
              real-time GPS tracking, instant security alerts, and actionable
              insights—helping businesses across Bangladesh reduce costs,
              improve safety, and operate smarter.
            </p>

            <p className="mt-4 section-description">
              From single cars to 500+ vehicle fleets, iTracker serves logistics
              companies, transportation services, construction firms,
              government agencies, and private vehicle owners nationwide.
            </p>

            {/* ✅ TRUSTED SINCE 2015 (ADDED PART) */}
            <div className="mt-8 flex max-w-sm items-center gap-3 rounded-[12px] border border-[#FFE7DB] bg-[#FFF7F2] px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE2D5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 12L9 17L20 6"
                    stroke="#F3680C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  Trusted Since 2015
                </p>
                <p className="text-xs text-[#6F7377]">
                  By enterprises and government organizations
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard
              value="200+"
              label="Companies Served"
              bg="bg-[#FAFDFF]"
              iconBg="bg-[#EBF7FE]"
              border="border-[#DDF0FD]"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 22V4C6 3.47 6.21 2.96 6.59 2.59C6.96 2.21 7.47 2 8 2H16C16.53 2 17.04 2.21 17.41 2.59C17.79 2.96 18 3.47 18 4V22H6Z" stroke="#3BA8F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12H4C3.47 12 2.96 12.21 2.59 12.59C2.21 12.96 2 13.47 2 14V20C2 20.53 2.21 21.04 2.59 21.41C2.96 21.79 3.47 22 4 22H6" stroke="#3BA8F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 9H20C20.53 9 21.04 9.21 21.41 9.59C21.79 9.96 22 10.47 22 11V20C22 20.53 21.79 21.04 21.41 21.41C21.04 21.79 20.53 22 20 22H18" stroke="#3BA8F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />

            <StatCard
              value="500+"
              label="Vehicles Tracked"
              bg="bg-[#FFFBFA]"
              iconBg="bg-[#FDEFEC]"
              border="border-[#FDEBE7]"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 17H21C21.6 17 22 16.6 22 16V13C22 12.1 21.3 11.3 20.5 11.1C18.7 10.6 16 10 16 10C16 10 14.7 8.6 13.8 7.7C13.3 7.3 12.7 7 12 7H5C4.4 7 3.9 7.4 3.6 7.9L2.2 10.8C2.07 11.19 2 11.59 2 12V16C2 16.6 2.4 17 3 17H5" stroke="#EF6043" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />

            <StatCard
              value="40+"
              label="Years of IFAD Excellence"
              bg="bg-[#FFFDFA]"
              iconBg="bg-[#FEF6EB]"
              border="border-[#FEF0DD]"
            />

            <StatCard
              value="24/7"
              label="Support Available"
              bg="bg-[#FBFEFD]"
              iconBg="bg-[#E2FFF5]"
              border="border-[#CDF4E6]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetMSITracker

function StatCard({
  value,
  label,
  bg,
  iconBg,
  border,
  icon,
}: {
  value: string
  label: string
  bg: string
  iconBg: string
  border?: string
  icon?: React.ReactNode
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[16px] border ${border} p-6 text-center ${bg}`}
    >
      <div
        className={`mb-4 flex size-12 items-center justify-center rounded-md ${iconBg}`}
      >
        {icon}
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
