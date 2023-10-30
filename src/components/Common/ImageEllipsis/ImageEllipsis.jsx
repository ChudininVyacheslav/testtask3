import React from "react";
import styles from "./ImageEllipsis.module.css";

const ImageEllipsis = ({src, alt}) => {
  return <img className={styles.ellipsis} src={src} alt={alt} />;
};

export default ImageEllipsis;
