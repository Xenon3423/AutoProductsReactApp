import styles from "./Text1.module.css";

const Text1 = () => {
  return (
    <div className={styles.text}>
      <div className={styles.buttonParent}>
        <button className={styles.button}>
          <div className={styles.button1} />
          <b className={styles.b}>ЧИТАТЬ ВСЕ НОВОСТИ</b>
        </button>
        <div className={styles.div}>
          <img
            className={styles.child}
            loading="lazy"
            alt=""
            src="/group-5@2x.png"
          />
          <img
            className={styles.item}
            loading="lazy"
            alt=""
            src="/group-6@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Text1;
