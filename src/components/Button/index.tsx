import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css"

interface IId {
    id: string | undefined
    children: ReactNode
    color?: string
    bgColor?: string
}


export const Button = ({ id, children, bgColor, color }: IId) => {

    return (
        <button className={styles.button}>
            <Link style={{ backgroundColor: bgColor, color: color }} className={styles.button_link} to={`/produtos/${id}`}>
                {children}
            </Link>
        </button>

    )
}