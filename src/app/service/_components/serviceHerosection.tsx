'use client'

import PrimaryButton from "@/components/common/primary-button"

const ServiceHero = ({ data }: { data: any }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#ECF8FE] via-[#F7FBFF] to-[#FFF6EC]">
      {/* LEFT BLUR CIRCLE */}
      <div className="pointer-events-none absolute left-[-80px] top-[180px] h-[233px] w-[250px] rounded-full bg-[#94A492] blur-[300px]" />

      {/* RIGHT BLUR CIRCLE */}
      <div className="pointer-events-none absolute right-[-80px] top-[220px] h-[233px] w-[250px] rounded-full bg-[#F3680C] blur-[250px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-26 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1046px]  text-center">
          {/* HEADING */}
          <h1 className="text-3xl font-extrabold arial-font tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl xl:text-[72px]">
            Bangladesh&apos;s Most Trusted
            <span className="mt-2 block text-[#F3680C]">
              GPS Vehicle Tracking Solution
            </span>
          </h1>

          <p className="mx-auto mt-6  text-sm sm:text-base lg:text-lg leading-relaxed font-inter font-normal text-[#6F7377]">
            Real-time fleet monitoring. Fuel savings up to 30%.
            Complete vehicle security.
            <br />
            Powered by IFAD Group&apos;s 40+ years of excellence.
          </p>

          {/* FEATURES */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-3 text-sm text-[#374151]">
            <Feature icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 8.40222C0.764407 4.16163 4.21376 0.735638 8.45435 0.750045C12.6949 0.764453 16.1209 4.21381 16.1065 8.45439V8.54135C16.0543 11.2979 14.5152 13.8457 12.6283 15.837C11.5491 16.9576 10.344 17.9497 9.03696 18.7935C8.68746 19.0958 8.16906 19.0958 7.81957 18.7935C5.87107 17.5253 4.16093 15.924 2.76739 14.0631C1.52535 12.4403 0.820165 10.4707 0.75 8.42831L0.75 8.40222Z" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.42864 11.011C9.78774 11.011 10.8895 9.9092 10.8895 8.5501C10.8895 7.191 9.78774 6.08923 8.42864 6.08923C7.06954 6.08923 5.96777 7.191 5.96777 8.5501C5.96777 9.9092 7.06954 11.011 8.42864 11.011Z" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            } text="Real-Time Tracking" />
            <Feature icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 17L13.5 8.5L8.5 13.5L2 7" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 17H22V11" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            } text="30% Cost Reduction" />
            <Feature icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V7.12006C20.6102 5.89006 19.6702 4.53006 18.5202 4.10006L13.5302 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006Z" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.0498 11.8701L10.6598 13.4801L14.9598 9.18005" stroke="#F36A10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            } text="24/7 Security" />
          </div>

          {/* CTA */}
          <div className="mt-10 mx-auto flex justify-center items-center">
            {/* <button className="rounded-md bg-[#F3680C] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#e05f0a]">
              Request a Free Demo
            </button> */}
            <PrimaryButton children="Request a Free Demo" className="w-fit " onClick={() => {}} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServiceHero

function Feature({ text,icon }: { text: string, icon: any }) {
  return (
    <div className="flex items-center gap-2">
      <div className="">{icon}</div>
      <span className="text-lg font-medium font-inter text-[#1A1A1A]">{text}</span>
    </div>
  )
}
