import React from 'react'

const InputDropDown = ({ text, id, dataAccept, label }) => {
  return (
    <div>
      <label>{text.labels[label]}</label>
      <select id={id}>
        {text.options[label].map((value, index) => (
          <option value={index ? value : ""} disabled={!index} selected={!index}>{value}</option>
        ))}
      </select>
    </div>
  )
}

export default InputDropDown