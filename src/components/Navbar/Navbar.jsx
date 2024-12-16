import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);

    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        !e.target.closest(".nav-links") &&
        !e.target.closest(".hamburger")
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      <div className="container flex items-center justify-between py-5 px-10">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-white text-3xl gymmer">GYMMER</h1>
        </Link>

        {/* Hamburger Menu */}
        <div className="hamburger md:hidden" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Overlay for Mobile */}
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

        {/* Navigation Links */}
        <ul
          className={`nav-links flex md:flex-row md:space-x-6 space-y-4 md:space-y-0 
            ${menuOpen ? "open" : "hidden"} md:flex`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/classes">Classes</a>
          </li>
          <li>
            <a href="/membership">Membership</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <Link to="/contact">
            <button className="join-btn hidden md:block px-5 py-1.5 rounded-xl bg-red-500 hover:bg-red-600">
              JOIN us
            </button>
          </Link>
        </ul>

        {/* JOIN us Button */}
      </div>
    </nav>
  );
};

export default Navbar;
