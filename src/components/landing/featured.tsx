'use client';

import Image from 'next/image';
import React from 'react';

interface FeaturedLogo {
  name: string;
  src: string;
  alt: string;
}

const FeaturedOn: React.FC = () => {
  const logos: FeaturedLogo[] = [
    { name: "Clutch", src: "/clutch-seeklogo 1.png", alt: "Clutch Logo" },
    { name: "প্রথম আলো", src: "/download 1.png", alt: "Prothom Alo Logo" },
    { name: "The Daily Star", src: "/download (1) 1.png", alt: "The Daily Star Logo" },
    { name: "কালের কণ্ঠ", src: "/Link → kaler-kantho.png", alt: "Kaler Kontho Logo" },
    { name: "Clutch", src: "/clutch-seeklogo 1.png", alt: "Clutch Logo" },
    { name: "প্রথম আলো", src: "/download 1.png", alt: "Prothom Alo Logo" },
    { name: "The Daily Star", src: "/download (1) 1.png", alt: "The Daily Star Logo" },
    { name: "কালের কণ্ঠ", src: "/Link → kaler-kantho.png", alt: "Kaler Kontho Logo" },
    { name: "Clutch", src: "/clutch-seeklogo 1.png", alt: "Clutch Logo" },
    { name: "প্রথম আলো", src: "/download 1.png", alt: "Prothom Alo Logo" },
    { name: "The Daily Star", src: "/download (1) 1.png", alt: "The Daily Star Logo" },
    { name: "কালের কণ্ঠ", src: "/Link → kaler-kantho.png", alt: "Kaler Kontho Logo" },
  ];

  return (
    <section className="py-12 md:py-[119px] px-2 lg:px-0 bg-white">
      <h2 className="section-subtitle text-center mb-8">Featured On</h2>

      {/* Marquee Wrapper */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-8 md:gap-[110px]">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center">
              <Image
                width={1000}
                height={1000}
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
