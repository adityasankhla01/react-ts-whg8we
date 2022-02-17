import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <li className="logo">
          <Link exact to="/">
            Logo
          </Link>
        </li>

        <ul className="navItems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lottery">Lottery</Link>
          </li>
          <li>
            <Link to="/auction">Auction</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
