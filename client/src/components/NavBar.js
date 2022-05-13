import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Collapse } from "bootstrap";
import pokeball2 from "../assets/pokeball2.png";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const collapseRef = useRef();

  const navBarCollapse = () => {
    let myCollapse = collapseRef.current;
    let bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <div className="d-flex">
            <img className="pokeball mt-1 me-1" src={pokeball2} alt="pokeball-icon" />
            <h1 className="navbar-brand">Pokémon Team Builder</h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            onClick={navBarCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="mx-2 nav-item">
                <Link className="text-decoration-none nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="mx-2 nav-item">
                <Link className="text-decoration-none nav-link" to="/pokemon">
                  All Pokémon
                </Link>
              </li>
              <li className="mx-2 nav-item">
                <Link className="text-decoration-none nav-link" to="/buildteam">
                  Build Your Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
