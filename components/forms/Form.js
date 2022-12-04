import { useEffect } from "react";
import Input from "./Input";

const Form = ({ inputs, text, currentStep }) => {
  return (
    <>
      {text?.steps && (
        <div>
          {inputs[currentStep - 1][`step${currentStep}`].map((input) => (
            <Input
              text={text.steps[`step${currentStep}`]}
              id={input.id}
              dataType={input.dataType}
              dataAccept={input.dataAccept}
              label={input.label}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Form;
