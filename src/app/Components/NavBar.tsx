'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js for routing
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className=" text-xl justify-center">Avion</span>
        </Link>

        <button
          onClick={toggleMenu}
          className="text-gray-900 md:hidden inline-flex items-center ml-auto hover:text-gray-700"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:ml-auto flex items-center bg-blue text-base justify-center`}
        >
          <Link href="/" className="mr-5 hover:text-indigo-500 transition-colors">
            Home
          </Link>
          <Link href="/shoppingcart" className="mr-5 hover:text-indigo-500 transition-colors">
            Shopping Cart
          </Link>
          <Link href="/products" className="mr-5 hover:text-indigo-500 transition-colors">
            Products
          </Link>
          <Link href="/contactus" className="mr-5 hover:text-indigo-500 transition-colors">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-5 mt-4 md:mt-0">
          <FiSearch className="text-gray-900 w-5 h-5 hover:text-indigo-500 cursor-pointer" />
          <FiShoppingCart className="text-gray-900 w-5 h-5 hover:text-indigo-500 cursor-pointer" />
          <FiUser className="text-gray-900 w-5 h-5 hover:text-indigo-500 cursor-pointer" />
        </div>
      </div>

      <hr className="my-4 border-t-2 border-gray-300" />
    </header>
  );
};

export default NavBar;
