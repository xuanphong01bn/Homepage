import React from "react";
import styles from "./styles.module.scss";
const ContainerPage = ({ children }) => {
  return <div className={styles.containterPage}>{children}</div>;
};

export default ContainerPage;
