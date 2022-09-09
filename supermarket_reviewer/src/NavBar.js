import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

function NavBar() {
  return <div className="navBar">
    <NavLink to="/" className="navLink">Home</NavLink> 
    <NavLink to="/add" className="navLink">Add Review</NavLink>
  </div>;
}

export default NavBar;