import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar-material nav">
    <div className="nav-wrapper">
      <Link to="/" className="nav-text">
        <img
          alt="logo"
          src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/rubygems-512.png"
          className="logo"
        />
      </Link>
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/" className="nav-text">
            Search Gems
          </Link>
        </li>
        <li>
          <Link to="/saved" className="nav-text">
            Saved Gems
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
