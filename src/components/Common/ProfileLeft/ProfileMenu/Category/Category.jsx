import React from "react";
import styles from "./Category.module.css";

const Category = ({children, isActive, id, onClick}) => {
  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => {
          onClick(id);
        }}
      >
        {isActive ? (
          <div className={styles.category_active}>{children}</div>
        ) : (
          <div className={styles.category}>{children}</div>
        )}
      </div>
    </div>
  );
};

export default Category;
