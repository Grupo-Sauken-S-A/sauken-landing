"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Slide1 } from './slides/Slide1';
import { Slide2 } from './slides/Slide2';
import { Slide3 } from './slides/Slide3';
import { Slide4 } from './slides/Slide4';
import { Slide5 } from './slides/Slide5';

export const Slider = () => {
   const [swiper, setSwiper] = useState<SwiperType | null>(null);
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: false });

   useEffect(() => {
      if (swiper) {
         if (isInView) {
            swiper.autoplay.start();
         } else {
            swiper.autoplay.stop();
         }
      }
   }, [isInView, swiper]);

   const handleMouseEnter = () => {
      if (swiper) {
         swiper.autoplay.stop();
      }
   };

   const handleMouseLeave = () => {
      if (swiper && isInView) {
         swiper.autoplay.start();
      }
   };

   return (
      <div ref={ref} className="relative">
         <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            navigation={{
               prevEl: '.swiper-button-prev',
               nextEl: '.swiper-button-next',
            }}
            pagination={{
               clickable: true,
               bulletClass: 'swiper-pagination-bullet',
               bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoHeight={false}
            autoplay={{
               delay: 4000,
               disableOnInteraction: false,
               pauseOnMouseEnter: true,
            }}
            speed={800}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiperInstance) => {
               console.log(swiperInstance);
               setSwiper(swiperInstance);
            }}
            className="mySwiper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         >
            <SwiperSlide><Slide1 /></SwiperSlide>
            <SwiperSlide><Slide2 /></SwiperSlide>
            <SwiperSlide><Slide3 /></SwiperSlide>
            <SwiperSlide><Slide4 /></SwiperSlide>
            <SwiperSlide><Slide5 /></SwiperSlide>
            
            {/* Custom navigation buttons */}
            <div className="swiper-button-prev scale-50 lg:scale-100 absolute left-1 lg:left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
               <Image src="/images/slider-arrow.svg" width={39} height={77} alt="Previous" className="rotate-180" />
            </div>
            <div className="swiper-button-next absolute scale-50 right-1 lg:scale-100 lg:right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
               <Image src="/images/slider-arrow.svg" width={39} height={77} alt="Next" />
            </div>
         </Swiper>
         
         {/* Custom styles for pagination bullets */}
         <style jsx global>{`
            .swiper-pagination {
               position: absolute;
               bottom: 20px !important;
               left: 50% !important;
               transform: translateX(-50%);
               width: auto !important;
            }
            .swiper-pagination-bullet {
               width: 12px;
               height: 12px;
               background: rgba(255, 255, 255, 0.5);
               opacity: 1;
            }
            .swiper-pagination-bullet-active {
               background: white;
            }
         `}</style>
      </div>
   )
}