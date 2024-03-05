import styles from "./Component.module.css";

const Component = () => {
  return (
    <section className={styles.section}>
      <div className={styles.groupOfLogos}>
        <img
          className={styles.porscheNormal1Icon}
          alt=""
          src="/porschenormal-1@2x.png"
        />
        <div className={styles.vectorFrame} />
      </div>
      <div className={styles.logo}>
        <img
          className={styles.ae813ecad043145f7348e1Icon}
          alt=""
          src="/551ae813ecad043145f7348e-1@2x.png"
        />
        <div className={styles.rectangle}>
          <img
            className={styles.rectangleChild}
            alt=""
            src="/rectangle-6-2.svg"
          />
        </div>
      </div>
      <div className={styles.checkbox}>
        <div className={styles.group}>
          <h1 className={styles.h1}>о компании</h1>
          <div className={styles.frameWithFooter} />
        </div>
        <div className={styles.companyLogos}>
          <div className={styles.companyLogosChild} />
          <div className={styles.proAutoContainer}>
            <p
              className={styles.p}
            >{`Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в `}</p>
            <p
              className={styles.proAuto}
            >{`«PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией `}</p>
            <p className={styles.p1}>и аксессуаров.</p>
          </div>
          <div className={styles.frameWithServices}>
            <button className={styles.button}>
              <div className={styles.button1} />
              <b className={styles.b}>УЗНАТЬ БОЛЬШЕ</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
