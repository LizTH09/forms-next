import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import styles from "/styles/forms/inputs/InputSignature.module.css";

const InputSignature = ({ text, id, dataAccept, label, form, setForm }) => {
  const sigCanvas = useRef({});
  const [disableSave, setDisableSave] = useState(false);
  const handleClickSave = () => {
    if (!sigCanvas.current.isEmpty()) {
      setForm({
        ...form,
        [id]: sigCanvas?.current?.getTrimmedCanvas()?.toDataURL("image/png"),
      });
      setDisableSave(true);
      sigCanvas?.current?.off();
    }
  };
  const handleClickClear = () => {
    if (!sigCanvas.current.isEmpty()) {
      sigCanvas.current.clear();
      setDisableSave(false);
      sigCanvas?.current?.on();
    }
    setForm({
      ...form,
      [id]: "",
    });
  };
  return (
    <div className={styles.signatureContainer}>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          className: styles.sigCanvas,
        }}
      ></SignatureCanvas>
      <div className={styles.signatureButtonsContainer}>
        <button
          className={styles.buttonSave}
          onClick={handleClickSave}
          disabled={disableSave}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={disableSave == false ? styles.save : styles.saveDisabled}
            viewBox="0 0 16 16"
          >
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
        </button>
        <button className={styles.buttonCancel} onClick={handleClickClear}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={styles.cancel}
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputSignature;
