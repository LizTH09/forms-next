import Link from "next/link";
import styles from "../../styles/web/Maintence.module.css";

const Maintence = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Website Under Maintence</h1>
          <p className={styles.subtitle}>You can visit our forms : </p>
          <ul className={styles.list}>
            <li className={styles.linkForms}>
              <Link className={styles.link} href="/forms/businessIncorporation">
                Business Incorporation
              </Link>
            </li>
            <li className={styles.linkForms}>
              <Link className={styles.link} href="/forms/amendment">
                Amendment
              </Link>
            </li>
            <li className={styles.linkForms}>
              <Link className={styles.link} href="/forms/renovation">
                Renovation
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.gif} src="/assets/ajustes.gif" />
          <img
            className={styles.image}
            src="/assets/accounting.png"
            alt="Website under Maintence"
          />
        </div>
      </div>
    </div>
  );
};

export default Maintence;
