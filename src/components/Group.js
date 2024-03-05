import styles from "./Group.module.css";

const Group = ({ prop, prop1 }) => {
  return (
    <div className={styles.group}>
      <div className={styles.groupChild} />
      <div className={styles.text}>
        <div className={styles.div}>{prop}</div>
        <b className={styles.b}>{prop1}</b>
      </div>
      <img className={styles.unionIcon} alt="" src="/union-4.svg" />
    </div>
  );
};

export default Group;
