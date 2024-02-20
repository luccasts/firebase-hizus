import { Banner } from "../../components/banner/banner";
import { Card } from "../../components/card/Card";
import { Footer } from "../../components/footer/Footer";
import "./index.css"
export const Home = () => {

    return (
        <>
            <Banner />
        <main className="wrapper">
            <Card/>

        </main>
        <Footer />
            
        </>
    );


}