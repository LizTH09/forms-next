import styles from "../../../styles/forms/pdf/ButtonExport.module.css";

const ButtonExport = ({ text }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>{text}</button>
    </div>
  );
};

export default ButtonExport;
