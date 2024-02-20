import { CiSearch } from "react-icons/ci";

import "./Search.css"
export const Search = () => {
    return(
        <div className="join-search">
            <input id='Search' className="input-search" type="search" placeholder="Pesquisar" />
            <button type="submit" className="button-search">
                <CiSearch className="label-search-icon" />
            </button>
        </div>
       
    )

}