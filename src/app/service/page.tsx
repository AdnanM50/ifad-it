import MeetITracker from "./_components/meetITracker"
import ServiceHero from "./_components/serviceHerosection"
import VehicleTypes from "./_components/vehicleTypes"
import WhyITracker from "./_components/whyITracker"

const Page = () => {
  return (
    <div className="mt-[85px] lg:mt-[100px]">
      <ServiceHero />
      <MeetITracker />
      <WhyITracker />
      <VehicleTypes />
    </div>
  )
}

export default Page 