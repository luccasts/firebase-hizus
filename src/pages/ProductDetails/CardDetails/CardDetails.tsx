import { IProdutos } from "../../../types/produtos";
import { Button } from "../../../components/Button";
import "./CardDetails.css";
import { discount } from '../../../utils/discount';
import styles from "./CardDetails.module.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface IProps {
    produto: IProdutos
}

const CardDetails = ({ produto }: IProps) => {
    const id = produto.id
    const title = produto.title
    const value = produto.value
    const discountValue = discount(value)
    const imgMain = produto.imgMain

    return (

        <section id="section-details">
            <img id="img-details" src={imgMain} alt={"imagem " + title} />
            <div className="section-text" >
                <h1>{title}</h1>
                <p className="black-line">de <span className="red-line">R${value}</span></p>
                <div className={styles.div_green}>
                    <p className="green-line">
                        valor a vista:
                    </p>
                    <p className="green-line green-line-price">R${discountValue}</p>

                </div>


                <Button id={id}>Comprar</Button>
                <div className={styles.div_shoppingCart}>
                    <Button color='white' bgColor="#0a69c2" id={id}>
                        Adicionar ao carrinho
                        <AiOutlineShoppingCart size={22}  />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CardDetails;