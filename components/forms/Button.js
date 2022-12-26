import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import styles from "../../styles/forms/Button.module.css";
const Button = ({
  text,
  alternative = false,
  type = "button",
  setCurrentStep,
  currentStep,
  form,
  template,
  setActiveModal,
}) => {
  // const router = useRouter();
  const handleStep = () => {
    setCurrentStep(alternative ? currentStep - 1 : currentStep + 1);
  };
  const handleModal = () => {
    setActiveModal(true);
  };
  const handleModalCancel = () => {
    setActiveModal(false);
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(form);
    emailjs.send("service_k187wmh", template, form, "xa8yYdLQeKh8mvwuJ");
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
      ) : type == "finish" ? (
        <button className={styles.button} onClick={handleModal}>
          {text}
        </button>
      ) : type == "cancel" ? (
        <button
          className={styles.buttonAlternative}
          onClick={handleModalCancel}
        >
          {text}
        </button>
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
