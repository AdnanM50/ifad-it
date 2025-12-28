'use client'

import PrimaryButton from "@/components/common/primary-button"

const MeetITracker = ({ data ,link }: { data: any ,link:any }) => {
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

            {/* <button className="mt-8 rounded-md bg-[#F3680C] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#e05f0a]">
              Explore iTracker Solutions
            </button> */}
            <PrimaryButton className="mt-8" children="Explore iTracker Solutions" />
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard
              value="200+"
              label="Companies Served"
              bg="bg-[#FAFDFF]"
              iconBg="bg-[#EBF7FE]"
              border="border-[#DDF0FD]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 22V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V22H6Z" stroke="#3BA8F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H6" stroke="#3BA8F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H18" stroke="#3BA8F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 6H14" stroke="#3BA8F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 10H14" stroke="#3BA8F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 14H14" stroke="#3BA8F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 18H14" stroke="#3BA8F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
            />

            <StatCard
              value="500+"
              label="Vehicles Tracked"
              bg="bg-[#FFFBFA]"
              iconBg="bg-[#FDEFEC]"
              border="border-[#FDEBE7]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 17H21C21.6 17 22 16.6 22 16V13C22 12.1 21.3 11.3 20.5 11.1C18.7 10.6 16 10 16 10C16 10 14.7 8.6 13.8 7.7C13.3 7.3 12.7 7 12 7H5C4.4 7 3.9 7.4 3.6 7.9L2.2 10.8C2.06758 11.1862 2 11.5917 2 12V16C2 16.6 2.4 17 3 17H5" stroke="#EF6043" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z" stroke="#EF6043" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 17H15" stroke="#EF6043" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z" stroke="#EF6043" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
            />

            <StatCard
              value="40+"
              label="Years of IFAD Excellence"
              bg="bg-[#FFFDFA]"
              iconBg="bg-[#FEF6EB]"
              border="border-[#FEF0DD]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#F5940B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#F5940B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13" stroke="#F5940B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#F5940B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
            />

            <StatCard
              value="24/7"
              label="Support Available"
              bg="bg-[#FBFEFD]"
              iconBg="bg-[#E2FFF5]"
              border="border-[#CDF4E6]"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke="#36D399" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 9.16003C7 8.23003 7.76 7.46997 8.69 7.46997C9.62 7.46997 10.38 8.23003 10.38 9.16003C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38" stroke="#36D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.0398 13.76V8.05003C16.0398 7.79003 15.8698 7.55997 15.6198 7.48997C15.3698 7.41997 15.0998 7.51997 14.9598 7.73997C14.2398 8.89997 13.4598 10.22 12.7798 11.38C12.6698 11.57 12.6698 11.82 12.7798 12.01C12.8898 12.2 13.0998 12.3199 13.3298 12.3199H16.9998" stroke="#36D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetITracker

function StatCard({
  value,
  label,
  bg,
  iconBg,
  border,
  icon
}: {
  value: string
  label: string
  bg: string
  iconBg: string
  border?: string
  icon?: any
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[16px] border ${border} p-6 text-center ${bg}`}
    >
      {/* ICON PLACEHOLDER */}
      <div
        className={`mb-4 flex size-12 items-center justify-center rounded-md ${iconBg}`}
      >
       {icon}
      </div>

      <h3 className="text-xl lg:text-2xl font-inter font-bold text-[#1A1A1A]">{value}</h3>
      <p className="mt-1 text-xs lg:text-base font-inter text-[#6F7377]">{label}</p>
    </div>
  )
}
