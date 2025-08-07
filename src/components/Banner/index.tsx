import styles from "./Banner.module.css";
import bannerImg from "../../assets/img/Home/banner.png";
export const Banner = () => {
  return (
    <section className={styles.mainBanner}>
      <img src={bannerImg} alt="Imagem do Banner" />
    </section>
  );
};
