import styles from "/styles/forms/inputs/InputDropDown.module.css";

const InputDropDown = ({ text, id, dataAccept, label, width }) => {
  return (
    <div className={styles.inputContainer} style={{ Width: width }}>
      <select className={styles.input} id={id} placeholder=" ">
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
