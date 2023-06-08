import React from "react";
import { Row, Col } from "antd";
import {
  RightOutlined,
  ShoppingCartOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import styles from "./styles.module.scss";
const textList = ["Đào tạo", "Tuyển sinh", "Nghiên cứu", "Góc sinh viên"];
const Footer = () => {
  return (
    <div style={{ minHeight: "350px", background: "#3A454B" }}>
      <Row>
        <Col lg={8}></Col>
        <Col lg={8}>
          <div>
            <h3
              style={{
                color: "#f2f2f2",
                margin: "0",
                padding: "24px",
                // borderBottom: "1px solid",
                textAlign: "left",
                paddingBottom: "12px",
                paddingLeft: "0",
              }}
            >
              Liên kết hữu ích
            </h3>
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(to right, #f3c003 0%, #ffffff 40%)",
              }}
            ></div>
            <div style={{ marginTop: "12px" }}>
              {textList?.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    padding: "12px",
                    gap: "8px",
                  }}
                >
                  <RightOutlined style={{ color: "#F3C003" }} />{" "}
                  <div style={{ color: "#bdc3c7" }}>{item}</div>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  padding: "12px",
                  gap: "8px",
                }}
              >
                <ShoppingCartOutlined style={{ color: "#F3C003" }} />{" "}
                <div style={{ color: "#bdc3c7" }}>Đăng kí khoá học</div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={8}>
          <h3
            style={{
              color: "#f2f2f2",
              margin: "0",
              padding: "24px",
              // borderBottom: "1px solid",
              textAlign: "left",
              paddingBottom: "12px",
              paddingLeft: "0",
            }}
          >
            Liên hệ
          </h3>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(to right, #f3c003 0%, #ffffff 40%)",
            }}
          ></div>
          <div style={{ color: "#bdc3c7", textAlign: "left", padding: "12px" }}>
            D5 - 402 - Trường Đại học Bách Khoa Hà Nội - Số 1, Đường Đại Cồ
            Việt, Hà Nội
            <div style={{ marginTop: "24px" }}>
              Phone: (+84) 438681432 - (+84) 902282489
            </div>
            <div style={{ marginTop: "8px" }}>
              {" "}
              E-mail: <span style={{ color: "#F3C003" }}>sepd@hust.edu.vn</span>
            </div>
            <div
              style={{
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: "700",
                marginTop: "24px",
              }}
            >
              Connect with us
            </div>
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "12px",
                paddingLeft: "30%",
              }}
            >
              <div
                id="facebook"
                style={{
                  background: "#999999",
                  // color: "#323A45",
                  color: "white",
                  display: "inline-block",
                  padding: "3px 3px 1px 3px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                className={styles.fbIcon}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 0 512 512"
                  // fill="white"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </div>
              <div
                id="printest"
                style={{
                  background: "#999999",
                  // color: "#323A45",
                  color: "white",
                  display: "inline-block",
                  padding: "3px 3px 1px 3px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                className={styles.printest}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 496 512"
                >
                  <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                </svg>
              </div>
              <div
                id="twitter"
                style={{
                  background: "#999999",
                  // color: "#323A45",
                  color: "white",
                  display: "inline-block",
                  padding: "3px 3px 1px 3px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                className={styles.twitter}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                </svg>
              </div>
              <div
                id="google"
                style={{
                  background: "#999999",
                  // color: "#323A45",
                  color: "white",
                  display: "inline-block",
                  padding: "3px 3px 1px 3px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
                className={styles.google}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z" />
                </svg>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
