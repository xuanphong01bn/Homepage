import { Calendar, Image } from "antd";
import React from "react";
import card1 from "../../../shared/images/card1.jpg";
import CalendarBox from "../../CalendarBox";
const ProductStudentCard = ({ title, des, image }) => {
  return (
    <div style={{ height: "450px" }}>
      <div id="image" style={{ height: "225px", position: "relative" }}>
        <Image src={image} preview={false} height="100%" />
      </div>
      <div
        id="box-calendar"
        style={{ position: "absolute", bottom: "200px", right: "24px" }}
      >
        <CalendarBox />
      </div>
      <div id="des">
        <h3
          style={{ textAlign: "left", marginTop: "32px", marginBottom: "8px" }}
        >
          {title}
        </h3>
        <div
          style={{
            textAlign: "left",
            fontSize: "14px",
            color: "#555555",
            lineHeight: "1.5",
            minHeight: "84px",
          }}
        >
          {des}
        </div>
      </div>
      <div
        id="btn"
        style={{
          fontSize: "20px",
          textDecoration: "underline",
          color: "#F3C003",
          textAlign: "left",
          fontStyle: "italic",
          marginTop: "24px",
          cursor: "pointer",
        }}
      >
        Đọc thêm
      </div>
    </div>
  );
};

export default ProductStudentCard;
