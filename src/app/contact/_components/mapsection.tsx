'use client';

const MapSection = ({ data }: { data: any }) => {
 
  return (
    <div className="py-12 px-4 container">
      <h2 className="text-xl sm:text-3xl text-[#1A1A1A] arial-font md:text-[40px] font-bold text-center mb-6 lg:mb-14">Find Us Here</h2>
      
      <div className=" rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-[469px] md:h-[628px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.233772569467!2d90.40151651481476!3d23.78061538462926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754b5555555%3A0x1234567890abcdef!2sIPAD%20Tower%2C%20Plot%207%2C%20Tejgaon%20Industrial%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IPAD Tower Location"
            className="border-0"
          ></iframe>
          
          {/* Overlay elements for styling consistency */}
          <div className="absolute top-2 left-2 bg-white rounded-md p-2 shadow-sm">
            <div className="text-xs font-medium">IPAD Tower, Plot 7 (new)</div>
            <div className="text-xs text-gray-600">Tejgaon Industrial Area, Dhaka</div>
          </div>
          
          {/* Directions button */}
          <div className="absolute top-2 right-2 bg-white rounded-md p-2 shadow-sm cursor-pointer hover:bg-gray-50">
            <div className="flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L7 11H5v2a7 7 0 01-1.95-13.75z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium">Directions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;