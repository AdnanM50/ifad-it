import MeetITracker from "./_components/meetITracker"
import ServiceHero from "./_components/serviceHerosection"
import VehicleTypes from "./_components/vehicleTypes"
import WhyITracker from "./_components/whyITracker"
import WhyWeRecommend from "./_components/whyWeRecommend"

const Page = () => {
  return (
    <div className="mt-[85px] lg:mt-[100px]">
      <ServiceHero />
      <MeetITracker />
      <WhyITracker />
      <VehicleTypes />
      <WhyWeRecommend />
    </div>
  )
}

export default Page 