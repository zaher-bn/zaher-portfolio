import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavbarTitle = () => {
  return (
    <>
      <ul className="navbar-list">
        <li>
          <Link to="/about" className="navbar-link">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact Me
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarTitle;
