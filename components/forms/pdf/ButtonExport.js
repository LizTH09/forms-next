import styles from '../../../styles/forms/pdf/ButtonExport.module.css'

const ButtonExport = ({ text }) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  );
};

export default ButtonExport;
