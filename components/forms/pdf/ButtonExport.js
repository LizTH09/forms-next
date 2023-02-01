import styles from "../../../styles/forms/pdf/ButtonExport.module.css";

const ButtonExport = ({ text, hydeDownload }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} hidden={hydeDownload}>{text}</button>
    </div>
  );
};

export default ButtonExport;
