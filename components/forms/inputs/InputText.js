import styles from "/styles/forms/inputs/InputText.module.css";

const InputText = ({ text, id, dataAccept, label, form, setForm }) => {
  return (
    <>
      {text && (
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            id={id}
            value={form[id]}
            placeholder=" "
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          ></input>
          <label className={styles.inputLabel}>{text[label]}</label>
        </div>
      )}
    </>
  );
};

export default InputText;
