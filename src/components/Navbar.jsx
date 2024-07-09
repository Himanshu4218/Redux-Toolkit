import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between items-center mb-5">
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      <ul className="flex gap-3">
        <Link to="/">
          <li
            className={`${
              pathname === "/" ? "border-b-4 border-b-red-900" : ""
            } text-lg font-semibold cursor-pointer transition-all`}
          >
            Home
          </li>
        </Link>
        <Link to="/cart">
          <li
            className={`${
              pathname === "/cart" ? "border-b-4 border-b-red-900" : ""
            } text-lg font-semibold cursor-pointer transition-all`}
          >
            Cart
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
