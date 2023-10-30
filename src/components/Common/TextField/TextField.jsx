import Input from "./Input/Input";
import styles from "./TextField.module.css";

const TextField = ({value = "", label = "", onChange}) => {
  return (
    <div className={styles.textField}>
      <div className={styles.input_top}>
        <label htmlFor="input" className={styles.label}>
          {label}
        </label>
      </div>
      <div className={styles.input_field}>
        <Input
          id={label || "input"}
          type={"text"}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextField;
