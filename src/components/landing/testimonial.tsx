"use client";

import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Smith",
    role: "Engineer",
    quote:
      "The Information Technology (IT) field offers a broad range of careers and opportunities. IT professionals use technology, systems, and software to design, develop, manage, and maintain the infrastructure.",
    image: "/Rectangle.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    quote:
      "IFAD IT LTD delivered our project ahead of schedule with zero bugs. Their team is highly skilled and communicative throughout the process.",
    image: "/Rectangle.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "CTO",
    quote:
      "Their innovative approach to solving complex IT challenges saved us time and money. I highly recommend them for any enterprise-level project.",
    image: "/Rectangle.png",
    rating: 5,
  },
];

const TestimonialCarousel = ({ data }: { data: any }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-[120px] bg-[#FFFAF5]">
      <div className="max-w-[1362px] overflow-hidden mx-auto px-4">

        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[#F36A10] text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Testimonial
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-4 sm:mb-6 text-balance">
          What Our Clients Say
        </h2>

        <p className="text-center text-[#6F7377] text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 leading-relaxed">
          At IFAD IT LTD, our clients&apos; success stories reflect the trust and value we deliver through innovative IT
          solutions.
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={true}
            loop={true}
            slidesPerView={1}
            className="w-full"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-lg md:rounded-2xl p-6 sm:p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-[1074px] mx-auto">

                    {/* IMAGE WITH LEFT-DOWN EFFECT FIXED */}
                    <div
                      className="relative w-52 sm:w-64 md:w-80 lg:w-96 mx-auto"
                      style={{ aspectRatio: "382 / 448" }}
                    >
                      {/* Orange Background (NOW moves LEFT + DOWN) */}
                      <div className="absolute left-0 bottom-0 w-full h-full bg-[#F36A10] rounded-[16px] -translate-x-3 translate-y-3"></div>

                      {/* Actual Image */}
                      <div className="relative w-full h-full overflow-hidden rounded-[16px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-[16px]"
                          priority
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="mb-4 sm:mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          viewBox="0 0 72 72"
                          fill="none"
                          className="sm:w-16 sm:h-16 md:w-20 md:h-20"
                        >
                          <path
                            d="M14.1 53.1001C11.1 49.8001 9.30005 46.2001 9.30005 40.2001C9.30005 29.7001 16.8001 20.4001 27.3001 15.6001L30.0001 19.5001C20.1001 24.9001 18.0001 31.8001 17.4001 36.3001C18.9001 35.4001 21.0001 35.1001 23.1001 35.4001C28.5001 36.0001 32.7001 40.2001 32.7001 45.9001C32.7001 48.6001 31.5001 51.3001 29.7001 53.4001C27.6001 55.5001 25.2001 56.4001 22.2001 56.4001C18.9001 56.4001 15.9001 54.9001 14.1 53.1001ZM44.1001 53.1001C41.1001 49.8001 39.3001 46.2001 39.3001 40.2001C39.3001 29.7001 46.8001 20.4001 57.3001 15.6001L60.0001 19.5001C50.1001 24.9001 48.0001 31.8001 47.4001 36.3001C48.9001 35.4001 51.0001 35.1001 53.1001 35.4001C58.5001 36.0001 62.7001 40.2001 62.7001 45.9001C62.7001 48.6001 61.5001 51.3001 59.7001 53.4001C57.9001 55.5001 55.2001 56.4001 52.2001 56.4001C48.9001 56.4001 45.9001 54.9001 44.1001 53.1001Z"
                            fill="#F9C08F"
                          />
                        </svg>
                      </div>

                      <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-[#1A1A1A] font-normal leading-relaxed mb-6 sm:mb-8">
                        {item.quote}
                      </p>

                      <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-5">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            fill="none"
                            className="sm:w-7 sm:h-7 md:w-8 md:h-8"
                          >
                            <path
                              d="M18.3067 4.68002L20.6533 9.37335C20.9733 10.0267 21.8267 10.6534 22.5467 10.7734L26.8 11.48C29.52 11.9334 30.16 13.9067 28.2 15.8534L24.8933 19.16C24.3333 19.72 24.0267 20.8 24.2 21.5734L25.1467 25.6667C25.8933 28.9067 24.1733 30.16 21.3067 28.4667L17.32 26.1067C16.6 25.68 15.4133 25.68 14.68 26.1067L10.6933 28.4667C7.84 30.16 6.10667 28.8934 6.85333 25.6667L7.8 21.5734C7.97333 20.8 7.66667 19.72 7.10667 19.16L3.8 15.8534C1.85333 13.9067 2.48 11.9334 5.2 11.48L9.45333 10.7734C10.16 10.6534 11.0133 10.0267 11.3333 9.37335L13.68 4.68002C14.96 2.13335 17.04 2.13335 18.3067 4.68002Z"
                              fill="#FFC107"
                            />
                          </svg>
                        ))}
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-[38px] font-semibold text-[#1A1A1A] mb-1 sm:mb-2">
                        {item.name}
                      </h3>

                      <p className="text-sm sm:text-base md:text-xl text-[#6F7377] font-normal">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="testimonial-prev absolute -left-2 md:-left-4 top-[40%] md:top-1/2 -translate-y-1/2 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 rounded-full border-2 md:border-3 border-[#F36A10] bg-white text-[#F36A10] flex items-center justify-center hover:bg-[#F36A10] hover:text-white transition-all duration-300 z-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 28 22" fill="none">
              <path d="M10.1715 1L1.58574 9.58579C0.804694 10.3668 0.804694 11.6332 1.58574 12.4142L10.1715 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M26.172 11L2.172 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <button className="testimonial-next absolute -right-2 md:-right-4 top-[40%] md:top-1/2 -translate-y-1/2 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 rounded-full border-2 md:border-3 bg-[#F36A10] text-white flex items-center justify-center hover:bg-white hover:text-[#F36A10] transition-all duration-300 border-[#F36A10] z-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 28 22" fill="none">
              <path d="M17.0002 1L25.586 9.58579C26.3671 10.3668 26.3671 11.6332 25.586 12.4142L17.0002 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M1 11L25 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
