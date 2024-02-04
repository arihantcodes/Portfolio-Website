import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-2.svg";
import Image3 from "../../assets/avatar-2.svg";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    id: 1,
    image: Image1,
    title: "Upwork Client",
    subtitle: "CO-FOUNDER",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "Fiverr Client",
    subtitle: "CEO",
    comment:
      "I am absolutely delighted with my experience working with this incredible theme! Not only did it make the entire process enjoyable and interesting, but I also learned a great deal along the way. ",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section ">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
