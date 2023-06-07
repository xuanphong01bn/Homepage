import React from "react";
import ContainerPage from "../../components/ContainerPage";
import { Image, Input } from "antd";
import logo from "../../shared/images/SchoolName.png";
const Header = () => {
  return (
    <ContainerPage>
      <div
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Image src={logo} height="100px" preview={false} />
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <div>
            <h4 style={{ margin: "0px 0px 4px 4px", textAlign: "left" }}>
              Đăng nhập
            </h4>
            <Input placeholder="Tên tài khoản" />
          </div>
          <div>
            <div style={{ margin: "0px 0px 4px 4px", textAlign: "left" }}>
              Bạn quên tài khoản ?
            </div>
            <Input placeholder="Mật khẩu" />
          </div>
        </div>
      </div>
    </ContainerPage>
  );
};

export default Header;
