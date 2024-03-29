import React from "react";
import ContainerPage from "../../components/ContainerPage";
import SlideProject from "../../components/SlideProject";

const Project = () => {
  return (
    <ContainerPage>
      <div style={{ padding: "0px 24px" }}>
        <h1
          style={{
            color: "#F3C003",
            textTransform: "uppercase",
            padding: "24px 0px",
          }}
        >
          Dự án
        </h1>
        <SlideProject />
      </div>
    </ContainerPage>
  );
};

export default Project;
