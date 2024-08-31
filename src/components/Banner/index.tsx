import bannerImg from "/assets/img/Home/bannerfullsize.jpg"
import styles from "./Banner.module.css"
export const Banner = () => {
    return(
        <section className={styles.mainBanner}>
            <img src={bannerImg} alt="" />
        </section>
    )
}