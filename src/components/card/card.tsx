import "./card.css"
import mouse from "../../_assets/img/mouse.jpg"

import {Button} from "../button/button"
export const Card = () => {
    return (
        <section className="section-list">
            <ul className="ul-list">
                <li className="ul-list-li">
                    <img src={mouse}   alt="img1" />
                    <section className="ul-list-section" >
                        <h3>Mouse Pad Mouse Pad Mouse Pad Mouse Pad Mouse Pad Mouse Pad Mouse Pad Mouse Pad </h3>
                        <p className="black-line">de <span className="red-line">R$ 235,18</span></p>
                        <p className="green-line"> 
                            valor a vista:   
                        </p>
                        <p className="green-line green-line-price"> R$ 154,44</p>
                       <Button></Button>
                    </section>
                </li>
               
            </ul>
        </section>
    )
}