import React from "react";
import style from "./Title.module.css";

const Title = ({title}) => {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>{title}</p>
    </div>
  );
};

export default Title;
