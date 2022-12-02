import Switch from "./Switch";
import styles from "../../styles/forms/NavBar.module.css";

const NavBar = ({ title, setLanguage }) => {
  return (
    <div className={styles.NavBar}>
      <span className={styles.logo}>LOGO</span>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.switchContainer}>
        <span>EN</span>
        <Switch setSwitch={setLanguage} htmlId="switch-language" />
        <span>ES</span>
      </div>
    </div>
  );
};

export default NavBar;
