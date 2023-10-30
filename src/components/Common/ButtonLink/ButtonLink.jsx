import React from "react";
import styles from "./ButtonLink.module.css";
import {Link} from "react-router-dom";
import imgArrow from "./../../../assets/arrow.png";

const ButtonLink = ({path, label}) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.button} to={path}>
        <img className={styles.img} src={imgArrow} alt={label} />
        {label}
      </Link>
    </div>
  );
};

export default ButtonLink;
