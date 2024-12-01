"use client"
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/images/logo-white.png";
import { navigation } from "@/utils/constants";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // Importing menu icon from react-icons

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To manage the drawer state

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the drawer menu
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Petite Elise PreSchool"
            height={50}
            width={50}
          />
          <span className="font-bold">Petite Elise Preschool</span>
        </div>

        {/* Navigation Links on Larger Screens */}
        <ul className="hidden md:flex space-x-6">
          {navigation?.map((nav) => (
            <Link
              key={nav?.title}
              href={nav?.href}
              className="hover:text-secondary transition-colors"
            >
              {nav?.title}
            </Link>
          ))}
        </ul>

        {/* Right Section on Larger Screens */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Admissions Button */}
          <a
            href="/contact"
            className="border border-secondary text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-white transition"
          >
            Admissions
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <FiMenu
            onClick={toggleMenu}
            size={30}
            className="cursor-pointer text-white"
          />
        </div>
      </nav>

      {/* Drawer Menu for Mobile Screens */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="flex justify-end p-4">
            <FiMenu
              onClick={toggleMenu}
              size={30}
              className="cursor-pointer text-white"
            />
          </div>
          <div className="bg-primary w-4/5 h-full p-6">
            <ul className="space-y-6">
              {navigation?.map((nav) => (
                <li key={nav?.title}>
                  <Link
                    href={nav?.href}
                    className="text-white hover:text-secondary transition-colors"
                  >
                    {nav?.title}
                  </Link>
                </li>
              ))}
              {/* Admissions Button in Drawer */}
              <li>
                <a
                  href="/contact"
                  className=" border border-secondary text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-white transition"
                >
                  Admissions
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
