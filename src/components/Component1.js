import styles from "./Component1.module.css";

const Component1 = () => {
  return (
    <section className={styles.section}>
      <img className={styles.topoboiIcon} alt="" src="/topoboi@2x.png" />
      <div className={styles.footer} />
      <img className={styles.child} alt="" src="/rectangle-48.svg" />
      <img className={styles.item} alt="" src="/rectangle-48.svg" />
      <div className={styles.iMG}>
        <div className={styles.textParent}>
          <div className={styles.text}>
            <h1 className={styles.h1}>услуги</h1>
            <div className={styles.button}>
              <div className={styles.vector} />
            </div>
          </div>
          <h3 className={styles.h3}>
            Менеджеры компании с радостью ответят на ваши вопросы и помогут с
            выбором продукции.
          </h3>
        </div>
      </div>
      <div className={styles.text1}>
        <div className={styles.text2}>
          <div className={styles.textGroup}>
            <div className={styles.text3}>
              <div className={styles.rectangle}>
                <div className={styles.text4}>
                  <img
                    className={styles.textChild}
                    alt=""
                    src="/rectangle-48.svg"
                  />
                  <div className={styles.vector1}>
                    <img
                      className={styles.vectorChild}
                      alt=""
                      src="/rectangle-6-1.svg"
                    />
                    <img
                      className={styles.vectorItem}
                      alt=""
                      src="/group-2-1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.logo}>
                  <b className={styles.b}>
                    БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА
                  </b>
                </div>
                <div
                  className={styles.div}
                >{`Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования. `}</div>
              </div>
              <div className={styles.rectangle1}>
                <div className={styles.vector2}>
                  <div className={styles.group}>
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/rectangle-34.svg"
                      />
                      <div className={styles.vectorGroup}>
                        <div className={styles.vector3} />
                        <div className={styles.group1} />
                        <div className={styles.group2} />
                        <div className={styles.group3} />
                      </div>
                      <img
                        className={styles.unionIcon}
                        alt=""
                        src="/union-2@2x.png"
                      />
                      <img
                        className={styles.unionIcon1}
                        alt=""
                        src="/union-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.text5}>
                    <b className={styles.b1}>
                      ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ
                    </b>
                    <div className={styles.div1}>
                      Принесите нам старую АКБ для легкового автомобиля, и мы
                      предоставим Вам скидку на новый аккумулятор!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.text6}>
                <div className={styles.button1}>
                  <div className={styles.rectangle2}>
                    <img
                      className={styles.rectangleChild}
                      loading="lazy"
                      alt=""
                      src="/rectangle-34.svg"
                    />
                    <div className={styles.logoFrame}>
                      <div className={styles.logoFrameChild} />
                      <div className={styles.vectorGroup1} />
                      <div className={styles.vectorGroup2} />
                      <div className={styles.vectorGroup3} />
                      <div className={styles.vectorGroup4} />
                      <div className={styles.vectorGroup5} />
                    </div>
                  </div>
                  <div className={styles.textGroup1} />
                </div>
                <div className={styles.iMG1}>
                  <b className={styles.b2}>
                    БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА
                  </b>
                  <div className={styles.div2}>
                    Приезжайте к нам и мы бесплатно проведём диагностику вашего
                    аккумулятора!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.group4}>
          <div className={styles.vector4}>
            <div className={styles.wrapperInstance}>
              <img
                className={styles.instanceIcon}
                alt=""
                src="/instance@2x.png"
              />
            </div>
            <img
              className={styles.footerFrameIcon}
              loading="lazy"
              alt=""
              src="/polygon-2.svg"
            />
            <img className={styles.iMG2} alt="" src="/i-m-g.svg" />
          </div>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <img
            className={styles.frameIcon1}
            loading="lazy"
            alt=""
            src="/polygon-4.svg"
          />
          <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
          <img
            className={styles.textIcon}
            loading="lazy"
            alt=""
            src="/polygon-5.svg"
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button2}>
          <div className={styles.button3} />
          <b className={styles.b3}>ЗАДАТЬ ВОПРОС</b>
        </button>
      </div>
    </section>
  );
};

export default Component1;
