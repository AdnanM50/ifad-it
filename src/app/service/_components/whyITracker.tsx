'use client'

import {
  Building2,
  Target,
  ShieldAlert,
  Fuel,
  Gauge,
  MapPin,
} from 'lucide-react'

const WhyITracker = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-[#F3680C]">
            Why iTracker Stands Out
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#1C1C1C] sm:text-4xl">
            Built for Bangladesh.
            <br />
            Trusted Across Industries
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#6B7280] sm:text-base">
            Delivering reliable, scalable solutions designed to meet the needs
            of businesses nationwide.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Building2}
            title="Backed by IFAD Group"
            description="40+ years of innovation in Bangladesh. Choose iTracker knowing you're working with a reliable solution from one of the top groups in the country."
          />

          <FeatureCard
            icon={Target}
            title="Real-Time Precision"
            description="Track every vehicle with pinpoint GPS accuracy. Monitor speed, location, stops, and routes—all from one intuitive dashboard accessible anywhere."
          />

          <FeatureCard
            icon={ShieldAlert}
            title="Instant Security Alerts"
            description="Receive SMS and app alerts for unauthorized movement, geofence breaches, speeding, and more. Remote engine shutdown instantly secures your assets."
          />

          <FeatureCard
            icon={Fuel}
            title="Fuel & Cost Savings"
            description="Optimize routes, eliminate idle time, and reduce fuel waste. Businesses report up to 30% cost reduction within the first year."
          />

          <FeatureCard
            icon={Gauge}
            title="Driver Safety Monitoring"
            description="Track harsh braking, speeding, and driving patterns. Create a safer culture while reducing vehicle wear and insurance costs."
          />

          <FeatureCard
            icon={MapPin}
            title="Nationwide Installation & Support"
            description="Professional installation across Bangladesh. 24/7 local support team ready to help—because your operations never stop."
          />
        </div>
      </div>
    </section>
  )
}

export default WhyITracker

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFF1E8] text-[#F3680C]">
        <Icon size={20} />
      </div>

      <h3 className="mt-4 text-base font-semibold text-[#1C1C1C]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
        {description}
      </p>
    </div>
  )
}
