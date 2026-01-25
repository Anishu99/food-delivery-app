import { useState } from "react";
import { APPLICATION_LOGO_URL } from "../../utils/constant";

export const Header = () => {
  const [buttonName, setButtonName] = useState("Logout");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APPLICATION_LOGO_URL} alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
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
