import MeetITracker from "./_components/meetITracker"
import ServiceHero from "./_components/serviceHerosection"
import WhyITracker from "./_components/whyITracker"

const Page = () => {
  return (
    <div className="mt-[85px] lg:mt-[100px]">
      <ServiceHero />
      <MeetITracker />
      {/* <WhyITracker /> */}
    </div>
  )
}

export default Page 