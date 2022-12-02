import styles from '../../styles/forms/Switch.module.css'
const Switch = ({ setSwitch, htmlId }) => {
  return (
    <div className={styles.switchContainer}>
      <span className={styles.switch}>
        <input
          type="checkbox"
          id={htmlId}
          onChange={({target}) => setSwitch(target.checked ?  "es" : "en")}
        />
        <label htmlFor={htmlId}></label>
      </span>
    </div>
  );
};

export default Switch;
