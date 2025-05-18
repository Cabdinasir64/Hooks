import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1020/600/400',
];

const UseState18 = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setProgress((prev) => {
          if (prev >= 100) {
            swiperRef.current?.slideNext();
            return 0;
          }
          return prev + 2;
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="max-w-4xl w-full mx-auto py-8 px-4">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Background Image */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${url})` }}
              ></div>

              {/* Vertical Progress Bar */}
              <div className="absolute top-4 right-4 w-2 h-32 bg-white/40 rounded overflow-hidden">
                <div
                  className="bg-blue-600 w-full rounded transition-all duration-100 ease-linear"
                  style={{ height: `${progress}%` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UseState18;
