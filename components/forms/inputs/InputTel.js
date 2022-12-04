import React from "react";

const InputTel = ({ text, id, dataType, dataAccept, label }) => {
  return (
    <div>
      <label>{text[label]}</label>
      <input id={id} datatype={dataType}></input>
    </div>
  );
};

export default InputTel;
