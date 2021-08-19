import Cart from "./Cart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Redux Shopping Cart</h1>
      </Link>
      <Link to="/cart">
        <div className="cart">
          <h2>Cart</h2>
          <i className=" shopping cart icon"></i>
          <div>4</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
