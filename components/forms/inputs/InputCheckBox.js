const InputCheckBox = ({ text, id, dataAccept, form, setForm }) => {
  return (
    <div>
      <input className={styles.checkBox} type="checkbox" onChange={(e) => setForm({ ...form, [id]: e.target.value })}/>
      <label className={styles.checkBoxLabel}>{form[id]}</label>
    </div>
  );
};

export default InputCheckBox;
