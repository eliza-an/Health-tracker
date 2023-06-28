import { NavLink } from "react-router-dom";
import "./navbar.css"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/track">Track</NavLink>
        </li>
        {/* <li>
          <Link to="/products">Products</Link>
        </li> */}
      </ul>
    </nav>
  );
};
 export default NavBar
