import React, {useState} from "react";
import styles from "./Dropdown.module.css";
import {Link} from "react-router-dom";

const Dropdown = ({children, menuItems}) => {
  const [showItems, setShowItems] = useState(false);

  const items = menuItems.map((item) => {
    if (item.type === "link") {
      return (
        <Link
          key={item.id}
          className={styles.link}
          to="/testtask3/user"
          state={item.idUser}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <div className={styles.item} key={item.id} onClick={item.onClick}>
        {item.label}
      </div>
    );
  });

  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => {
          setShowItems(!showItems);
        }}
      >
        {children}
      </div>
      {showItems && <div className={styles.items}>{items}</div>}
    </div>
  );
};

export default Dropdown;
