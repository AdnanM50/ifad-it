'use client';

import CountingAnimation from '@/components/common/CountingAnimation';
import MissionVisionSection from './missionSection';

const PartStory = () => {


  return (
    <>
    <div className="py-12 md:py-[120px] xl:px-0 px-2 container">
      <div className={`flex flex-col md:flex-row items-center gap-8`}>
        
  
        <div className={`w-full md:w-1/2 space-y-4`}>
          <h3 className="section-title">Our Story</h3>
          <h1 className="section-subtitle">
            Empowering Businesses Through <span className="text-orange-500">Smart IT Solutions</span>
          </h1>
          <p className="section-description mt-4 ">
            Founded with a vision to revolutionize the IT landscape, we've grown from a small startup to a trusted partner for businesses worldwide. Our journey is defined by innovation, dedication, and an unwavering commitment to excellence.
          </p>
          <p className="section-description mt-4 ">
            We think tech should be easy to use, flexible, and game-changing. Every solution we build isn't just about solving today's problems; it's also about getting ready for what's coming next.
          </p>
        </div>
        
        {/* Right Image */}
        <div className={`w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg`}>
          <img 
            src="/SectionImageContainer.png"
            alt="Team collaborating on IT solutions"
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' text-anchor='middle' fill='%236b7280'%3EImage Loading...%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
      </div>
     
    </div>
     <CountingAnimation />
      <MissionVisionSection />
    </>
  );
};

export default PartStory;