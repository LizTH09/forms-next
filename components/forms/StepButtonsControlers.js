import Button from "./Button";
import styles from "../../styles/forms/StepButtonsControlers.module.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./pdf/PdfAmendment";
import ButtonExport from "./pdf/ButtonExport";
import FormModal from "./FormModal";
import { useState } from "react";

const StepButtonsControlers = ({
  setCurrentStep,
  currentStep,
  maxSteps,
  text,
  form,
  template,
  date,
  setHydeDownload,
}) => {
  const [activeModal, setActiveModal] = useState(false);
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
          type="finish"
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          // form={form}
          // template={template}
          setActiveModal={setActiveModal}
          setHydeDownload={setHydeDownload}
        />
      )}
      {activeModal == true && (
        <FormModal form={form} template={template} setActiveModal={setActiveModal}>
          <p className={styles.text}>
            Are you sure the information registered on this form is correct? If
            all it's correct, press <span className={styles.boldWord}>Yes</span>{" "}
            to confirm your registration.
          </p>
          <div className={styles.modalButtonsContainer}>
            <Button
              text="No"
              alternative
              type="cancel"
              setActiveModal={setActiveModal}
            />
            <Button text={text} type="submit" form={form} template={template} date={date}/>
          </div>
        </FormModal>
      )}
    </div>
  );
};

export default StepButtonsControlers;
