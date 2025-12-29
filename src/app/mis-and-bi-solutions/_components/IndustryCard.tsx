interface IndustryCardProps {
  image: string;
  icon: any;
  title: string;
  description: string;
  className?: string;
}


const IndustryCard = ({ title, description, image, icon }: IndustryCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#122349]/0 via-[#122349]/60 to-[#122349]" />

      <div className="absolute bottom-0 z-10 p-5">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-[#F3680C]">
          {icon}
        </div>

        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs text-[#E5E7EB]">
          {description}
        </p>
      </div>
    </div>
  )
}
export default IndustryCard

   {/* Bento Grid */}
        // <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        //   {/* Row 1 */}
        //   {/* Manufacturing - Large left card */}
        //   <div className="md:col-span-7 md:row-span-2 h-[280px] md:h-auto">
        //     <IndustryCard
        //       {...industries[0]}
        //       className="h-full"
        //     />
        //   </div>

        //   {/* Retail - Top right small */}
        //   <div className="md:col-span-5 h-[180px]">
        //     <IndustryCard
        //       {...industries[1]}
        //       className="h-full"
        //     />
        //   </div>

        //   {/* Healthcare - Right side tall */}
        //   <div className="md:col-span-5 md:row-span-2 h-[280px] md:h-auto">
        //     <IndustryCard
        //       {...industries[4]}
        //       className="h-full"
        //     />
        //   </div>

        //   {/* Row 2 */}
        //   {/* Financial - Bottom left small */}
        //   <div className="md:col-span-3 h-[180px]">
        //     <IndustryCard
        //       {...industries[2]}
        //       className="h-full"
        //     />
        //   </div>

        //   {/* Government - Bottom center small */}
        //   <div className="md:col-span-4 h-[180px]">
        //     <IndustryCard
        //       {...industries[3]}
        //       className="h-full"
        //     />
        //   </div>
        // </div>