import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navigation">
        <NavLink
          className={(({ isActive }) => (isActive ? "active" : ""), "link")}
          to="/"
        >
          Home page
        </NavLink>

        <NavLink
          className={(({ isActive }) => (isActive ? "active" : ""), "link")}
          to="hotels"
        >
          Hotels
        </NavLink>

        <NavLink
          className={(({ isActive }) => (isActive ? "active" : ""), "link")}
          to="flights"
        >
          Flights
        </NavLink>

        <NavLink
          className={(({ isActive }) => (isActive ? "active" : ""), "link")}
          to="packages"
        >
          Packages
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
