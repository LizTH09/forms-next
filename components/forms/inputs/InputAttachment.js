import { useEffect, useState } from "react";
import styles from "../../../styles/forms/inputs/InputAttachment.module.css";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const InputAttachment = ({
  text,
  id,
  dataType,
  dataAccept,
  label,
  form,
  setForm,
  required,
}) => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  
  const changeHandler = (e) => {
    const file = e.target.files[0];
    setName(file.name);
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader = false;
    //   isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          setForm({ ...form, [id]: result });
        }
      };
      fileReader.readAsDataURL(file);
    }
    // return () => {
    //   isCancel = true;
    //   if (fileReader && fileReader.readyState === 1) {
    //     fileReader.abort();
    //   }
    // };
  }, [file]);

  return (
    <>
      {text && (
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel}>Photo</label>
          <p className={styles.fileName}>
            {form[id] ? "Image is Set" : "Select File"}
          </p>
          <input
            className={styles.input}
            type="file"
            id={form[id]}
            accept={dataAccept}
            onChange={changeHandler}
          />
        </div>
      )}
      {form[id] && (
        <div className={styles.imageContainer}>
          {<img className={styles.inputPhoto} src={form[id]} alt="preview" />}
        </div>
      )}
    </>
  );
};

export default InputAttachment;
