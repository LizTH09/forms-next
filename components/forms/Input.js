import InputText from "./inputs/InputText";
import InputTel from "./inputs/InputTel";
import InputNumber from "./inputs/InputNumber";
import InputDropDown from "./inputs/InputDropDown";
import InputSignature from "./inputs/InputSignature";

const Input = ({ text, id, dataType, dataAccept, label, width }) => {
  return (
    <>
      {dataType == "text" && (
        <InputText
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          label={label}
          width = {width}
        />
      )}
      {dataType == "tel" && (
        <InputTel
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          label={label}
          width = {width}
        />
      )}
      {dataType == "number" && (
        <InputNumber
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          label={label}
          width = {width}
        />
      )}
      {dataType == "dropDown" && (
        <InputDropDown
          text={text}
          id={id}
          dataAccept={dataAccept}
          label={label}
          width = {width}
        />
      )}
      {dataType == "signature" && (
        <InputSignature
          text={text}
          id={id}
          dataAccept={dataAccept}
          label={label}
          width = {width}
        />
      )}
      {dataType == "newSection" && (
        <div style={{width: "100%", height: "2px", background: "gray", margin: "20px 0"}}></div>
      )}
    </>
  );
};

export default Input;
