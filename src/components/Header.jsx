import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { IoCall, IoMenu, IoClose } from "react-icons/io5";
import logo1 from '../assets/logo1.png';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-18">
        {/* Logo */}
        <NavLink to="" className="flex items-center gap-2">
          <img className="h-12 md:h-16" src={logo1} alt="Janaki Renewals" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="" className="text-xl font-semibold hover:text-blue-800">Home</NavLink>
          <NavLink to="/about" className="text-xl font-semibold hover:text-blue-800">About</NavLink>
          <NavLink to="/product" className="text-xl font-semibold hover:text-blue-800">Product</NavLink>
          <NavLink to="/contact" className="text-xl font-semibold hover:text-blue-800">Contact</NavLink>
        </nav>

        {/* Contact (Desktop Only) */}
        <div className="hidden md:flex flex-col text-right">
          <p className="flex items-center gap-2 text-blue-800 font-bold text-lg"><IoCall />Enquiry</p>
          <p className="text-sm">+91 6546542154</p>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-3xl text-blue-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md text-center px-6 pb-4">
          <NavLink to="" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-semibold">Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-semibold">About</NavLink>
          <NavLink to="/product" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-semibold">Products</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-semibold">Contact</NavLink>

          <div className="pt-4 border-t mt-2">
            <p className="flex items-center justify-center gap-2 text-blue-800 font-bold text-base"><IoCall /> Enquiry</p>
            <p className="text-sm">+91 6546542154</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
