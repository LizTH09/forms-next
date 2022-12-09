import styles from "/styles/forms/inputs/InputDropDown.module.css";

const InputDropDown = ({
  text,
  id,
  dataAccept,
  label,
  form,
  setForm,
}) => {
  return (
    <div className={styles.inputContainer}>
      <select
        className={styles.input}
        id={id}
        placeholder=" "
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
      >
        {text.options[label].map((value, index) => (
          <option
            value={index ? value : ""}
            disabled={!index}
            selected={!index}
          >
            {value}
          </option>
        ))}
      </select>
      <label className={styles.inputLabel}>{text.labels[label]}</label>
    </div>
  );
};

export default InputDropDown;
