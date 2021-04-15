import "./style.css";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand navbar-light">
      <Link to="/" className="navbar-brand">
        Laith Alwani
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="navbar-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/portfolio"
            className={
              location.pathname === "/portfolio"
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
