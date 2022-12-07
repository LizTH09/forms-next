import styles from '/styles/forms/inputs/InputText.module.css'

const InputText = ({ text, id, dataAccept, label, width }) => {
  return (
    <>
      {text && (
        <div className={styles.inputContainer}  style={{width: width}}>
          <input className={styles.input} id={id} placeholder= " "></input>
          <label className={styles.inputLabel}>{text[label]}</label>
        </div>
      )}
    </>
  );
};

export default InputText;
