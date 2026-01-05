"use client";

import Image from "next/image";

interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: {
    url: string;
    alternativeText?: string | null;
  };
}

interface ItProgramProps {
  data: {
    title: string;
    headline: string;
    subTitle: string;
    values: ValueItem[];
  };
}

const ItProgram = ({ data }: ItProgramProps) => {
  if (!data) return null;

  return (
    <section className="bg-white py-20 sm:py-[120px]">
      <div className="container px-2 xl:px-0">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-title capitalize!">{data.title}</p>

          <h2 className="mt-3 section-subtitle">{data.headline}</h2>

          <p className="mt-3 section-description">{data.subTitle}</p>
        </div>

        <div className="max-w-[1260px] mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.values.map((item) => {
              const sections = item.description.split("\n\n");
              const intro = sections[0];
              const bullets = sections.slice(1).join("\n").split("\n");

              return (
                <div
                  key={item.id}
                  className="rounded-3xl card-hover2 duration-500 border flex sm:flex-row flex-col gap-5 border-[#F1F5F9] bg-white px-6 py-8"
                >

                  <div className="">
                    <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#FFFAF5]">
                      <Image
                        src={item.icon.url}
                        alt={item.icon.alternativeText || item.title}
                        width={1000}
                        height={1000}
                        className="size-8 object-fill"
                      />
                    </div>
                  </div>

                  <div className="">
                    <h3 className="text-lg sm:text-2xl font-semibold font-inter text-[#1A1A1A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base text-[#6F7377] font-inter leading-relaxed ">
                      {intro}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {bullets.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm sm:text-base text-[#6F7377] font-inter leading-relaxed"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M7.50032 18.3337H12.5003C16.667 18.3337 18.3337 16.667 18.3337 12.5003V7.50032C18.3337 3.33366 16.667 1.66699 12.5003 1.66699H7.50032C3.33366 1.66699 1.66699 3.33366 1.66699 7.50032V12.5003C1.66699 16.667 3.33366 18.3337 7.50032 18.3337Z"
                              stroke="#F36A10"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.45801 9.99994L8.81634 12.3583L13.5413 7.6416"
                              stroke="#F36A10"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItProgram;
