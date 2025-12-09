import React from 'react'

const AboutHero = () => {
  return (
     <section className="relative w-full mt-24 lg:h-[544px] h-[444px] about-bg">

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white">
     
        <h2 className="text-4xl md:text-5xl lg:text-[72px] !arial-font font-bold mb-4 sm:mb-6">About Us</h2>
        <p className="text-center max-w-[706px] text-base md:text-lg font-inter">
          We combine creativity and technology to build smart digital solutions that 
move your business forward.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
