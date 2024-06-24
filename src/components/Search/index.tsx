import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.css"

export const Search = () => {
    return(
        <div className={styles.joinSearch}>
            <input id='Search' className="input-search" type="search" placeholder="Pesquisar" />
            <button type="submit" className="button-search">
                <CiSearch className="label-search-icon" />
            </button>
        </div>
       
    )

}