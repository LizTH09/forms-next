import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import styles from "/styles/forms/inputs/InputSignature.module.css";

const InputSignature = ({ text, id, dataAccept, label, form, setForm }) => {
  const sigCanvas = useRef({});
  const handleChange = () => {
    setForm({
      ...form,
      [id]: sigCanvas?.current?.getTrimmedCanvas()?.toDataURL("image/png"),
    });
  };

  return (
    <div>
      <label>{text[label]}</label>
      <SignatureCanvas
        penColor="black"
        ref={sigCanvas}
        canvasProps={{
          className: styles.sigCanvas,
        }}
      />
    </div>
  );
};

export default InputSignature;
