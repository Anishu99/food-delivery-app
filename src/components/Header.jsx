import { useState } from "react";
import { APPLICATION_LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export const Header = () => {
  const [buttonName, setButtonName] = useState("Logout");
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={APPLICATION_LOGO_URL} alt="logo"></img>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="logout-button"
            onClick={() => {
              buttonName === "Logout"
                ? setButtonName("Login")
                : setButtonName("Logout");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
