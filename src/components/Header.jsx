import { useState } from "react";
import Logo from "../assets/Logo.png";
const Header = () => {
  const [login, setLogin] = useState ("Login");
  const loginHandler = () => {
    if(login=="Login")setLogin("Logout")
      else setLogin("Login")
  }
   return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="loginButton" onClick={loginHandler}>{login}</button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
