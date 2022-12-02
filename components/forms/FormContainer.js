import styles from "../../styles/forms/FormContainer.module.css";

const FormContainer = ({ children }) => {
  return <div className={styles.formContainer}>{children}</div>;
};

export default FormContainer;
