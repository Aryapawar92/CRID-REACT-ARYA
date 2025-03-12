import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-custom-dark-blue z-40">
      <div className="relative flex max-w-screen-xl flex-col px-4 py-6 md:mx-auto md:flex-row md:items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center text-2xl font-black">
          <img
            src="/images/newcrid.png"
            alt="Logo"
            className="mr-2 h-10 w-auto"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="absolute top-5 right-7 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          aria-label="Header Navigation"
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-custom-dark-blue md:relative md:flex md:justify-center md:w-full md:bg-transparent transition-all`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 md:flex-row md:space-y-0 md:space-x-12 md:py-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white font-redHat text-lg font-semibold ${
                    isActive ? "text-blue-600" : "hover:text-indigo-700"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/event"
                className={({ isActive }) =>
                  `text-white font-redHat text-lg font-semibold ${
                    isActive ? "text-blue-600" : "hover:text-indigo-700"
                  }`
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-white font-redHat text-lg font-semibold ${
                    isActive ? "text-blue-600" : "hover:text-indigo-700"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
