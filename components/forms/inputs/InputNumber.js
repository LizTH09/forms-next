import styles from '/styles/forms/inputs/InputNumber.module.css'

const InputNumber = ({ text, id, dataType, dataAccept, label, width }) => {
  return (
    <div className={styles.inputContainer}  style={{width: width}}>
      <input className={styles.input} id={id} type={dataType} placeholder=" "></input>
      <label className={styles.inputLabel}>{text[label]}</label>
    </div>
  )
}

export default InputNumber