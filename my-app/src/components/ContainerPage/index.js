import React from "react";
import styles from "./styles.module.scss";
const ContainerPage = ({ children, isHeaderNav, style }) => {
  return (
    <div
      className={styles.containterPage}
      style={{ margin: isHeaderNav && "0 auto", ...style }}
    >
      {children}
    </div>
  );
};

export default ContainerPage;
