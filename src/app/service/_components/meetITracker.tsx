'use client'

const MeetITracker = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-medium text-[#F3680C]">
              Your Fleet Management Partner
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-[#1C1C1C] sm:text-4xl">
              Meet iTracker
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B7280] sm:text-base">
              Managing vehicles shouldn’t be stressful. iTracker delivers
              real-time GPS tracking, instant security alerts, and actionable
              insights—helping businesses across Bangladesh reduce costs,
              improve safety, and operate smarter.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B7280] sm:text-base">
              From single cars to 500+ vehicle fleets, iTracker serves logistics
              companies, transportation services, construction firms,
              government agencies, and private vehicle owners nationwide.
            </p>

            <button className="mt-8 rounded-md bg-[#F3680C] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#e05f0a]">
              Explore iTracker Solutions
            </button>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard
              value="200+"
              label="Companies Served"
              bg="bg-[#F5FBFF]"
              iconBg="bg-[#E8F4FF]"
            />

            <StatCard
              value="500+"
              label="Vehicles Tracked"
              bg="bg-[#FFF6EF]"
              iconBg="bg-[#FFE8D6]"
            />

            <StatCard
              value="40+"
              label="Years of IFAD Excellence"
              bg="bg-[#FFF9EE]"
              iconBg="bg-[#FFF1D6]"
            />

            <StatCard
              value="24/7"
              label="Support Available"
              bg="bg-[#F3FFFB]"
              iconBg="bg-[#E2FFF5]"
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
}: {
  value: string
  label: string
  bg: string
  iconBg: string
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border border-[#E5E7EB] p-6 text-center ${bg}`}
    >
      {/* ICON PLACEHOLDER */}
      <div
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md ${iconBg}`}
      >
        <span className="h-4 w-4 rounded-sm bg-[#F3680C]/70" />
      </div>

      <h3 className="text-xl font-bold text-[#1C1C1C]">{value}</h3>
      <p className="mt-1 text-xs text-[#6B7280]">{label}</p>
    </div>
  )
}
