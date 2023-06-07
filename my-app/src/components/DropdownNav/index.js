import React from "react";
import styles from "./styles.module.scss";
const DropdownNav = ({ title, listSubItems }) => {
  return (
    <div class={styles.dropdown}>
      {title}
      <ul class={styles.dropdownMenu}>
        {listSubItems?.map((item) => (
          <div className={styles.itemsList}>
            <div style={{}}>{item}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DropdownNav;
