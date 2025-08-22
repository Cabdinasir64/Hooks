import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const feedbacks = [
  {
    name: 'Amina Maxamed',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    feedback: 'Adeeggu wuxuu ahaa mid heer sare ah! Waan la yaabay sida degdegga ah ee loo adeegay.',
  },
  {
    name: 'Khadar Cabdi',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    feedback: 'Websaytku waa sahlan yahay in la isticmaalo, waana ku qanacsanahay!',
  },
  {
    name: 'Fartuun Xasan',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    feedback: 'Waan ka helay daryeelka macaamiisha, jawaab deg deg ah ayaan helay.',
  },
  {
    name: 'Yusuf Ali',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    feedback: 'Runtii shaqo wanaagsan bay qabteen! Waxaan siin lahaa 5 xiddig.',
  },
  {
    name: 'Nimco Barre',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    feedback: 'Wax walba si nadiif ah ayaa loogu sharaxay, taas oo iga dhigtay mid fahma.',
  },
  {
    name: 'Sahra Jama',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    feedback: 'Waan jeclahay! Way ka fiicantahay sidii aan filayay.',
  },
  {
    name: 'Abdi Nuur',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    feedback: 'Aad bay iiga caawiyeen sidii aan u bilaabi lahaa isticmaalka.',
  },
  {
    name: 'Hodan Ali',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    feedback: 'Waqtiga ay ku keeneen adeegga ayaa ahaa mid cajiib ah!',
  },
  {
    name: 'Mohamed Saleban',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    feedback: 'U adeegso iyaga, waad ku mahadsanaan doontaa!',
  },
];

const UseState19 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-10 relative">
      <h2 className="text-3xl font-bold text-center mb-10">Fikradaha Macaamiisha</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,

        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-16"
      >
        {feedbacks.map((user, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-xl rounded-xl p-6 h-full flex flex-col items-center text-center transition-all hover:scale-[1.02] duration-300">
              <img
                src={user.image}
                alt={user.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100"
              />
              <h3 className="font-semibold text-lg text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{user.feedback}</p>
            </div>
          </SwiperSlide>
        ))}

        <button ref={prevRef} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-blue-100">
          <FaArrowLeft className="text-blue-600 text-lg" />
        </button>
        <button ref={nextRef} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-blue-100">
          <FaArrowRight className="text-blue-600 text-lg" />
        </button>
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet {
          background: #cbd5e0;
          width: 10px;
          height: 10px;
          opacity: 1;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default UseState19;
