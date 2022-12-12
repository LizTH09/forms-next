import styles from "/styles/forms/inputs/InputNumber.module.css";

const InputNumber = ({
  text,
  id,
  dataType,
  dataAccept,
  label,
  form,
  setForm,
  required,
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        id={id}
        value={form[id]}
        type="number"
        placeholder=" "
        required={required}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
      />
      <label className={styles.inputLabel}>{text[label]}</label>
    </div>
  );
};

export default InputNumber;
