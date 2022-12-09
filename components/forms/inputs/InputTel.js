import styles from "/styles/forms/inputs/InputTel.module.css";

const InputTel = ({
  text,
  id,
  dataType,
  dataAccept,
  label,
  form,
  setForm,
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        id={id}
        value={form[id]}
        datatype={dataType}
        placeholder=" "
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
      ></input>
      <label className={styles.inputLabel}>{text[label]}</label>
    </div>
  );
};

export default InputTel;
