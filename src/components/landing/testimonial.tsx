'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
      quote: "The Information Technology (IT) field offers a broad range of careers and opportunities. IT professionals use technology, systems, and software to design, develop, manage, and maintain the infrastructure.",
      image: "/images/testimonials/alex-smith.jpg", 
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Manager",
      quote: "IFAD IT LTD delivered our project ahead of schedule with zero bugs. Their team is highly skilled and communicative throughout the process.",
      image: "/images/testimonials/sarah-johnson.jpg",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "CTO",
      quote: "Their innovative approach to solving complex IT challenges saved us time and money. I highly recommend them for any enterprise-level project.",
      image: "/images/testimonials/michael-lee.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-[#FFFAF5]">
      {/* Tagline */}
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
        At IFAD IT LTD, our clients’ success stories reflect the trust and value we deliver through innovative IT solutions.
      </p>

      {/* Swiper Carousel */}
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
                  <div className="relative w-64 h-64 rounded-lg overflow-hidden border-4 border-[#F36A10]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="w-full md:w-2/3">
                  {/* Quote Mark */}
                  <div className="text-[#F36A10] text-5xl mb-4">“</div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#F36A10"
                        viewBox="0 0 24 24"
                        className="mr-1"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87-.69 6.88L12 18.54l-4.34 2.46-.69-6.88-5-4.87 6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button className="swiper-button-prev w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-[#F36A10] text-[#F36A10] hover:bg-[#F36A10] hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M15 19l-7-7 7-7z"/>
              </svg>
            </button>
          </div>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button className="swiper-button-next w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-[#F36A10] text-[#F36A10] hover:bg-[#F36A10] hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M9 5l7 7-7 7z"/>
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;