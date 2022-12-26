import styles from "/styles/forms/inputs/InputNumber.module.css";

const InputNumber = ({
  dataType,
  dataAccept,
  form,
  name,
  id,
  label,
  required,
  setForm,
  text,
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        id={id}
        value={form[id]}
        type="number"
        name = {name}
        placeholder=" "
        required={required}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
      />
      <label className={styles.inputLabel}>{text[label]}</label>
    </div>
  );
};

export default InputNumber;
