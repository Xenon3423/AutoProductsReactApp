import Button from "./Button";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <header className={styles.menu}>
      <div className={styles.group}>
        <div className={styles.logo}>
          <div className={styles.footerFrame}>
            <img className={styles.iFRAME} alt="" src="/i-f-r-a-m-e.svg" />
            <img className={styles.iFRAME1} alt="" src="/vector-1.svg" />
            <img className={styles.iFRAME2} alt="" src="/vector-2.svg" />
            <img className={styles.buttonIcon} alt="" src="/vector-3.svg" />
          </div>
          <div className={styles.textParent}>
            <img
              className={styles.textIcon}
              loading="lazy"
              alt=""
              src="/1421290208.svg"
            />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>КОМПАНИЯ</div>
      </div>
      <div className={styles.menuChild} />
      <div className={styles.container}>
        <div className={styles.div1}>КАТАЛОГ</div>
      </div>
      <div className={styles.menuItem} />
      <div className={styles.frame}>
        <div className={styles.div2}>УСЛУГИ</div>
      </div>
      <div className={styles.menuInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.frameDiv}>
        <div className={styles.div3}>ИНФОРМАЦИЯ</div>
      </div>
      <div className={styles.menuChild1} />
      <div className={styles.wrapper1}>
        <div className={styles.div4}>КОНТАКТЫ</div>
      </div>
      <div className={styles.group1}>
        <Button />
      </div>
      <div className={styles.wrapper2}>
        <img className={styles.icon} loading="lazy" alt="" src="/@2x.png" />
      </div>
      <img className={styles.icon1} alt="" src="/-1.svg" />
      <div className={styles.div5}>
        <div className={styles.child} />
        <b className={styles.vector}>0</b>
      </div>
    </header>
  );
};

export default Menu;
