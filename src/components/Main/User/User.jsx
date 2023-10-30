import React from "react";
import styles from "./User.module.css";
import {useDispatch, useSelector} from "react-redux";
import {archivedUser} from "../../../redux/usersSlice";
import {deleteUserCAT} from "../../../redux/createAsyncThunk/deleteUserCAT";
import Loading from "./Loading/Loading";
import UserCard from "../../Common/UserCard/UserCard";

const User = () => {
  const dispatch = useDispatch();

  const archivedUserOnClick = (id) => {
    dispatch(archivedUser(id));
  };

  const deleteUserOnClick = (id) => {
    dispatch(deleteUserCAT(id));
  };

  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.status);
  
  return (
    <div className={styles.wrapper}>
      <Loading loading={loading} />
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            user={user}
            menuItemsDropDown={[
              {
                id: 1,
                type: "link",
                label: "Редактировать",
                idUser: user.id,
              },
              {
                id: 2,
                label: "Архивировать",
                onClick: () => {
                  archivedUserOnClick(user.id);
                },
              },
              {
                id: 3,
                label: "Скрыть",
                onClick: () => {
                  deleteUserOnClick(user.id);
                },
              },
            ]}
          />
        );
      })}
    </div>
  );
};

export default User;
