import { GoArrowLeft } from "react-icons/go";
import  styles from "./NavBack.module.css"


export const NavBack = () => {
    
    function goBack():void {
    window.history.back();
    }
    return(
        <nav>
            <a onClick={goBack}>
                <GoArrowLeft  className={styles.GoArrowLeft}/>
            </a>
           
        </nav>
    )
} 
