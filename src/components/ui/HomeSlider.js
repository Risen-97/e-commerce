import { hero } from "../../data";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={0}
      loop={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
    >
      {hero.map((cover) => {
        return (
          <SwiperSlide key={cover.id} className="w-full  relative">
            <div className="w-full h-full z-10 bg-black absolute opacity-50"></div>
            <img src={cover.image} className="w-full h-full" alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;
