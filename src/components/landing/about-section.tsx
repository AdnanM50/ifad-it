import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className='bg-[#FCFCFD] py-12 md:py-[120px]'>
      <div className="container px-2 sm:px-0 flex flex-col lg:flex-row gap-12 items-center">
        

        <div className="relative w-full lg:w-1/2">
          {/* Badge */}
          <div className="absolute -top-16 left-0 z-30">
            <div className="bg-orange-500 text-white rounded-full w-20 h-20 sm:w-40 sm:h-40 border-4 border-white flex flex-col items-center justify-center text-center text-sm font-bold">
              <span className="text-xl">10+</span>
              <span className="text-xs mt-1">Years of Experience</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-lg  ">
            <Image
              src="/about.png"
              alt="Team Meeting"
              width={578}
              height={611}
              className="w-full h-auto xl:w-[578px] relative z-20 xl:h-[611px] mx-auto object-cover"
            />
            
            {/* Dotted Border Effect - using your obj.png image */}
            <div className="absolute -bottom-6 right-6 z-10">
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
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
            About IFAD Information & Technology Limited
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Your Trusted IT Partner in Bangladesh
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Innovative, Scalable, and Secure IT Solutions for Every Business. Selecting the right IT company in Bangladesh can significantly enhance how your business operates. At IFAD IT LTD, we bring over 10 years of proven experience helping startups, enterprises, and government organizations build smart, future-ready IT infrastructures.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our approach combines technology, strategy, and innovation to ensure every solution we build adds measurable value to your operations.
          </p>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-3">We help you:</h4>
            <ul className="space-y-3">
              {[
                "Analyze your goals and digital challenges.",
                "Design IT solutions that strike a balance between performance and budget.",
                "Build scalable and easily maintainable systems that grow with your business."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">●</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
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
              <div className="text-4xl md:text-5xl font-bold text-orange-500">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm mt-1">
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