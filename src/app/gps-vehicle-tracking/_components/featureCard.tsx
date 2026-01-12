import { icons } from "lucide-react"

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: any
  title: string
  description: string
}) {
  return (
    <div className="card-hover2 rounded-3xl border border-[#EBECF0] transition-shadow duration-1000 bg-white py-8 px-6 ">
      <div className="flex size-16 items-center justify-center rounded-full bg-[#FFFAF5] text-[#F3680C]">
        {icon}
      </div>

      <h3 className="mt-6 text-base font-inter md:text-2xl font-semibold text-[#1A1A1A]">
        {title}
      </h3>

      <p className="mt-3 text-sm md:text-base leading-relaxed font-inter text-[#6F7377]">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard