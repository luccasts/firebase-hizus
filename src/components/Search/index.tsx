import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.css"
import logo from "/assets/icon/logohizus.png"
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai"
import { FormEvent, useState } from "react";




export const Search = () => {

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        location.pathname = `/busca/${valueInput}`
    }
    const [valueInput, setValueInput] = useState("");

    return (
        <div className={styles.containerSearch}>
            <Link to="/">

                <img src={logo} width={100} height={50} alt="" />
            </Link>

            <form method="get" onSubmit={(e) => handleSearch(e)} className={styles.joinSearch}>
                <input onChange={(e) => setValueInput(e.target.value)} id='Search' className={`${styles.inputSearch}`} type="search" placeholder="Pesquisar" />
                <button type="submit" className={styles.buttonSearch}>
                    <CiSearch className="label-search-icon" />
                </button>
            </form>
            <Link to={"/login"}>
                <AiOutlineUser className="header-user-img" />
            </Link>

        </div>

    )

}
