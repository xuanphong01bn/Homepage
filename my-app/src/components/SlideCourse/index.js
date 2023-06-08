import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import { Image } from "antd";
import dalc from "../../shared/images/Dclc.jpg";
import el from "../../shared/images/EL.jpg";
const CourseList = [
  {
    image: dalc,
    title: "Chắp cánh e - learning",
    subtTitle: " Hình thức học trực tuyến tại nhà",
  },
  {
    image: el,
    title: "Chắp cánh e - learning",
    subtTitle: " Hình thức học trực tuyến tại nhà",
  },
  {
    image: dalc,
    title: "Chắp cánh e - learning",
    subtTitle: " Hình thức học trực tuyến tại nhà",
  },
];

export default function SlideCourse({}) {
  return (
    <div style={{ padding: "24px" }}>
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {CourseList?.map((item) => (
          <div key={item}>
            <SwiperSlide>
              <div>
                <div
                  style={{ height: "220px", width: "100%", margin: "0 auto" }}
                >
                  <Image src={item.image} preview={false} height="100%" />
                </div>
                <div>
                  <h2
                    style={{
                      color: "#CD1628",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h2>
                  <div style={{ fontStyle: "italic" }}>{item.subtTitle}</div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
