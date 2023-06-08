import React from "react";
import styles from "./styles.module.scss";
const ButtonCore = (props) => {
  return (
    <div style={{ display: "inline-block" }} {...props}>
      <div
        style={{
          backgroundColor: "#F3C003",
          padding: "8px 24px",
          borderRadius: "50px",
          fontSize: "16px",
          color: "white",
          cursor: "pointer",
        }}
        className={styles.button}
      >
        Xem thêm
      </div>
    </div>
  );
};

export default ButtonCore;
