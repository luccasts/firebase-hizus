import { Link, Outlet } from "react-router-dom"

import "./index.css"
import  {Search}  from "../../components/search/search"
export const Layout = () => {
    
            // <ul className="navbar">
            //          <li className="nav-item"> <Link to={"/"}>home</Link></li>
            //          <li className="nav-item"><Link to={"/product"}>produtos</Link></li>
            // </ul>    

    function toggleProduct (){
        const nav = document.getElementById('nav')  
    }
    const btn = document.getElementById('btn-nav')    
            
    btn?.addEventListener('click', toggleProduct );
    return (
        <>
        <header id='nav' className="nav">
            <h1 id='h1-nav-title'> <a href="/"  className="nav-title nav-one-line ">Hizus</a> </h1>
            <nav className="nav-primary">
                <button id='btn-nav' className="nav-button">Produtos</button>
                <ul>
                    <li><a href="/">Periféricos</a></li>
                    <li><a href="/">Hardware</a></li>
                </ul>
                <div className="search">
                 <Search></Search>
                </div>
            </nav>

        </header>
                    <Outlet />
        </>
    )
}