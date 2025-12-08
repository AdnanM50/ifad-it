'use client';

import React from 'react';

interface FeaturedLogo {
  name: string;
  src: string; // Image path or URL
  alt: string;
}

const FeaturedOn: React.FC = () => {
  const logos: FeaturedLogo[] = [
    {
      name: "Clutch",
      src: "/logos/clutch.svg", // Place in public/logos/
      alt: "Clutch Logo",
    },
    {
      name: "প্রথম আলো",
      src: "/logos/prothom-alo.svg",
      alt: "Prothom Alo Logo",
    },
    {
      name: "The Daily Star",
      src: "/logos/daily-star.svg",
      alt: "The Daily Star Logo",
    },
    {
      name: "কালের কণ্ঠ",
      src: "/logos/kaler-kontho.svg",
      alt: "Kaler Kontho Logo",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-white ">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Featured On</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedOn;