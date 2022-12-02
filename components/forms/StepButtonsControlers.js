import Button from "./Button";
import styles from "../../styles/forms/StepButtonsControlers.module.css";

const StepButtonsControlers = ({ setCurrentStep, currentStep, maxSteps }) => {
  return (
    <div className={styles.buttonsContainer}>
      {currentStep != 1 && <Button text="Back" alternative setCurrentStep={setCurrentStep} currentStep={currentStep}/>}
      {currentStep != maxSteps && <Button text="Next" setCurrentStep={setCurrentStep} currentStep={currentStep}/>}
      {currentStep == maxSteps && <Button text="Send" type="submit" setCurrentStep={setCurrentStep} currentStep={currentStep}/>}
    </div>
  );
};

export default StepButtonsControlers;
