import styles from "./HeaderContainer.module.css";

const HeaderContainer = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.groupContent}>
        <div className={styles.logoContainer}>
          <div className={styles.frameLeft}>
            <h1 className={styles.h1}>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</h1>
            <button className={styles.button}>
              <div className={styles.button1} />
              <b className={styles.b}>ПЕРЕЙТИ В КАТАЛОГ</b>
            </button>
          </div>
        </div>
        <div className={styles.iMGContainer}>
          <div className={styles.iMGContainerChild} />
          <div className={styles.iMGContainerItem} />
          <div className={styles.iMGContainerInner} />
          <div className={styles.rectangleDiv} />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
