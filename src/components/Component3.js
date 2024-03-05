import { useMemo } from "react";
import styles from "./Component3.module.css";

const Component3 = ({
  qjwc9yzxxmqe1f6q75z21,
  prop,
  propBackgroundImage,
  propLeft,
  propWidth,
}) => {
  const divStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const div1Style = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className={styles.div} style={divStyle}>
      <img
        className={styles.qjwc9yzxxmqe1f6q75z21Icon}
        alt=""
        src={qjwc9yzxxmqe1f6q75z21}
      />
      <div className={styles.child} />
      <div className={styles.div1} style={div1Style}>
        {prop}
      </div>
      <div className={styles.button}>
        <div className={styles.button1} />
        <b className={styles.b}>ЗАКАЗАТЬ ОНЛАЙН</b>
      </div>
    </div>
  );
};

export default Component3;
