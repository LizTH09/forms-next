import styles from '../../styles/forms/TitleMobile.module.css'
const TitleMobile = ({ title }) => {
  return <h1 className={styles.mobileTitle}>{title}</h1>;
};

export default TitleMobile;
