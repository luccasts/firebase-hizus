import { ReactNode } from "react";
import "./Button.css"
import { Link } from "react-router-dom";


interface IId{
    id:string  | undefined
    children: ReactNode
}


export const Button = ({id, children}:IId ) => {
    
    return (
    <button className="button-price"> <Link className="button-price-link" to={`/produtos/${id}`}>{children}</Link></button>
    
)}