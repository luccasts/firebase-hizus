import { Link} from "react-router-dom"
import { Search } from "../Search"

import "./Nav.css"

import { Hamburger } from "../Hamburger"
// import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"
import { useState } from "react"


const Nav = () => {
 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ , setOpen] = useState(false)

    return (
        <header id='header-nav' className="header-nav">
            <div className="search">
                <Search></Search>
            </div>
            <Hamburger onClick={() => closed} ></Hamburger >
            <nav className="nav-primary">
                <ul className="nav-ul">
                    <li className="nav-li" onMouseEnter={() => setOpen(true)}><Link to="/perifericos">Periféricos
                    </Link>
                    </li>
                    <li className="nav-li"><Link to="/hardware">Hardware</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;