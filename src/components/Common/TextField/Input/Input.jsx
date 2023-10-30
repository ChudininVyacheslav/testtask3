import React from "react";
import styles from "./Input.module.css";

const Input = ({id, type, value, onChange}) => {
  return (
    <input
      id={id}
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
