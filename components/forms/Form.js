import { useEffect } from "react";
import Input from "./Input";
import styles from "/styles/forms/Form.module.css";

const Form = ({
  inputs,
  text,
  currentStep,
  form,
  setForm,
  required = false,
}) => {
  return (
    <>
      {text?.steps && (
        <div className={styles.inputContainer}>
          {inputs[currentStep - 1][`step${currentStep}`].map((input, index) => (
            <Input
              key={index}
              text={text.steps[`step${currentStep}`]}
              id={input.id}
              dataType={input.dataType}
              name = {input.name}
              dataAccept={input.dataAccept}
              label={input.label}
              form={form}
              setForm={setForm}
              required={required}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Form;
