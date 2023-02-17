import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className=""
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <h1> heading logo</h1>
      <div>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/Cart">Cart</Link>
      </div>
    </div>
  );
};
export default Navbar