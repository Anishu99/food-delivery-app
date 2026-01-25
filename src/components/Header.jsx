import { APPLICATION_LOGO_URL } from "../../utils/constant";

export const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
