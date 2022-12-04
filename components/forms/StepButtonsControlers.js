import Button from "./Button";
import styles from "../../styles/forms/StepButtonsControlers.module.css";

const StepButtonsControlers = ({ setCurrentStep, currentStep, maxSteps, text }) => {
  return (
    <div className={styles.buttonsContainer}>
      {currentStep != 1 && <Button text={text?.buttons?.button1} alternative setCurrentStep={setCurrentStep} currentStep={currentStep}/>}
      {currentStep != maxSteps && <Button text={text?.buttons?.button2} setCurrentStep={setCurrentStep} currentStep={currentStep}/>}
      {currentStep == maxSteps && <Button text={text?.buttons?.button3} type="submit" setCurrentStep={setCurrentStep} currentStep={currentStep}/>}
    </div>
  );
};

export default StepButtonsControlers;
