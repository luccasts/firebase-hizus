import { Outlet } from "react-router-dom"
import { Search } from "../../components/Search"
import "./index.css"

import { Hamburger } from "../../components/Hamburger"
export const Layout = () => {
    function closed(){
        <Hamburger  onClick={()=> closed} isInitiallyOpen={false} />

    }
    return (
        <>
        <header id='header-nav' className="header-nav">
        <h1 id='nav-h1'> <a href="/"  className="">Hizus</a> </h1>
            {/* <Hamburger  onClick={()=> closed} isInitiallyOpen={true} ></Hamburger > */}
            <div className="search">
                <Search></Search>
            </div>
            <nav onClick={closed} className="nav-primary">
                <ul className="nav-ul">
                    <li className="nav-li"><a href="/">Periféricos</a></li>
                    <li className="nav-li"><a href="/">Hardware</a></li>
                </ul>
               
            </nav>
        </header>
                    <Outlet />
        </>
    )
}