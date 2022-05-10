import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mx-auto container d-flex justify-content-center align-items-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">Pokemon Team Builder</h1>
        <div className="mx-auto d-flex justify-content-center align-items-center">
          <Link className="mx-2 nav-link nav-item active" to="/">
            Home
          </Link>
          <Link className="mx-2 nav-link nav-item" to="/pokemon">
            All Pokemon
          </Link>
          <Link className="mx-2 nav-link nav-item" to="/buildteam">
            Build Your Team
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
