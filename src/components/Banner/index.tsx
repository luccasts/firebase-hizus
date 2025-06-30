import bannerImg from "/assets/img/Home/banner.png";
import styles from "./Banner.module.css";
export const Banner = () => {
  return (
    <section className={styles.mainBanner}>
      <img src={bannerImg} alt="Imagem do Banner" />
    </section>
  );
};
