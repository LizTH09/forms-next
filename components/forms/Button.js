import emailjs from "@emailjs/browser";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useRouter } from "next/router";
import styles from "../../styles/forms/Button.module.css";
import ButtonExport from "./pdf/ButtonExport";
import PdfRenovation from "./pdf/PdfRenovation";
const Button = ({
  text,
  alternative = false,
  type = "button",
  setCurrentStep,
  currentStep,
  form,
  template,
  setActiveModal,
  date,
}) => {
  const router = useRouter();
  const handleStep = () => {
    setCurrentStep(alternative ? currentStep - 1 : currentStep + 1);
  };
  const handleModal = () => {
    setActiveModal(true);
  };
  const handleModalCancel = () => {
    setActiveModal(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    // postData(form);
    emailjs
      .send("service_k187wmh", template, form, "xa8yYdLQeKh8mvwuJ")
      .then(router.push("/"));
    // .then(router.push(`/forms/payment/${form.code}`));
  };
  // const postData = async (form) => {
  //   try {
  //     console.log(form);
  //     const res = await fetch("/api/renovation/renovationForm.js", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(form),
  //     });
  //     const data = await res.json()
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      {type == "submit" ? (
        // <PDFDownloadLink
        //   document={<PdfRenovation text={text} form={form} date={date} />}
        //   fileName={`renovation.pdf`}
        // >
        <input
          className={styles.button}
          type="submit"
          value="Yes"
          onClick={sendEmail}
        />
      ) : // </PDFDownloadLink>
      type == "finish" ? (
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
