import { GoArrowLeft } from "react-icons/go";
import "./Navback.css"
import { Link } from "react-router-dom";

export const NavBack = () => {
    
    function goBack():void {
    window.history.back();
    }
    return(
        <nav>
            <a onClick={goBack}>
                <GoArrowLeft  className="GoArrowLeft"/>
            </a>
           
        </nav>
    )
} 
