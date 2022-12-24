import styles from "../../styles/forms/FormModal.module.css";

const FormModal = () => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.contenedorModal}>
          <div className={styles.encabezadoModal}>
            <h3 className={styles.title}>Hola</h3>
          </div>
          <button className={styles.buttonClose}>X</button>
        </div>
      </div>
    </>
  );
};

export default FormModal;
