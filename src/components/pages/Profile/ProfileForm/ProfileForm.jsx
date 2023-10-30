import styles from "./ProfileForm.module.css";
import Button from "./../../../Common/Button/Button";
import TextField from "./../../../Common/TextField/TextField";

const ProfileForm = ({values, onChange, onSubmit}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <TextField
        label="Имя"
        value={values.name}
        onChange={(event) => {
          onChange("name", event.target.value);
        }}
      />
      <TextField
        label="Никнейм"
        value={values.userName}
        onChange={(event) => {
          onChange("userName", event.target.value);
        }}
      />
      <TextField
        label="Почта"
        value={values.email}
        onChange={(event) => {
          onChange("email", event.target.value);
        }}
      />
      <TextField
        label="Город"
        value={values.city}
        onChange={(event) => {
          onChange("city", event.target.value);
        }}
      />
      <TextField
        label="Телефон"
        value={values.phone}
        onChange={(event) => {
          onChange("phone", event.target.value);
        }}
      />
      <TextField
        label="Название компании"
        value={values.companyName}
        onChange={(event) => {
          onChange("companyName", event.target.value);
        }}
      />
      <Button type="submit">Сохранить</Button>
    </form>
  );
};

export default ProfileForm;
