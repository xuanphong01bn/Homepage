import React from "react";
import ContainerPage from "../../components/ContainerPage";
import SlideProduct from "../../components/SlideProduct";
import SlideProject from "../../components/SlideProject";
const ProductStudent = () => {
  return (
    <ContainerPage>
      {" "}
      <div style={{ padding: "0px 24px" }}>
        <h1
          style={{
            color: "#F3C003",
            textAlign: "right",
            textTransform: "uppercase",
            padding: "24px 0px",
          }}
        >
          Sản phẩm sinh viên
        </h1>
        <SlideProduct />
      </div>
    </ContainerPage>
  );
};

export default ProductStudent;
