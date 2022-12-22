import styles from "../../styles/forms/StepIndicator.module.css";
const StepIndicator = ({ maxSteps, currentStep }) => {
  const createStep = () => {
    let arraySteps = [];
    for (let i = 0; i < maxSteps; i++) {
      arraySteps.push(i + 1);
    }
    return arraySteps;
  };
  return (
    <div className={styles.stepContainer}>
      {createStep().map((stepId) => (
        <div className={styles.containerIndicator} key={stepId}>
          <span
            className={`${styles.step} ${
              stepId <= currentStep && styles.activeStep
            }`}
          >
            {stepId}
          </span>
          {stepId != maxSteps && <span className={`${styles.lineStep} ${stepId < currentStep && styles.lineStepActive}`}></span>}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
