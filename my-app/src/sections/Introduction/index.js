import React, { useState } from "react";
import ContainerPage from "../../components/ContainerPage";
import { Row, Col, Button } from "antd";
import ButtonCore from "../../components/Button";
const text1 = `
<div style="margin-bottom:16px">Viện Sư phạm kỹ thuật, Đại học Bách khoa Hà Nội được thành lập vào năm 1997 và đã từng bước khẳng định vị thế
của mình trong lĩnh vực đào tạo giáo viên phụ trách các môn học công nghệ và kỹ thuật tại các trường phổ thông
cũng như đội ngũ giảng viên các trường cao đẳng và trung cấp nghề.</div>
<div> Năm 2019, Viện đã tiên phong đào tạo Cử nhân Công nghệ giáo đồng thời đào tạo Thạc sỹ và Tiến sỹ Lý luận và
phương pháp dạy học cho bậc sau đại học nhằm nâng cao trình độ chuyên môn và nghiên cứu khoa học.</div>
`;
const text2 = `<div style="margin-bottom:16px">Viện Sư phạm kỹ thuật, Đại học Bách khoa Hà Nội được thành lập vào năm 1997 và đã từng bước khẳng định vị thế
của mình trong lĩnh vực đào tạo giáo viên phụ trách các môn học công nghệ và kỹ thuật tại các trường phổ thông
cũng như đội ngũ giảng viên các trường cao đẳng và trung cấp nghề.</div>
<div style="margin-bottom:16px"> Năm 2019, Viện đã tiên phong đào tạo Cử nhân Công nghệ giáo đồng thời đào tạo Thạc sỹ và Tiến sỹ Lý luận và
phương pháp dạy học cho bậc sau đại học nhằm nâng cao trình độ chuyên môn và nghiên cứu khoa học.</div>
<div>
Bên cạnh các chương trình đào tạo chính quy, Viện còn tổ chức đào tạo bồi dưỡng Chứng chỉ nghiệp vụ sư phạm,
Chứng chỉ bồi dưỡng chức danh nghề nghiệp đối với giảng viên các cơ sở giáo dục đại học và bồi dưỡng đội ngũ
giảng viên nội bộ cho các tổ chức và doanh nghiệp
</div>
`;
const Introduction = () => {
  const [text, setText] = useState(text1);
  return (
    <ContainerPage>
      <div style={{ minHeight: "400px" }}>
        <Row>
          <Col xl={12} lg={24}>
            <div style={{ padding: "0px 24px" }}>
              <h1
                style={{
                  color: "#F3C003",
                  textTransform: "uppercase",
                  textAlign: "left",
                }}
              >
                Giới thiệu chung
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: text,
                }}
                style={{ textAlign: "left", fontWeight: "450" }}
              ></div>
              <div
                style={{
                  display: "flex",
                  textAlign: "left",
                  marginTop: "16px",
                }}
              >
                <ButtonCore
                  text={text == text1 ? "Xem thêm" : "Rút gọn"}
                  onClick={() => setText(text == text1 ? text2 : text1)}
                />
              </div>
            </div>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <div style={{ padding: "24px" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/boA99wmJv0I"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </ContainerPage>
  );
};

export default Introduction;
