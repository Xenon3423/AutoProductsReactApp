import Group from "./Group";
import styles from "./GroupOfLogos.module.css";

const GroupOfLogos = () => {
  return (
    <div className={styles.groupOfLogos}>
      <div className={styles.text}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.companyInfoFrame}>
              <img
                className={styles.x9Lg1Icon}
                alt=""
                src="/40216416x9lg-1@2x.png"
              />
              <div className={styles.companyInfoFrameChild} />
            </div>
            <div className={styles.servicesAndInfoFrame}>
              <img className={styles.icon} alt="" src="/1421290208-1.svg" />
              <div className={styles.accessoriesSectionFrame}>
                <img className={styles.vectorIcon} alt="" src="/vector-5.svg" />
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.logoContainerParent}>
                  <img
                    className={styles.logoContainerIcon}
                    alt=""
                    src="/vector-6.svg"
                  />
                  <img
                    className={styles.logoContainerIcon1}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <img
                    className={styles.logoContainerIcon2}
                    alt=""
                    src="/vector-8.svg"
                  />
                </div>
                <img className={styles.groupIcon} alt="" src="/group-11.svg" />
              </div>
            </div>
            <img className={styles.vectorIcon1} alt="" src="/vector-9.svg" />
          </div>
          <Group
            prop="12 февраля 2020 года"
            prop1="У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!"
          />
        </div>
        <div className={styles.button}>
          <div className={styles.containerForTexts}>
            <div className={styles.containerForTextsChild} />
            <img
              className={styles.vartaFacebookBit11400x920Icon}
              loading="lazy"
              alt=""
              src="/vartafacebookbit11400x920-1@2x.png"
            />
          </div>
          <Group
            prop="10 февраля 2020 года"
            prop1="ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA "
          />
        </div>
        <div className={styles.button1}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.shutterstock7224890891Icon}
              loading="lazy"
              alt=""
              src="/shutterstock-722489089-1@2x.png"
            />
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.div}>5 февраля 2020 года</div>
            <b className={styles.online}>
              БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE
            </b>
            <img className={styles.unionIcon} alt="" src="/union-4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupOfLogos;
