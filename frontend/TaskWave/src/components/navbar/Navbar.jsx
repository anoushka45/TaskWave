import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="text-lg font-semibold dark:text-white">TaskWave</span>
        </Link>
        <button
          type="button"
          className="md:hidden inline-flex items-center p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:flex-grow md:items-center md:w-auto`}
          id="navbar-collapse"
        >
          <ul className="flex flex-col md:flex-row m-3 md:space-x-5 md:items-end">
            <li>
              <Link
                to="/"
                className="py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </Link>
            </li>
            <li>
              <Link
                to="/todo"
                className="py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                To-do
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
