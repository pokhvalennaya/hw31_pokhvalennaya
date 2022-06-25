import { Outlet, Link } from "react-router-dom";
import "./pages.css";

const Hotels = () => {
  return (
    <>
      <h1>Hotels page</h1>

      <ul className="route">
        <li>
          <Link to="/hotels/1">Hotel #1</Link>
        </li>
        <li>
          <Link to="/hotels/2">Hotel #2</Link>
        </li>
        <li>
          <Link to="/hotels/3">Hotel #3</Link>
        </li>
        <li>
          <Link to="/hotels/4">Hotel #4</Link>
        </li>
        <li>
          <Link to="/hotels/5">Hotel #5</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Hotels;
