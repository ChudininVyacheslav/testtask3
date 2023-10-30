import React from "react";
import styles from "./ArchivedUsers.module.css";
import {useDispatch, useSelector} from "react-redux";
import {activedUser} from "../../../redux/usersSlice";
import EmptyArchive from "./EmptyArchive/EmptyArchive";
import UserCard from "../../Common/UserCard/UserCard";

const ArchivedUsers = () => {
  const dispatch = useDispatch();

  const activeUserOnClick = (id) => {
    dispatch(activedUser(id));
  };

  const users = useSelector((state) => state.users.archivedUsers);

  return (
    <div className={styles.wrapper}>
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            user={user}
            menuItemsDropDown={[
              {
                id: 1,
                label: "Активировать",
                onClick: () => {
                  activeUserOnClick(user.id);
                },
              },
            ]}
          />
        );
      })}
      <EmptyArchive users={users} />
    </div>
  );
};

export default ArchivedUsers;
