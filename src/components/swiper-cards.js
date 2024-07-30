import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import cards from "../data/cards.json";
import "swiper/css";

function Cards() {
  return (
    <section className="cards h-full">
      <div className="card__outer-wrapper h-full">
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          loop = {true}
          modules={[FreeMode]}
          onSlideChange={() => {
            console.log("Slide Changed");
          }}
          onSwiper={(swiper) => {
            console.log(swiper);
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="card__content-wrapper flex flex-col justify-between h-full">
                <div className="card__title-wrapper">
                  <label className="card__title weight-500">
                    {card.text}
                  </label>
                </div>
                <div className="w-full flex justify-end pr-2 pb-2">
                    <label className="card__counter">{index+1}</label>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Cards;
