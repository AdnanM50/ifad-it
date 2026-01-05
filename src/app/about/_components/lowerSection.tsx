import Link from "next/link"

const CTASection = ({ data }: { data: any }) => {
  if (!data) return null

  return (
    <div className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 z-20">
      
      {/* BACKGROUND (UNCHANGED) */}
      <div className="absolute bg-[url('/background.png')] bg-cover bg-center bg-no-repeat inset-0 bg-[#F36A10] "></div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] arial-font font-bold text-white mb-3 sm:mb-4 leading-tight md:leading-snug">
          {data.title}
        </h2>

        <p className="sm:text-lg text-base text-white mb-6 sm:mb-8 font-inter mx-auto">
          {data.subTitle}
        </p>

        {data.cta?.href && (
          <Link
            href={data.cta.href}
            target={data.cta.isExternal ? "_blank" : "_self"}
            className="inline-block bg-white text-[#F36A10] font-medium font-inter py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm sm:text-base"
          >
            {data.cta.text}
          </Link>
        )}
      </div>
    </div>
  )
}

export default CTASection
