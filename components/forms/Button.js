import emailjs from "@emailjs/browser";
import styles from "../../styles/forms/Button.module.css";
const Button = ({
  text,
  alternative = false,
  type = "button",
  setCurrentStep,
  currentStep,
  form,
  template
}) => {
  const handleStep = () => {
    setCurrentStep(alternative ? currentStep - 1 : currentStep + 1);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_k187wmh", template, form, "xa8yYdLQeKh8mvwuJ")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    // .then(router.push(`/forms/payment/${form.code}`));
  };
  return (
    <>
      {type == "submit" ? (
        <input
          className={styles.button}
          type="submit"
          value={text}
          onClick={sendEmail}
        />
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
