import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <img className={styles.img602011Icon} alt="" src="/img-60201-1@2x.png" />
      <div className={styles.footerInner}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img
              className={styles.vectorGroupLogo}
              alt=""
              src="/vector-6.svg"
            />
            <img
              className={styles.vectorGroupLogo1}
              alt=""
              src="/vector-7.svg"
            />
            <img
              className={styles.vectorGroupLogo2}
              alt=""
              src="/vector-8.svg"
            />
            <img className={styles.groupIcon} alt="" src="/group-11.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector-5.svg" />
            <img
              className={styles.frameSeparatorIcon}
              alt=""
              src="/1421290208-1.svg"
            />
            <img className={styles.vectorIcon1} alt="" src="/vector-9.svg" />
          </div>
          <div className={styles.proAutoContainer}>
            <p className={styles.proAuto}>{`© 2019 PRO Auto. `}</p>
            <p className={styles.p}>Все права защищены.</p>
          </div>
        </div>
      </div>
      <div className={styles.frameCompanyInfo}>
        <div className={styles.frameHeader}>
          <div className={styles.frameCompany}>
            <div className={styles.div}>КОМПАНИЯ</div>
            <div className={styles.frameLicensingPartners}>
              <div className={styles.div1}>О КОМПАНИИ</div>
              <div className={styles.div2}>ЛИЦЕНЗИИ</div>
              <div className={styles.div3}>ПАРТНЕРЫ</div>
              <div className={styles.div4}>ОТЗЫВЫ КЛИЕНТОВ</div>
              <div className={styles.div5}>РЕКВИЗИТЫ</div>
              <div className={styles.div6}>ВАКАНСИИ</div>
            </div>
          </div>
          <div className={styles.frameCatalogAccumulatorsAut}>
            <div className={styles.div7}>КАТАЛОГ</div>
            <div className={styles.frameReceptionOfAccumulator}>
              <div className={styles.div8}>АККУМУЛЯТОРЫ</div>
              <div className={styles.div9}>АВТОМАСЛА</div>
              <div className={styles.div10}>АКСЕССУАРЫ</div>
              <div className={styles.div11}>АВТОХИМИЯ</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.text1}>
            <div className={styles.parent}>
              <div className={styles.div12}>УСЛУГИ</div>
              <div className={styles.div13}>ДИАГНОСТИКА АККУМУЛЯТОРА</div>
            </div>
            <div className={styles.div14}>ПРИЕМ АККУМУЛЯТОРОВ</div>
          </div>
          <div className={styles.info}>
            <div className={styles.div15}>ИНФОРМАЦИЯ</div>
            <div className={styles.news}>
              <div className={styles.div16}>АКЦИИ</div>
              <div className={styles.div17}>НОВОСТИ</div>
              <div className={styles.div18}>СТАТЬИ</div>
              <div className={styles.div19}>ВОПРОС - ОТВЕТ</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vector}>
        <div className={styles.frame}>
          <div className={styles.subtract}>
            <img
              className={styles.proautoyandexruIcon}
              alt=""
              src="/vector-15.svg"
            />
            <div className={styles.notapplicableforthesenodesasth}>
              <div className={styles.notapplicableforthesenodesasth1}>
                +7 (342) 279-36-13
              </div>
            </div>
          </div>
          <div className={styles.ordercall}>
            <div className={styles.subtractWrapper}>
              <img
                className={styles.subtractIcon}
                alt=""
                src="/subtract-1.svg"
              />
            </div>
            <div className={styles.proauto59yandexru}>proauto59@yandex.ru</div>
          </div>
        </div>
        <div className={styles.proautoyandexrulogo}>
          <button className={styles.button}>
            <div className={styles.button1} />
            <b className={styles.b}>ЗАКАЗАТЬ ЗВОНОК</b>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
