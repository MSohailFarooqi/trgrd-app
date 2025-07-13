"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { testimonials } from "../data/TestimonialData";

function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    swiperInstance?.slidePrev();
  };

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  return (
    <>
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-white text-3xl md:text-4xl font-semibold">
              What are they saying?
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={isBeginning}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  isBeginning
                    ? "bg-gray-600 opacity-50 cursor-not-allowed"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                disabled={isEnd}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  isEnd
                    ? "bg-purple-400 opacity-50 cursor-not-allowed"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Testimonial Slider */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2.5}
            speed={1000}
            loop={true}
            watchSlidesProgress={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
            }}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="rounded-2xl p-6 h-full duration-200">
                  {/* Testimonial Text */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover bg-gray-600"
                    />
                    <div>
                      <h4 className="text-white font-medium">
                        {testimonial.name}, {testimonial.age}
                      </h4>
                      <p className="text-gray-400">{testimonial.profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
