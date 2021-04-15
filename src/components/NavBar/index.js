import "./style.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand navbar-light">
      <Link to="/react-portfolio" className="navbar-brand">
        Laith Alwani
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="navbar-item">
          <Link
            to="/react-portfolio"
            className={
              location.pathname === "/react-portfolio" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/react-portfolio/portfolio"
            className={
              location.pathname === "/react-portfolio/portfolio"
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

export default Navbar;
