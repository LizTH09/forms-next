import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import styles from "/styles/forms/inputs/InputTel.module.css";
import { useEffect, useState } from 'react';

const InputTel = ({
  text,
  id,
  dataType,
  dataAccept,
  name,
  label,
  form,
  setForm,
  required
}) => {
  const [value, setValue] = useState(form[id])
  useEffect(() => {
    setForm({...form, [id]: value})
  }, [value])
  
  return (
    <div className={styles.inputContainer}>
      <PhoneInput
        className={styles.input}
        id={id}
        value={value}
        placeholder=" "
        name = {name}
        required={required}
        onChange={setValue}
      ></PhoneInput>
      <label className={styles.inputLabel} htmlFor={id}>{text[label]}</label>
    </div>
  );
};

export default InputTel;
