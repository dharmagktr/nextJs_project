import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
function Swiperr() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="banner"
          src="https://images5.alphacoders.com/415/415021.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="banner"
          src="https://cdn.wallpapersafari.com/49/22/cUM9SQ.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Swiperr;
