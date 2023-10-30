import styles from "./Button.module.css";

const Button = ({children, onClick, ...props}) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      <div className={styles.label}>{children}</div>
    </button>
  );
};

export default Button;
