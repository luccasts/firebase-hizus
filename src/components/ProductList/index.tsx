import ProductInformation from "../Information"
import styles from "./ProductList.module.css"

import { useContext } from "react"
import { ProductsContext } from "../../context/Products"
import { IProdutos } from "../../types/produtos"

interface IProducts {
    map(arg0: (produto: IProdutos) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    length: IProducts
    produtos: IProducts
}

const ProductList = () => {
    const { produtos }:IProducts  = useContext(ProductsContext);
    return (
        <>
            <div className={styles.section_list}>
                {produtos && produtos.length ? (
                    <ul className={styles.ul_list}>
                        {
                            produtos?.map((produto: IProdutos) => (
                                <ProductInformation key={produto.id} produto={produto} />
                            ))
                        }
                    </ul>
                ) : (
                        <div className="loading-div"> <span className="loading"></span></div>
                    )
                }
            </div>
        </>

    )
}

export default ProductList;