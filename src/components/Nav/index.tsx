import { Search } from "../Search";
import "./Nav.css";
import { Hamburger } from "../Hamburger";
import { Link } from "react-router-dom";

import { AiOutlineUser } from "react-icons/ai";
import photo from "../../assets/img/Nav/logo.png";
const Nav = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [open, setOpen] = useState(false);

  return (
    <header id="header-nav" className="header-nav">
      <div className="search">
        <div id="container_nav_header" className="container_max_width">
          <div className="logo_hamburger">
            <Link to="/">
              <img src={photo} height={60} alt="Logo do site" />
            </Link>

            <Hamburger onClick={() => closed}></Hamburger>
          </div>
          <Search></Search>
          <div className="hamburger-div"></div>
          <Link to={"/login"}>
            <AiOutlineUser id="header_user_img" />
          </Link>
        </div>
      </div>

      {/* <hr className="hr-nav" /> */}
      {/* <nav className="nav-primary">
        <ul className="nav-ul">
          <li className="nav-li" onMouseEnter={() => setOpen(true)}>
            <Link to="/perifericos">Periféricos</Link>
          </li>
          <li className="nav-li">
            <Link to="/hardware">Hardware</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Nav;
