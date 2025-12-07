import Image from "next/image";

const TrustedSection = () => {
  const trustedCompanies = [
    {
      name: "Interlock",
      icon: '/icons/1st.svg',
      type: 'image' as const,
    },
    {
      name: "Alt+Shift",
      icon: '/icons/2nd.png',
      type: 'image' as const,
    },
    {
      name: "BoltShift",
      icon: "/icons/3rd.png",
      type: 'image' as const,
    },
    {
      name: "GlobalBank",
      icon: '/icons/4th.png',
      type: 'image' as const,
    },
    {
      name: "Lightbox",
      icon: '/icons/5th.png',
      type: 'image' as const,
    },
    {
      name: "Spherule",
      icon: '/icons/6th.svg',
      type: 'image' as const,
    },
  ];

  const marqueeItems = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Trusted by 100+ Companies
      </h2>

      {/* Marquee */}
      <div className="bg-[#F36A10] py-8 overflow-hidden">
        <div className="flex items-center gap-6 sm:gap-12 whitespace-nowrap animate-marquee">

          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mx-8 min-w-max "
            >
              {item.type === 'image' ? (
                <Image 
                  src={item.icon as string} 
                  alt={item.name} 
                  width={1000} 
                  height={1000} 
                  className="w-[150px] h-[40px] object-contain" 
                />
              ) : (
                <div className=" flex items-center justify-center">
                  {item.icon}
                </div>
              )}
              {/* <span className="text-white font-semibold text-lg">{item.name}</span> */}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustedSection;