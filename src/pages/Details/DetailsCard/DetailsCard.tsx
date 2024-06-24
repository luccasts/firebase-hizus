import React from 'react'
import { IProdutos } from "../../../types/produtos"
import { Button } from "../../../components/Button"
import "./DetailsCard.css"
interface IProps {
    produto:IProdutos
}

export const DetailsCard = ({produto}:IProps) => {
    const id = produto.id
    const title = produto.title?.slice(0,150)
    const value = produto.value
    const discountValue = produto.discountValue
    const imgMain = produto.imgMain
   
    return (
        
        <section id="section-details" className="section">
                    <img id="img-details" src={imgMain} alt={ "imagem " + title} />
                    <section className="section-text" >
                        <h3>{title}</h3>   
                        <p className="black-line">de <span className="red-line">R${value}</span></p>
                        <p className="green-line">
                            valor a vista:
                        </p>    
                        <p className="green-line green-line-price">R${discountValue}</p>
                        <Button id={id}>Comprar</Button>
                    </section>
        </section>
    )
}
