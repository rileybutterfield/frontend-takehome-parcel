import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar-material teal lighten-1">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">
        Home
      </Link>
      <ul className="right hide-on-med-and-down">
        <li id="tutorial-link">
          <Link to="/saved">Saved Gems</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
