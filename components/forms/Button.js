import styles from "../../styles/forms/Button.module.css";
const Button = ({
  text,
  alternative = false,
  type = "button",
  setCurrentStep,
  currentStep,
}) => {
  const handleStep = () => {
    setCurrentStep(alternative ? currentStep - 1 : currentStep + 1);
  };
  return (
    <>
      {type == "submit" ? (
        <input className={styles.button} type="submit" value={text} />
      ) : (
        <button
          className={alternative ? styles.buttonAlternative : styles.button}
          onClick={handleStep}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
