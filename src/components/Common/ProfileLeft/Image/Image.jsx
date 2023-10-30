import img from "./../../../../assets/avatarProfile.png";
import styles from "./Image.module.css";

const Image = ({alt}) => {
  return <img src={img} className={styles.img} alt={alt} />;
};

export default Image;
