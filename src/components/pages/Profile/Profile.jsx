import React, {useState} from "react";
import styles from "./Profile.module.css";
import Header from "./../../Common/Header/Header";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserCAT} from "../../../redux/createAsyncThunk/getUserCAT";
import ProfileLeft from "../../Common/ProfileLeft/ProfileLeft";
import ProfileForm from "./ProfileForm/ProfileForm";
import Title from "./Title/Title";
import imgAvatar from "./../../../assets/avatar.png";
import imgEllipsis from "../../../assets/ellipsis.png";
import {editUserCAT} from "../../../redux/createAsyncThunk/editUserCAT";
import Modal from "./Modal/Modal";
import ButtonLink from "./../../Common/ButtonLink/ButtonLink";

const Profile = () => {
  const {state} = useLocation();
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserCAT(state));
  }, [dispatch]);

  const submitUserEdit = (user) => {
    dispatch(editUserCAT(user));
  };

  const user = useSelector((stateData) => stateData.users.user);

  const [formValues, setFormValues] = useState({
    id: user.id,
    name: user.name,
    userName: user.userName,
    imgAvatar,
    imgEllipsis,
    email: user.email,
    city: user.city,
    phone: user.phone,
    companyName: user.companyName,
  });

  return (
    <div>
      {user && (
        <div>
          {isActive && (
            <Modal
              title="Изменения сохранены!"
              onClick={() => {
                setIsActive(!isActive);
              }}
            />
          )}
          <Header />
          <ButtonLink path="/" label="Назад" />
          <div className={styles.profile}>
            <div className={styles.menu}>
              <ProfileLeft />
            </div>
            <div className={styles.data}>
              <Title title={"Данные профиля"} />
              <ProfileForm
                values={formValues}
                onChange={(fieldName, value) =>
                  setFormValues({...formValues, [fieldName]: value})
                }
                onSubmit={(event) => {
                  event.preventDefault();
                  setIsActive(true);
                  setTimeout(() => {
                    setIsActive(false);
                  }, 4000);
                  submitUserEdit(formValues);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
