import { ReactNode } from "react";
import "./Button.css"
import { Link } from "react-router-dom";


interface IId{
    id:string  | undefined
    children: ReactNode
    color?: string
    bgColor?: string
}


export const Button = ({id, children, bgColor, color}:IId ) => {
    
    return (
    <button  className="button-price"> <Link style={{backgroundColor:bgColor, color:color} } className="button-price-link" to={`/produtos/${id}`}>{children}</Link></button>
    
)}