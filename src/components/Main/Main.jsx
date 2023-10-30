import React from "react";
import styles from "./Main.module.css";
import User from "./User/User";
import ArchivedUsers from "./ArchivedUsers/ArchivedUsers";
import Title from "../Common/Title/Title";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="Активные" />
      <User />
      <Title title="Архив" />
      <ArchivedUsers />
    </div>
  );
};

export default Main;
