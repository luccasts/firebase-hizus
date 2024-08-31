import { IProdutos } from "../../../types/produtos";
import styles from "./CardDescription.module.css"
interface IProduct {
    produto: IProdutos
}


const CardDescrition = ({ produto }: IProduct) => {
    return (
        <div className={styles.div}>
            <h3 className={styles.h3}>Descrição</h3>
            <p className={styles.p}>
                {produto.description}
            </p>
        </div>

    )
}

export default CardDescrition;