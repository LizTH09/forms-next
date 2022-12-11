import Button from "./Button";
import styles from "../../styles/forms/StepButtonsControlers.module.css";

const StepButtonsControlers = ({
  setCurrentStep,
  currentStep,
  maxSteps,
  text,
  form,
  template,
}) => {
  return (
    <div className={styles.buttonsContainer}>
      {currentStep != 1 && (
        <Button
          text={text?.buttons?.back}
          alternative
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      )}
      {currentStep != maxSteps && (
        <Button
          text={text?.buttons?.continue}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
      )}
      {currentStep == maxSteps && (
        <Button
          text={text?.buttons?.send}
          type="submit"
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          form={form}
          template={template}
        />
      )}
    </div>
  );
};

export default StepButtonsControlers;
