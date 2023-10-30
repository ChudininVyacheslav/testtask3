import React from "react";
import styles from "./UserCard.module.css";
import ImageAvatar from "./../../Common/ImageAvatar/ImageAvatar";
import Dropdown from "./../../Common/Dropdown/Dropdown";
import ImageEllipsis from "./../../Common/ImageEllipsis/ImageEllipsis";

const UserCard = ({user, menuItemsDropDown}) => {
  return (
    <div key={user.id} className={styles.wrapper_user}>
      <ImageAvatar src={user.imgAvatar} alt="avatar" />
      <div className={styles.data}>
        <div className={styles.wrap}>
          <div className={styles.wrap_left}>
            <div className={styles.username}>{user.userName}</div>
            <div className={styles.companyname}>{user.companyName}</div>
          </div>
          <div>
            <Dropdown menuItems={menuItemsDropDown}>
              <ImageEllipsis src={user.imgEllipsis} alt="ellipsis" />
            </Dropdown>
          </div>
        </div>
        <div className={styles.city}>{user.city}</div>
      </div>
    </div>
  );
};

export default UserCard;
