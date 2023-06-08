import React from "react";
import './index.css'
import ContainerPage from "../../components/ContainerPage";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import DropdownNav from "../../components/DropdownNav";
const Nav = () => {
  return (
    <div style={{ backgroundColor: "#3A454B" }}>
      <ContainerPage>
        <div
          style={{
            height: "45px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#3A454B",
          }}
        >
          <div
            id="left-content"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "45px",
                width: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className={styles.homeIcon}
            >
              <HomeOutlined style={{ fontSize: "24px", color: "white" }} />
            </div>

            <div class={styles.dropdown}>Giới thiệu</div>
            <DropdownNav
              title="Tin tức"
              listSubItems={[
                "Hoạt động chung",
                "Đào tạo",
                "Nghiên cứu khoa học",
                "Hợp tác đối ngoại",
                "Cựu sinh viên",
              ]}
            />

            <div class={styles.dropdown}>Dự án</div>
            <DropdownNav
              title="Khoá học"
              listSubItems={[
                "Sản phẩm dự án",
                "Sản phẩm sinh viên",
                "Ôn tập kĩ năng mềm",
                "Tài liệu môn học",
              ]}
            />
            <div class={styles.dropdown}>Ngôn ngữ</div>
          </div>
          <div id="right-content">
            <div
              style={{
                height: "45px",
                width: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className={styles.homeIcon}
            >
              <SearchOutlined style={{ fontSize: "24px", color: "white" }} />
            </div>
          </div>
        </div>
      </ContainerPage>
    </div>
  );
};

export default Nav;
