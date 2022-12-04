import React from "react";

const InputText = ({ text, id, dataAccept, label }) => {
  return (
    <>
      {text && (
        <div>
          <label>{text[label]}</label>
          <input id={id}></input>
        </div>
      )}
    </>
  );
};

export default InputText;
