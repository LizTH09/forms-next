import { useEffect } from "react";
import Input from "./Input";
import styles from "/styles/forms/Form.module.css";

const Form = ({ inputs, text, currentStep, form, setForm }) => {
  return (
    <>
      {text?.steps && (
        <div className={styles.inputContainer}>
          {inputs[currentStep - 1][`step${currentStep}`].map((input) => (
            <Input
              text={text.steps[`step${currentStep}`]}
              id={input.id}
              dataType={input.dataType}
              dataAccept={input.dataAccept}
              label={input.label}
              form={form}
              setForm={setForm}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Form;
