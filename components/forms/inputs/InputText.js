import styles from "/styles/forms/inputs/InputText.module.css";

const InputText = ({
  text,
  id,
  dataAccept,
  name,
  label,
  form,
  setForm,
  required,
}) => {
  return (
    <>
      {text && (
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            id={id}
            name = {name}
            value={form[id]}
            placeholder=" "
            required={required}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          ></input>
          <label className={styles.inputLabel}>{text[label]}</label>
        </div>
      )}
    </>
  );
};

export default InputText;
