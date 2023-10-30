import React from "react";
import styles from "./ImageAvatar.module.css";

const Image = ({alt, src}) => {
  return (
    <div>
      <img className={styles.avatar} src={src} alt={alt} />
    </div>
  );
};

export default Image;
