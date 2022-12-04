import InputText from "./inputs/InputText";
import InputTel from "./inputs/InputTel";
import InputNumber from "./inputs/InputNumber";
import InputDropDown from "./inputs/InputDropDown";

const Input = ({ text, id, dataType, dataAccept, label }) => {
  return (
    <>
      {dataType == "text" && (
        <InputText
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          label={label}
        />
      )}
      {dataType == "tel" && (
        <InputTel
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          label={label}
        />
      )}
      {dataType == "number" && (
        <InputNumber
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          label={label}
        />
      )}
      {dataType == "dropDown" && (
        <InputDropDown
          text={text}
          id={id}
          dataAccept={dataAccept}
          label={label}
        />
      )}
    </>
  );
};

export default Input;
