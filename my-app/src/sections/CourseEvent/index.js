import React from "react";
import ContainerPage from "../../components/ContainerPage";
import { Row, Col, Divider } from "antd";
import SlideCourse from "../../components/SlideCourse";
import Event from "../../components/Event";
import ButtonCore from "../../components/Button";
const CourseEvent = () => {
  return (
    <ContainerPage>
      <div>
        <Row>
          <Col lg={16}>
            <h1 style={{ color: "#F3C003", textTransform: "uppercase" }}>
              Các khoá học
            </h1>
            <SlideCourse />
            <ButtonCore />
          </Col>
          <Col lg={8}>
            <Event />
          </Col>
        </Row>
      </div>
    </ContainerPage>
  );
};

export default CourseEvent;
