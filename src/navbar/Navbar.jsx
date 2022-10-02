import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from '../header/logo.png'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logoNavbar">
          <img src={logo} alt="" />
        </div>
        <div className="loginNavbar">
                <NavLink to="/Dashboard" className={({isActive})=>
                isActive ? "pageActive" : ""}>
                Dashboard
                </NavLink>    
                <NavLink to="/Performance" className={({isActive})=>
                isActive ? "pageActive" : ""}>
                Performance
                </NavLink>   
                <NavLink to="/Algos" className={({isActive})=>
                isActive ? "pageActive" : ""}>
                Algos
                </NavLink>  
                <NavLink to="/Slicing" className={({isActive})=>
                isActive ? "pageActive" : ""}>
                Slicing
                </NavLink>  
                <NavLink to="/Admin" className={({isActive})=>
                isActive ? "pageActive" : ""}>
                Admin
                </NavLink>  
        </div>
      </div>
    </>
  );
};

export default Navbar;
