import "./styles.css";

import { Routes, Route } from "react-router-dom";

import Packages from "./pages/Packages";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Hotel from "./pages/Hotel";
import Hotels from "./pages/Hotels";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
