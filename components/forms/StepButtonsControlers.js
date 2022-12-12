import Button from "./Button";
import styles from "../../styles/forms/StepButtonsControlers.module.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./pdf/PdfAmendment";
import ButtonExport from "./pdf/ButtonExport";

const StepButtonsControlers = ({
  setCurrentStep,
  currentStep,
  maxSteps,
  text,
  form,
  template,
  date,
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
