import SignatureCanvas from "react-signature-canvas";
import styles from "/styles/forms/inputs/InputSignature.module.css";

const InputSignature = ({ text, id, dataAccept, label }) => {
  return (
    <div>
      <label>{text[label]}</label>
      <SignatureCanvas
        penColor="black"
        canvasProps={{
          className: styles.sigCanvas,
        }}
      />
    </div>
  );
};

export default InputSignature;
