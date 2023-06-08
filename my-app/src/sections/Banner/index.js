import { Image } from "antd";
import banner from "../../shared/images/heroImage.png";
import React from "react";
//import N from "shared/Font";

const Banner = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ width: "100%" }}>
        <img src={banner} style={{ width: "100%", height: "100%" }} />
      </div>

      <div style={{ fontSize: "40px", color: "#CD1628", fontVariant: "" }}>
        <h1>Nâng tầm tri thức - chắp cánh tương lai</h1>
      </div>
    </div>
  );
};

export default Banner;
