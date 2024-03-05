import Menu from "../components/Menu";
import HeaderContainer from "../components/HeaderContainer";
import Component4 from "../components/Component4";
import Component2 from "../components/Component2";
import Component1 from "../components/Component1";
import Component from "../components/Component";
import GroupOfLogos from "../components/GroupOfLogos";
import Text1 from "../components/Text1";
import Footer from "../components/Footer";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.div}>
      <section className={styles.banner}>
        <img className={styles.icon} alt="" src="/--4-1@2x.png" />
        <Menu />
        <HeaderContainer />
      </section>
      <Component4 />
      <Component2 />
      <Component1 />
      <Component />
      <section className={styles.section}>
        <div className={styles.automotiveAccessories}>
          <div className={styles.textInput}>
            <h1 className={styles.h1}>новости</h1>
            <div className={styles.buttonForCall} />
          </div>
        </div>
        <GroupOfLogos />
        <Text1 />
      </section>
      <img className={styles.icon1} alt="" src="/-3.svg" />
      <Footer />
    </div>
  );
};

export default Frame;
