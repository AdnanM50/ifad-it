'use client'

import PrimaryButton from '@/components/common/primary-button'

const MeetMSITracker = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container ">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="section-title capitalize!">
             The Challenge
            </p>

            <h2 className="mt-6 section-subtitle">
             Management Information
Systems Built for Your Business
            </h2>

            <p className="mt-4 section-description">
        Drowning in spreadsheets? Struggling to get accurate reports? Our MIS and Business 
Intelligence solutions transform raw data into clear, actionable insights that help 
you make faster, smarter decisions.
            </p>

            <p className="mt-4 section-description">
          We build custom systems that integrate with your existing operations—giving you 
real-time visibility into sales, inventory, finance, operations, and more.
            </p>

            {/* ✅ TRUSTED SINCE 2015 (ADDED PART) */}
            <div className="mt-8 flex max-w-sm items-center gap-3 rounded-[12px] bg-[#FBFAF9]  p-4">
              <div className="flex size-12 items-center justify-center rounded-[12px]  bg-[#FEF4EC]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 7H22V13" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>

              <div>
                <p className="text-lg font-inter font-semibold text-[#1A1A1A]">
                  Trusted Since 2015
                </p>
                <p className="text-sm text-[#6F7377]">
                  By enterprises and government organizations
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard
              value="Spreadsheet Chaos"
              label="Multiple versions, manual errors,
and no single source of truth."
              bg="bg-[#FFFAFA]"
              iconBg="bg-[#FDECEC]"
              border="border-[#FDE8E8]"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z" stroke="#EF4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20" stroke="#EF4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 13H10" stroke="#EF4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 13H16" stroke="#EF4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 17H10" stroke="#EF4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 17H16" stroke="#EF4343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              }
            />

            <StatCard
              value="Inaccurate Reports"
              label="Decisions made on outdated or
incomplete information."
              bg="bg-[#FFFDFA]"
              iconBg="bg-[#FEF7EB]"
              border="border-[#FEF1DD]"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 8V12" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 16H12.01" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              }
            />

            <StatCard
              value="Time Wasted"
              label="Hours spent compiling data
instead of analyzing it."
              bg="bg-[#FAFCFF]"
              iconBg="bg-[#EBF3FE]"
              border="border-[#DDE9FD]"
              icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 6V12L16 14" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              }
            />

            <StatCard
              value="Our Solution"
              label="Real-time insights, automated
reports, smarter decisions."
              bg="bg-[#FAFFFC]"
              iconBg="bg-[#EBFFF2]"
              border="border-[#C2FFDB]"
              icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="#00A23C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 7H22V13" stroke="#00A23C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              }
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
  start,
}: {
  value: string
  label: string
  bg: string
  iconBg: string
  border?: string
  start?: boolean
  icon?: React.ReactNode
}) {
  return (
    <div
      className={`flex flex-col items-start  justify-start rounded-[16px] border ${border} p-6 text-start ${bg}`}
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
