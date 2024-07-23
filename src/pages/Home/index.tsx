import { useContext } from "react";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { LoginContext } from "../../context/Login";
import "./index.css"

export const Home = () => {
    const {login} = useContext(LoginContext)
    console.log(login)
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