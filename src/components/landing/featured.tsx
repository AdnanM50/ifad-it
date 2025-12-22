

import Image from 'next/image';


interface LogoItem {
  id: number;
  url: string;
  alternativeText: string | null;
}

const FeaturedOn = ({ data }: { data: any }) => {

  const logos: LogoItem[] = data?.logos || [];

  return (
    <section className="py-12 md:py-[119px] container px-2 lg:px-0 bg-white">
      <h2 className="section-subtitle text-center mb-8">
        {data?.heading}
      </h2>

      <div className="relative max-w-[899px] mx-auto overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[110px]">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              <Image
                width={1000}
                height={1000}
                src={logo.url}
                alt={logo.alternativeText || 'Featured logo'}
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
