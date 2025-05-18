import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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

const UseState16 = () => {
  return (
    <div style={{ maxWidth: '700px', margin: 'auto', paddingTop: 40 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        style={{ height: 400 }}
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                height: '400px',
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 12,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UseState16;
