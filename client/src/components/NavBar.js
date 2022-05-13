import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mx-auto container d-flex justify-content-center align-items-center mb-2">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#0075BE" }}
      >
        <h1 className="navbar-brand" style={{ color: "#FFCC00" }}>
          Pokemon Team Builder
        </h1>
        <div className="mx-auto d-flex justify-content-center align-items-center">
          <Link className="mx-2 nav-link nav-item active" style={{ color: "#FFCC00" }} to="/">
            Home
          </Link>
          <Link className="mx-2 nav-link nav-item" style={{ color: "#FFCC00" }} to="/pokemon">
            All Pokemon
          </Link>
          <Link className="mx-2 nav-link nav-item" style={{ color: "#FFCC00" }} to="/buildteam">
            Build Your Team
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
