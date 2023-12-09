import bannerImg from "../../_assets/img/adventure-time-.jpg"
import "./banner.css"
export const Banner = () => {
    return(
        <section className="main-banner">
            <img src={bannerImg} alt="" />
        </section>
    )
}