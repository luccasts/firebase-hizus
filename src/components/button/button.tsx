import "./Button.css"
import { Link } from "react-router-dom";


interface IId{
    id:string  | undefined
}


export const Button = ({id}:IId) => {
    
    return (
    <button className="button-price"> <Link className="button-price-link" to={`/produtos/${id}`}>Comprar</Link></button>
    
)}