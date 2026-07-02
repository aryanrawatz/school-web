import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>ARYEN GURUKULAM</h2>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/academics" onClick={() => setMenuOpen(false)}>
            Academics
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink to="/admission" onClick={() => setMenuOpen(false)}>
            Admission
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>

      </ul>

      <button className="apply-btn">
        Apply Now
      </button>

      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
}

export default Navbar;