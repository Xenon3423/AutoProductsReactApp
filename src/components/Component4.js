import styles from "./Component4.module.css";

const Component4 = () => {
  return (
    <section className={styles.section}>
      <img className={styles.child} alt="" src="/rectangle-5.svg" />
      <div className={styles.item} />
      <div className={styles.frameLogo}>
        <div className={styles.frameText}>
          <div className={styles.div}>Наличный и безналичный расчет</div>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-6.svg" />
            <img
              className={styles.icoIcon}
              loading="lazy"
              alt=""
              src="/ico@2x.png"
            />
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.logoFrame}>
            <img
              className={styles.logoFrameChild}
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
            <div className={styles.div1}>Техническая помощь и консультация</div>
          </div>
        </div>
      </div>
      <div className={styles.inner} />
      <div className={styles.frameLogo1}>
        <div className={styles.frameLogoInner}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
            <div className={styles.frameFooter}>
              <div className={styles.div2}>
                Только качественная и проверенная продукция
              </div>
              <img
                className={styles.unionIcon}
                loading="lazy"
                alt=""
                src="/union.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.frameDiv}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-3@2x.png"
            />
          </div>
          <img className={styles.unionIcon1} alt="" />
          <div className={styles.div4}>
            <p className={styles.p}>Мы всегда на связи</p>
            <p className={styles.p1}>с 9:00 до 18:00!</p>
          </div>
          <img className={styles.unionIcon2} alt="" src="/union.svg" />
        </div>
      </div>
    </section>
  );
};

export default Component4;
