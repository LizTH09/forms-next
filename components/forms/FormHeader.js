import styles from "../../styles/forms/FormHeader.module.css";

const FormHeader = ({ title, description, date }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPart}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.description}>{description}</span>
      </div>
      <p className={styles.date}>{date}</p>
    </div>
  );
};

export default FormHeader;
