import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1020/600/400',
  'https://picsum.photos/id/1024/600/400',
  'https://picsum.photos/id/1025/600/400',
  'https://picsum.photos/id/1033/600/400',
  'https://picsum.photos/id/1035/600/400',
];

const UseState17 = () => {
  return (
    <div
      style={{
        maxWidth: '90%',
        width: '700px',
        margin: 'auto',
        paddingTop: 40,
      }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        style={{
          height: 'auto',
          paddingBottom: '40px',
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                width: '100%',
                height: '400px',
                borderRadius: 12,
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UseState17;
