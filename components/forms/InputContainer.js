import styles from '/styles/forms/InputContainer.module.css'

const InputContainer = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default InputContainer