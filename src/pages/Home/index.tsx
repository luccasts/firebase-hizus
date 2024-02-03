import { Banner } from "../../components/banner/banner";
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer";
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