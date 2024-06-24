import bannerImg from "/assets/img/Home/bannerfullseize.jpg"
import styles from "./Banner.module.css"
export const Banner = () => {
    return(
        <section className={styles.mainbanner}>
            <img src={bannerImg} alt="" />
        </section>
    )
}