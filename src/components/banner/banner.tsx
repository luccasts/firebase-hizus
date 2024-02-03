import bannerImg from "../../_assets/img/bannerfullseize.jpg"
import "./banner.css"
export const Banner = () => {
    return(
        <section className="main-banner">
            <img src={bannerImg} alt="" />
        </section>
    )
}