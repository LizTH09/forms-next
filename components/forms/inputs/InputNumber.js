

const InputNumber = ({ text, id, dataType, dataAccept, label }) => {
  return (
    <div>
      <label>{text[label]}</label>
      <input id={id} type={dataType}></input>
    </div>
  )
}

export default InputNumber