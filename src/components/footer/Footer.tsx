import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer-background-color footer-grid">
            <nav className="footer-nav">
                <div>
                    <h1><Link to={"/"}></Link>Hizus</h1>
                </div>
                <div>
                <h3>Menu</h3>
                <ul>
                    <li><Link to={"/"}>Home</Link></li> 
                    <li><Link to={"/promocoes"}>Promoções</Link></li>
                    <li><Link to={"/perifericos"}>Periféricos</Link></li>
                </ul>
                </div>

                <div>
                <h3>Contatos</h3>
                <ul>
                    <li><Link to={"/"}>Linkedin</Link></li>
                    <li><Link to={"/"}>Github</Link></li>
                </ul>
                </div>
            </nav>
        </footer>
    )
}