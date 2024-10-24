"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function ImageSlider({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper w-full h-full"
        style={{
          "--swiper-navigation-color": "#AD958D",
          "--swiper-navigation-size": "25px",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            {/* Removed the aspect ratio div and made the image container fill the full height */}
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`Service image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
