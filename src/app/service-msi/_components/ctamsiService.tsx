'use client'

import Link from 'next/link'

const ServiceMSICTA = () => {
  return (
    <div className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 z-50">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat bg-[#F36A10]" />

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] arial-font font-bold text-white mb-3 sm:mb-4 leading-tight md:leading-snug">
          Ready to Transform How You Manage Vehicles?
        </h2>

        <p className="sm:text-lg text-base text-white mb-6 sm:mb-8 font-inter mx-auto">
          Explore iTracker’s full features, pricing, and installation options.
        </p>

        <Link
          href="tel:09612114444"
          className="inline-block bg-white text-[#F36A10] font-medium font-inter py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm sm:text-base"
        >
          Call: 09612114444
        </Link>
      </div>
    </div>
  )
}

export default ServiceMSICTA
