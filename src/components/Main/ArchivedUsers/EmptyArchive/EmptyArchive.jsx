import React from "react";
import styles from "./EmptyArchive.module.css";

const EmptyArchive = ({users}) => {
  return (
    <>
      {users.length === 0 && <p className={styles.archive_empty}>Архив пуст</p>}
    </>
  );
};

export default EmptyArchive;
