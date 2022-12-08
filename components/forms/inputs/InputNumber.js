import styles from "/styles/forms/inputs/InputNumber.module.css";

const InputNumber = ({
  text,
  id,
  dataType,
  dataAccept,
  label,
  width,
  form,
  setForm,
}) => {
  return (
    <div className={styles.inputContainer} style={{ width: width }}>
      <input
        className={styles.input}
        id={id}
        value={form[id]}
        type={dataType}
        placeholder=" "
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
      />
      <label className={styles.inputLabel}>{text[label]}</label>
    </div>
  );
};

export default InputNumber;
