<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const navItems = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/teams">Team</NavLink></li>
        </>
    );

    return (
        <div className={`navbar-container ${sticky ? 'sticky-navbar' : ''}`}>
            <div className="navbar">
                <div className="navbar-start">
                    <NavLink to="/"><a className="logo">Robotix Club</a></NavLink>
                </div>
                <div className="navbar-center">
                    <ul className="nav-menu">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown" ref={dropdownRef}>
                        <div className="dropdown-button" onClick={toggleDropdown}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
=======
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-amber-400 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-800">
                ROBOTIX CLUB NITRR
              </a>
            </div>
            <div className="hidden md:flex md:space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a>
              <a href="/post" className="text-gray-600 hover:text-gray-800">Blog</a>
              <a href="/sign-up" className="text-gray-600 hover:text-gray-800">Register</a>
            </div>
            <div className="flex md:hidden">
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" type="button">
                {/* Icon for mobile menu */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
>>>>>>> 24b2f191a6b40ffb21deacf0795e59ba6bc34b6d
