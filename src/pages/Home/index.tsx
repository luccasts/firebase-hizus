import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
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