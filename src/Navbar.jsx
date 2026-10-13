import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

import searchIcon from "./icons/search.svg";
import contactIcon from "./icons/contact.svg";
import cartIcon from "./icons/cart.svg";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h1 className="logo">YUVIZ</h1>

      <div className="nav-links">
        <NavLink className="nav-link-text" to="/" end>Home</NavLink>
        <NavLink className="nav-link-text" to="/shop">Shop</NavLink>
        <NavLink className="nav-link-text" to="/stylehub">Style Hub</NavLink>
        <NavLink className="nav-link-text" to="/about">About</NavLink>
        <NavLink className="nav-link-text"to="/contact">Contact</NavLink>
      </div>

    <div className="nav-last">
    <img src={searchIcon} alt="Search" />
    <img src={contactIcon} alt="Profile" />
    <img src={cartIcon} alt="Cart" />
    </div>


    </nav>
  )
}