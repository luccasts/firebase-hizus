import "./Card.css"
import Information from "../Information"

import { useContext } from "react"
import { ProductsContext } from "../../context/Products"



export const Card = () => {
    const { produtos } = useContext(ProductsContext);
    return (
        <>
            <div>
                {produtos && produtos.length ? (
                    <div>
                        {
                            produtos?.map((produto) => (
                                <Information key={produto.id} produto={produto} />
                            ))
                        }
                    </div>
                ) : (
                        <div className="loading-div"> <span className="loading"></span></div>
                    )
                }
            </div>
        </>

    )
}
