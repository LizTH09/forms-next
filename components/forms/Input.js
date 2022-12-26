import InputText from "./inputs/InputText";
import InputTel from "./inputs/InputTel";
import InputNumber from "./inputs/InputNumber";
import InputDropDown from "./inputs/InputDropDown";
import InputSignature from "./inputs/InputSignature";
import InputRadioButton from "./inputs/InputRadioButton";
import InputAttachment from "./inputs/InputAttachment";

const Input = ({
  text,
  id,
  dataType,
  name,
  dataAccept,
  label,
  form,
  setForm,
  required,
}) => {
  return (
    <>
      {dataType == "text" && (
        <InputText
          text={text?.labels}
          id={id}
          dataAccept={dataAccept}
          name={name}
          label={label}
          form={form}
          setForm={setForm}
          required={required}
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
          required={required}
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
          required={required}
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
          required={required}
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
          required={required}
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
          required={required}
        />
      )}
      {dataType == "attachment" && (
        <InputAttachment
          text={text}
          id={id}
          dataAccept={dataAccept}
          label={label}
          form={form}
          setForm={setForm}
          required={required}
        />
      )}
      {dataType == "newSection" && (
        <div
          style={{
            width: "100%",
            height: "2px",
            background: "gray",
            margin: "20px 0",
          }}
        ></div>
      )}
    </>
  );
};

export default Input;
