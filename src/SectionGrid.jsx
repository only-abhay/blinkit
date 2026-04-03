import React from 'react'
import Productcard from './components/Productcard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';

// Navigation module
import { Navigation } from 'swiper/modules';

export default function Sectiongrid({ heading, name }) {
  return (
    <div className="pb-10 max-w-[1280px] mx-auto px-4">
      
      <h1 className="text-2xl mb-4">{heading}</h1>

     <Swiper
  slidesPerView={1}
  spaceBetween={20}
  loop={false} // IMPORTANT
  navigation={true}
  modules={[Navigation]}
  className="w-full"
  breakpoints={{
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
>
  {Array.isArray(name) && name.map((item, index) => (
    <SwiperSlide key={index}>
      <Productcard data={item} img={item?.images?.[0]} />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  )
}