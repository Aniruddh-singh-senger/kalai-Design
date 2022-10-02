import React from "react";
import "./Header.css";
import logo from './logo.png'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logoSection">
          <img src={logo} alt="" />
          <p>SK Algo Tradeon</p>
        </div>
        <div className="loginSection">
                <NavLink to="/About" className={({isActive})=>
                isActive ? "pageActive" : ""}>
                About
                </NavLink>    
                <NavLink to="/Login" className={({isActive})=>
                isActive ? "pageActive" : ""}>
                Login
                </NavLink>   
        </div>
      </div>
    </>
  );
};

export default Header;
