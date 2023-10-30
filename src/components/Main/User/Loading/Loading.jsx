import React from "react";
import styles from "./Loading.module.css";

const Loading = ({loading}) => {
  return (
    <>
      {loading !== "resolved" && (
        <div className={styles.loading}>{loading}</div>
      )}
    </>
  );
};

export default Loading;
