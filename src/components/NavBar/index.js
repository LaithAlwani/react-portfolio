import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link
            to={{ pathname: "https://github.com/LaithAlwani" }}
            target="_blank"
            className="nav-link fa-lg"
          >
            <span className="fab fa-github-square"></span>
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to={{ pathname: "https://www.linkedin.com/in/laith-alwani/" }}
            target="_blank"
            className="nav-link"
          >
            <span className="fab fa-linkedin fa-lg"></span>
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to={{ pathname: "https://www.facebook.com/AlwaniLaith" }}
            target="_blank"
            className="nav-link"
          >
            <span className="fab fa-facebook-square fa-lg"></span>
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to={{ pathname: "https://www.instagram.com/laitho15/" }}
            target="_blank"
            className="nav-link"
          >
            <span className="fab fa-instagram fa-lg"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
