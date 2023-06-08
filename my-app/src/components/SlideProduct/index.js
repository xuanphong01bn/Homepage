import React, { useEffect, useRef, useState } from "react";
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
import ProductStudentCard from "./ProductStudentCard";
import card1 from "../../shared/images/card1.jpg";
import card2 from "../../shared/images/card2.jpg";
import card3 from "../../shared/images/card3.jpg";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
const productList = [
  {
    title: " EdTech Design Thinking",
    des: `Được đắm chìm trong một cuộc phiên lưu sáng tạo và vui vẻ, học hỏi các
    kỹ năng thiết kế sản phẩm, tìm hiểu về người dùng và hiểu rõ yêu cầu
    để tạo ra giải pháp giáo dục tốt`,
    image: card1,
  },
  {
    title: "EdGames",
    des: `Trải nghiệm giải pháp trò chơi số
    trong học tập và tham gia chuỗi tựa
    game do chính sinh viên CNGD tạo
    ra.`,
    image: card2,
  },
  {
    title: "EdVirtual",
    des: `Trọn vẹn trải nghiệm học tập bằng
    các công nghệ ảo với các sản phẩm
    VR/AR do chính sinh viên CNGD
    thiết kế. 
    `,
    image: card3,
  },
  {
    title: "EdVirtual",
    des: `Trọn vẹn trải nghiệm học tập bằng
    các công nghệ ảo với các sản phẩm
    VR/AR do chính sinh viên CNGD
    thiết kế. 
    `,
    image: card3,
  },
];

export default function SlideProduct({}) {
  const onlyWidth = useWindowWidth();
  console.log("width :", onlyWidth);
  const [perSlide, setPerSlide] = useState(3);
  useEffect(() => {
    if (onlyWidth > 843) {
      setPerSlide(3);
    }
    if (onlyWidth < 843) {
      setPerSlide(2);
    }
    if (onlyWidth < 576) {
      setPerSlide(1);
    }
  }, [onlyWidth]);
  return (
    <div>
      <Swiper
        slidesPerView={perSlide}
        spaceBetween={32}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {productList?.map((item) => (
          <div key={item}>
            <SwiperSlide>
              <ProductStudentCard
                title={item.title}
                des={item.des}
                image={item.image}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
