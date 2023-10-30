import React from "react";
import styles from "./Title.module.css";

const Title = ({title}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Title;
