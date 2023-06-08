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

const ImageList = [
  "http://lms-sepd.hust.edu.vn/pluginfile.php/35/mod_label/intro/duan1.png",
  "http://lms-sepd.hust.edu.vn/pluginfile.php/35/mod_label/intro/duan1.png",
  "http://lms-sepd.hust.edu.vn/pluginfile.php/35/mod_label/intro/duan1.png",
];

export default function SlideProject({}) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {ImageList?.map((item) => (
          <div key={item}>
            <SwiperSlide>
              <div style={{ height: "400px", width: "100%" }}>
                <Image
                  src="http://lms-sepd.hust.edu.vn/pluginfile.php/35/mod_label/intro/duan1.png"
                  preview={false}
                  height="100%"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
