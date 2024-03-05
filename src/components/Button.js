import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={styles.button}>
      <div className={styles.button1} />
      <b className={styles.b}>ЗАКАЗАТЬ ЗВОНОК</b>
    </div>
  );
};

export default Button;
