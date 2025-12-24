'use client'

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ECF8FE] via-[#F7FBFF] to-[#FFF6EC]">
      {/* LEFT BLUR CIRCLE */}
      <div className="pointer-events-none absolute left-[-80px] top-[180px] h-[233px] w-[250px] rounded-full bg-[#94A492] blur-[300px]" />

      {/* RIGHT BLUR CIRCLE */}
      <div className="pointer-events-none absolute right-[-80px] top-[220px] h-[233px] w-[250px] rounded-full bg-[#F3680C] blur-[250px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-26 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* HEADING */}
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1C1C1C] sm:text-4xl md:text-5xl">
            Bangladesh&apos;s Most Trusted
            <span className="mt-2 block text-[#F3680C]">
              GPS Vehicle Tracking Solution
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#6B7280] sm:text-base">
            Real-time fleet monitoring. Fuel savings up to 30%.
            Complete vehicle security.
            <br />
            Powered by IFAD Group&apos;s 40+ years of excellence.
          </p>

          {/* FEATURES */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#374151]">
            <Feature text="Real-Time Tracking" />
            <Feature text="30% Cost Reduction" />
            <Feature text="24/7 Security" />
          </div>

          {/* CTA */}
          <div className="mt-10">
            <button className="rounded-md bg-[#F3680C] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#e05f0a]">
              Request a Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#F3680C]" />
      <span>{text}</span>
    </div>
  )
}
