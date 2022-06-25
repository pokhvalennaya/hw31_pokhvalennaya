import "./styles.css";

import { Routes, Route, NavLink } from "react-router-dom";

import Packages from "./pages/Packages";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Hotel from "./pages/Hotel";
import Hotels from "./pages/Hotels";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flights" element={<Flights />} />

        <Route path="packages" element={<Packages />} />

        <Route path="hotels" element={<Hotels />}>
          <Route path=":hotelId" element={<Hotel />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
