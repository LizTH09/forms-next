import styles from '/styles/forms/inputs/InputTel.module.css'

const InputTel = ({ text, id, dataType, dataAccept, label, width }) => {
  return (
    <div className={styles.inputContainer}  style={{width: width}}>
      <input className={styles.input} id={id} datatype={dataType} placeholder= " "></input>
      <label className={styles.inputLabel}>{text[label]}</label>
    </div>
  );
};

export default InputTel;
