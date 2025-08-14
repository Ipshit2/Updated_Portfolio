'use client'
import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full flex items-center justify-between text-white px-6 md:px-20 py-6 font-Pop relative">
      <h1  className="text-3xl font-bold uppercase tracking-wide">Ipshithaste</h1>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-20 items-center">
        <ul className="flex space-x-12 tracking-wider text-lg font-extralight">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="relative group">
              <a href={href} className="px-2">
                {label}
                <span className="
                  absolute left-0 -bottom-1 h-[2px] bg-[#242844] w-0 transition-all duration-300 origin-left group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href="https://github.com/Ipshit2/" className="text-4xl">
          <FaGithub />
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(true)}>
        <FaBars />
      </div>

      {/* Mobile Full-Screen Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#151414] z-10 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex justify-end items-center p-4 border-b border-[#313131]">
          <button
            onClick={closeMenu}
            aria-label="Close mobile menu"
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4 tracking-wider">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={closeMenu}
                className="block py-2 text-lg hover:text-gray-400"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://github.com/Ipshit2/" onClick={closeMenu} className="text-3xl block py-2">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
