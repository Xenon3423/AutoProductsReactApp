import Component3 from "./Component3";
import styles from "./Component2.module.css";

const Component2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.child} />
      <div className={styles.text}>
        <img className={styles.icon} alt="" src="/-2@2x.png" />
        <div className={styles.uzorDizajnLiniyaChernyjIB} />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.group}>
          <h1 className={styles.h1}>
            <span>
              <p className={styles.p}>{`Автотовары: аксессуары, `}</p>
              <p className={styles.p1}>расходники и многое другое</p>
            </span>
          </h1>
          <div className={styles.group1} />
        </div>
        <h3
          className={styles.proauto}
        >{`PROAuto - это специализированный интернет магазин востребованных товаров для автомобилей. `}</h3>
      </div>
      <div className={styles.textField}>
        <div className={styles.parent}>
          <div className={styles.div}>
            <img
              className={styles.b2bKeyvisualShooting2892BaIcon}
              alt=""
              src="/b2b-keyvisual-shooting-2892-batteriewechsel2-1@2x.png"
            />
            <div className={styles.text1} />
            <h3 className={styles.h3}>АККУМУЛЯТОРЫ</h3>
            <button className={styles.button}>
              <div className={styles.button1} />
              <b className={styles.b}>ЗАКАЗАТЬ ОНЛАЙН</b>
            </button>
          </div>
          <Component3
            qjwc9yzxxmqe1f6q75z21="/6qjwc9yzxxmqe-1f6q75z2-1@2x.png"
            prop="АВТОАКСЕССУАРЫ"
          />
        </div>
        <div className={styles.container}>
          <Component3
            qjwc9yzxxmqe1f6q75z21="/enginemaintenanceoilchange-1@2x.png"
            prop="АВТОМАСЛА"
            propBackgroundImage="url('/enginemaintenanceoilchange-1@2x.png')"
            propLeft="calc(50% - 110px)"
            propWidth="220px"
          />
          <div className={styles.div1}>
            <div className={styles.item} />
            <img
              className={styles.dvig1Icon}
              loading="lazy"
              alt=""
              src="/dvig-1@2x.png"
            />
            <div className={styles.div2}>АВТОХИМИЯ</div>
            <div className={styles.button2}>
              <div className={styles.button3} />
              <b className={styles.b1}>ЗАКАЗАТЬ ОНЛАЙН</b>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.div3}>
            <img
              className={styles.ed9b84faa459632f559365b4185f3cIcon}
              alt=""
              src="/26846315061985289ed9b84faa459632f559365b4185f3cf-1@2x.png"
            />
            <div className={styles.inner} />
            <div className={styles.button4}>
              <div className={styles.button5} />
              <b className={styles.b2}>ЗАКАЗАТЬ ОНЛАЙН</b>
            </div>
            <div className={styles.div4}>АВТОКОСМЕТИКА</div>
          </div>
          <div className={styles.full843imj5n1Parent}>
            <img
              className={styles.full843imj5n1Icon}
              loading="lazy"
              alt=""
              src="/full-843imj5n-1@2x.png"
            />
            <div className={styles.div5}>РАСХОДНИКИ</div>
            <div className={styles.button6}>
              <div className={styles.button7} />
              <b className={styles.b3}>ЗАКАЗАТЬ ОНЛАЙН</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component2;
