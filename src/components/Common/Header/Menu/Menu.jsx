import React from "react";
import styles from "./Menu.module.css";
import bell from "./../../../../assets/bell.png";
import like from "./../../../../assets/like.png";
import photo_icon from "./../../../../assets/photo_icon.png";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.icons_wrapper}>
        <img className={styles.bell} src={bell} alt="bell" />
        <img className={styles.like} src={like} alt="like" />
      </div>
      <div className={styles.account}>
        <img className={styles.photo_icon} src={photo_icon} alt="photo_icon" />
        <p className={styles.name}>Ivan1234</p>
      </div>
    </div>
  );
};

export default Menu;
