import bannerImg from "/assets/img/Home/GamingSetup.png";
import styles from "./Banner.module.css";
export const Banner = () => {
  return (
    <section className={styles.mainBanner}>
      <img src={bannerImg} alt="" />
    </section>
  );
};
