import InputText from "./inputs/InputText";
import InputTel from "./inputs/InputTel";
import InputNumber from "./inputs/InputNumber";
import InputDropDown from "./inputs/InputDropDown";
import InputSignature from "./inputs/InputSignature";
import InputRadioButton from "./inputs/InputRadioButton";

const Input = ({ text, id, dataType, dataAccept, label, form, setForm }) => {
  return (
    <>
      {dataType == "text" && (
        <InputText
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          label={label}
          form={form}
          setForm={setForm}
        />
      )}
      {dataType == "tel" && (
        <InputTel
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          label={label}
          form={form}
          setForm={setForm}
        />
      )}
      {dataType == "number" && (
        <InputNumber
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          label={label}
          form={form}
          setForm={setForm}
        />
      )}
      {dataType == "dropDown" && (
        <InputDropDown
          text={text}
          id={id}
          dataAccept={dataAccept}
          label={label}
          form={form}
          setForm={setForm}
        />
      )}
      {dataType == "radio" && (
        <InputRadioButton
          text={text}
          id={id}
          dataAccept={dataAccept}
          label={label}
          form={form}
          setForm={setForm}
        />
      )}
      {dataType == "signature" && (
        <InputSignature
          text={text}
          id={id}
          dataAccept={dataAccept}
          label={label}
          form={form}
          setForm={setForm}
        />
      )}
      {dataType == "newSection" && (
        <div style={{width: "100%", height: "2px", background: "gray", margin: "20px 0"}}></div>
      )}
    </>
  );
};

export default Input;
