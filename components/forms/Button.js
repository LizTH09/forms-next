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
  setActiveModal,
  setHydeDownload,
  template
}) => {
  const router = useRouter();
  const handleStep = () => {
    setCurrentStep(alternative ? currentStep - 1 : currentStep + 1);
  };
  const handleModal = () => {
    setHydeDownload(true);
    setActiveModal(true);
  };
  const handleModalCancel = () => {
    setActiveModal(false);
    setHydeDownload(false);
  };
  const sendEmail = async(e) => {
    e.preventDefault();
    await postData(form);

    /*VOLVER A ACTIVAR*/

    emailjs
      .send("service_k187wmh", template, form, "xa8yYdLQeKh8mvwuJ")
      .then(router.push("/"));
    // .then(router.push(`/forms/payment/${form.code}`));
  };

  //SENDING INFORMATION IN JSON FORMAT

  const postData = async (form) => {
    try {
      const res = await fetch("/api/renovation/renovation", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {type == "submit" ? (
        //"YES" BUTTON IN MODAL
        <input
          className={styles.button}
          type="submit"
          value="Yes"
          onClick={sendEmail}
        />
      ) : //"NEXT" AND "FINISH" BUTTON
      type == "finish" ? (
        <button className={styles.button} onClick={handleModal}>
          {text}
        </button>
      ) : type == "cancel" ? (
        //CANCEL AND "X" BUTTON IN MODAL
        <button
          className={styles.buttonAlternative}
          onClick={handleModalCancel}
        >
          {text}
        </button>
      ) : (
        //BACK BUTTON IN MODAL
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
