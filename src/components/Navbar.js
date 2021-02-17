import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/" id="logo">Math Magicians</NavLink></li>
      </ul>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/calculator">Calculator</NavLink></li>
        <li><NavLink to="/quote">Quote</NavLink></li>
      </ul>
    </nav>

  </div>
);

export default Navbar;
