import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;
