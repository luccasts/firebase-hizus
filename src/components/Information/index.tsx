import "../Card/Card.css"
import React from 'react'
import {Button} from "../Button"
import { IProdutos } from "../../types/produtos"

interface IProps {
    produto:IProdutos
}

function Information({produto}:IProps) {
    const id = produto.id
    const title = produto.title?.slice(0,150)
    const value = produto.value
    const discountValue = produto.discountValue
    const imgMain = produto.imgMain
   
    return (
        
        <section className="section-list">
            <ul className="ul-list">
                <li className="ul-list-li">
                    <img src={imgMain} alt={ "imagem " + title} />
                    <section className="ul-list-section" >
                        <h3>{title}</h3>   
                        <p className="black-line">de <span className="red-line">R${value}</span></p>
                        <p className="green-line">
                            valor a vista:
                        </p>    
                        <p className="green-line green-line-price">R${discountValue}</p>
                        <Button id={id}>Comprar</Button>
                    </section>
                </li>

            </ul>
        </section>
    )
}

export default Information