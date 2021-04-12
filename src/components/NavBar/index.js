import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Laith Alwani
      </Link>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <Link
            to="/"
            className={
              window.location.path === "/" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/portfolio"
            className={
              window.location.path === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default NavBar;
