import styles from "/styles/forms/inputs/InputRadioButton.module.css";

const InputRadioButton = ({
  text,
  id,
  dataType,
  dataAccept,
  label,
  form,
  setForm,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.containerLabel}>{text.labels[label]}</label>
      <div className={styles.optionsContainer}>
        {text?.options[label]?.map((value, index) => (
          <div className={styles.options}>
            <input
              className={styles.radio}
              type="radio"
              id={id}
              name={id}
              value={index && value}
              onChange={(e) => setForm({ ...form, [id]: value })}
            />
            <label className={styles.label} htmlFor={id}>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputRadioButton;
