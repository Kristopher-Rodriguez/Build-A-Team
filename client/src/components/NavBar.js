import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center container mx-auto p-1 nav-bar">
      <Link className="mx-2 font-semibold" to="/">
        Home
      </Link>
      <p className="mx-2 font-semibold">|</p>
      <Link className="mx-2 font-semibold" to="/pokemon">
        All Pokemon
      </Link>
    </div>
  );
};

export default NavBar;
