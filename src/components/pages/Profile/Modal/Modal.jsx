import React from "react";
import styles from "./Modal.module.css";
import checkMark from "./../../../../assets/checkMark.png";
import close from "./../../../../assets/close.png";

const Modal = ({title, onClick}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal_container}>
        <div
          className={styles.close}
          onClick={() => {
            onClick();
          }}
        >
          <img src={close} alt="close" />
        </div>
        <div className={styles.img_wrapper}>
          <img className={styles.img} src={checkMark} alt="checked" />
        </div>
        <div className={styles.title_wrapper}>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
