import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className='bg-[#FCFCFD] py-12 md:py-[120px] px-2 lg:px-0'>
      <div className="container px-2 sm:px-0 flex flex-col lg:flex-row gap-12 items-center">
        

        <div className="relative w-full lg:w-1/2">
          {/* Badge */}
          <div className="absolute md:flex hidden -top-16 left-0 z-30">
            <div className="bg-orange-500 text-white rounded-full w-20 h-20 sm:w-40 sm:h-40 border-4 border-white flex flex-col items-center justify-center text-center  font-bold">
              <span className="text-[40px] arial-font">10+</span>
              <span className="text-lg font-inter ">Years of Experience</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-lg  ">
            <Image
              src="/about.png"
              alt="Team Meeting"
              width={578}
              height={611}
              className="w-full h-auto xl:w-[578px] relative z-20 xl:h-[611px]  mx-auto object-cover"
            />
            
            {/* Dotted Border Effect - using your obj.png image */}
            <div className="absolute md:flex hidden -bottom-6 right-6 z-10">
              <Image
                src="/obj.png"
                alt="Dotted Border"
                width={150}
                height={150}
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 ">
          <h3 className="text-[#F36A10] text-sm font-semibold font-inter uppercase tracking-wider">
            About IFAD Information & Technology Limited
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold !arial-font text-[#1A1A1A] leading-tight mt-6 mb-5">
            Your Trusted IT Partner in Bangladesh
          </h2>
          <p className="text-gray-600 leading-relaxed font-inter mb-3">
            Innovative, Scalable, and Secure IT Solutions for Every Business. Selecting the right IT company in Bangladesh can significantly enhance how your business operates. At IFAD IT LTD, we bring over 10 years of proven experience helping startups, enterprises, and government organizations build smart, future-ready IT infrastructures.
          </p>
          <p className="text-gray-600 leading-relaxed font-inter">
            Our approach combines technology, strategy, and innovation to ensure every solution we build adds measurable value to your operations.
          </p>

          <div className="mt-7">
            <h4 className="font-semibold text-[#1A1A1A] text-lg font-inter mb-3">We help you:</h4>
            <ul className="space-y-3">
              {[
                "Analyze your goals and digital challenges.",
                "Design IT solutions that strike a balance between performance and budget.",
                "Build scalable and easily maintainable systems that grow with your business."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[#F36A10] mr-2 "><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M14 2.33325C7.57171 2.33325 2.33337 7.57159 2.33337 13.9999C2.33337 20.4283 7.57171 25.6666 14 25.6666C20.4284 25.6666 25.6667 20.4283 25.6667 13.9999C25.6667 7.57159 20.4284 2.33325 14 2.33325ZM19.5767 11.3166L12.9617 17.9316C12.7984 18.0949 12.5767 18.1883 12.3434 18.1883C12.11 18.1883 11.8884 18.0949 11.725 17.9316L8.42337 14.6299C8.08504 14.2916 8.08504 13.7316 8.42337 13.3933C8.76171 13.0549 9.32171 13.0549 9.66004 13.3933L12.3434 16.0766L18.34 10.0799C18.6784 9.74159 19.2384 9.74159 19.5767 10.0799C19.915 10.4183 19.915 10.9666 19.5767 11.3166Z" fill="#F36A10"/>
</svg></span>
                  <span className="text-[#1A1A1A] text-lg font-inter">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-6 bg-[#F36A10] text-xl hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition duration-300">
            Read More About Us
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 bg-orange-50 py-12">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-around items-center gap-8">
          {[
            { label: "Years of Experience", value: "10+" },
            { label: "Happy Clients", value: "200+" },
            { label: "Team Members", value: "50+" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F36A10] font-inter">
                {stat.value}
              </div>
              <div className="text-[#6F7377] text-base font-inter mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutSection