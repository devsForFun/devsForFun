import "./NavBar.css";
import { Link } from "react-router-dom";
import gdsclogo from "../../assets/stickers/devsforfun-white.png";

export const NavBar = () => {
  return (
    <nav id="nav">
      <Link to="/" id="delink">
        <img src={gdsclogo} alt="google developer studnet clubs raghu engineering college logo" />
      </Link>
      <div id="nav-btns">
        <Link to={{ pathname: "/about" }} className="gdsc-btn">
          About
        </Link>
      </div>
    </nav>
  );
};
