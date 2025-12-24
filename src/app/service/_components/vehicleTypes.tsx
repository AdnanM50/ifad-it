'use client'

import {
  Car,
  Truck,
  Bike,
  Construction,
  Ship,
} from 'lucide-react'

const vehicleTypes = [
  {
    icon: Car,
    title: 'Cars Private Vehicles',
    description: 'Personal security, theft recovery, and family safety.',
  },
  {
    icon: Truck,
    title: 'Commercial Fleets',
    description: 'Logistics, delivery, and transportation management.',
  },
  {
    icon: Bike,
    title: 'Motorcycles Bikes',
    description: 'Compact trackers for two-wheelers.',
  },
  {
    icon: Construction,
    title: 'Heavy Equipment',
    description: 'Construction machinery and asset protection.',
  },
  {
    icon: Ship,
    title: 'Ships Marine Vessels',
    description: 'Maritime tracking and compliance.',
  },
]

export default function VehicleTypes() {
  return (
    <section className="bg-white py-24 lg:py-[120px]">
      <div className="container">
        {/* HEADER */}
        <div className=" text-center">
          <p className="section-title capitalize!">
            Versatile Solutions
          </p>

          <h2 className="mt-3 section-subtitle">
            Perfect For Every Vehicle Type
          </h2>

          <p className="mt-4 section-description">
            Engineered to suit cars, bikes, trucks, and all modern vehicle
            models.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {vehicleTypes.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl border border-[#E5E7EB] bg-white px-6 py-8 text-center "
              >
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#FFF1E8] text-[#F3680C]">
                  <Icon size={22} />
                </div>

                <h3 className="sm:text-xl textbase font-inter font-semibold text-[#1A1A1A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-base font-inter leading-relaxed text-[#6B7280]">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
