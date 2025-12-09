"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Smith",
      role: "Engineer",
      quote:
        "The Information Technology (IT) field offers a broad range of careers and opportunities. IT professionals use technology, systems, and software to design, develop, manage, and maintain the infrastructure.",
      image: "/Rectangle.png",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      quote:
        "IFAD IT LTD delivered our project ahead of schedule with zero bugs. Their team is highly skilled and communicative throughout the process.",
      image: "/Rectangle.png",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "CTO",
      quote:
        "Their innovative approach to solving complex IT challenges saved us time and money. I highly recommend them for any enterprise-level project.",
      image: "/Rectangle.png",
    },
  ];

  return (
    <section className="py-12 md:py-[120px] px-2 lg:px-0 bg-[#FFFAF5]">
      {/* Tagline */}
      <div className="max-w-[1362px] w-full mx-auto">
        <div className="text-center mb-4">
          <span className="text-[#F36A10] text-sm font-medium uppercase tracking-wide">
            Testimonial
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          What Our Clients Say
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          At IFAD IT LTD, our clients’ success stories reflect the trust and
          value we deliver through innovative IT solutions.
        </p>

        {/* Swiper Carousel */}
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="relative"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8  rounded-xl">
                  {/* Client Image */}
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-64 h-64 rounded-lg  border-4 border-[#F36A10]">
                      <Image
                        width={500}
                        height={1000}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-[370px] h-[436px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="w-full md:w-2/3">
                    {/* Quote Mark */}
                    <div className="text-[#F36A10] text-5xl mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <path
                          d="M14.1 53.1001C11.1 49.8001 9.30005 46.2001 9.30005 40.2001C9.30005 29.7001 16.8001 20.4001 27.3001 15.6001L30.0001 19.5001C20.1001 24.9001 18.0001 31.8001 17.4001 36.3001C18.9001 35.4001 21.0001 35.1001 23.1001 35.4001C28.5001 36.0001 32.7001 40.2001 32.7001 45.9001C32.7001 48.6001 31.5001 51.3001 29.7001 53.4001C27.6001 55.5001 25.2001 56.4001 22.2001 56.4001C18.9001 56.4001 15.9001 54.9001 14.1 53.1001ZM44.1001 53.1001C41.1001 49.8001 39.3001 46.2001 39.3001 40.2001C39.3001 29.7001 46.8001 20.4001 57.3001 15.6001L60.0001 19.5001C50.1001 24.9001 48.0001 31.8001 47.4001 36.3001C48.9001 35.4001 51.0001 35.1001 53.1001 35.4001C58.5001 36.0001 62.7001 40.2001 62.7001 45.9001C62.7001 48.6001 61.5001 51.3001 59.7001 53.4001C57.9001 55.5001 55.2001 56.4001 52.2001 56.4001C48.9001 56.4001 45.9001 54.9001 44.1001 53.1001Z"
                          fill="#F9C08F"
                        />
                      </svg>
                    </div>
                    <p className="text-[#1A1A1A] text-lg sm:text-[22px] font-inter max-w-[666px] leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M18.3067 4.68002L20.6533 9.37335C20.9733 10.0267 21.8267 10.6534 22.5467 10.7734L26.8 11.48C29.52 11.9334 30.16 13.9067 28.2 15.8534L24.8933 19.16C24.3333 19.72 24.0267 20.8 24.2 21.5734L25.1467 25.6667C25.8933 28.9067 24.1733 30.16 21.3067 28.4667L17.32 26.1067C16.6 25.68 15.4133 25.68 14.68 26.1067L10.6933 28.4667C7.84 30.16 6.10667 28.8934 6.85333 25.6667L7.8 21.5734C7.97333 20.8 7.66667 19.72 7.10667 19.16L3.8 15.8534C1.85333 13.9067 2.48 11.9334 5.2 11.48L9.45333 10.7734C10.16 10.6534 11.0133 10.0267 11.3333 9.37335L13.68 4.68002C14.96 2.13335 17.04 2.13335 18.3067 4.68002Z"
                            fill="#FFC107"
                          />
                        </svg>
                      ))}
                    </div>

               
                    <h3 className="text-2xl sm:text-[32px] font-semibold text-[#1A1A1A]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#6F7377] text-xl">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Arrows */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <button className=" size-10 sm:size-16 flex items-center justify-center rounded-full  border-2 border-[#F36A10] text-[#F36A10]  transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                >
                  <path
                    d="M10.1715 1L1.58574 9.58579C0.804694 10.3668 0.804694 11.6332 1.58574 12.4142L10.1715 21"
                    stroke="#F36A10"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M26.172 11L2.172 11"
                    stroke="#F36A10"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
              <button className=" size-10 sm:size-16 flex items-center justify-center rounded-full  border-2 border-[#F36A10] text-[#000000] hover:bg-[#F36A10] hover:text-white transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                >
                  <path
                    d="M17.0002 1L25.586 9.58579C26.3671 10.3668 26.3671 11.6332 25.586 12.4142L17.0002 21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1 11L25 11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;