import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 70 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
        <form action="">
          <input type="text" className="search" placeholder="Search our Food Menu"/>
          <button type="submit" className='light-btn'>Search</button>
        </form>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#new">What's New</a>
        </li>
        <li>
          <a href="#location">Locations</a>
        </li>
        <li>
          <button className="btn">Start Your Order</button>
        </li>
        <li>
          <p>|</p>
        </li>
        <li>
          <button className="btn">Log In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
