import Switch from "./Switch";
import styles from "../../styles/forms/NavBar.module.css";
import Link from "next/link";

const NavBar = ({ title, setLanguage }) => {
  return (
    <div className={styles.NavBar}>
      <Link href="/">
        <img className={styles.logo} src="/assets/logo.png" alt="Logo" />
      </Link>
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
