import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import React from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Detect Scroll to Make Navbar Sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll to a section if on the home page
  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${id}`; // Redirect for non-home pages
    }
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-green-700 text-white flex justify-center items-center px-6 py-2 text-sm">
        <div className="flex items-center space-x-2">
          <FaPhone className="text-yellow-400" />
          <span>0737 429222</span>
          <span className="border-l border-white h-4 mx-2"></span>
          <FaEnvelope className="text-yellow-400" />
          <span>info@nyerinorthtechnical.co.ke</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`bg-white flex justify-between items-center px-6 py-4 shadow-md transition-all duration-300 
        ${isSticky ? "fixed top-0 left-0 w-full shadow-lg z-50 py-3" : ""}`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="College Logo" className="h-[80px] w-[80px]" />
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-2xl text-gray-800 font-semibold">
          <li>
            <NavLink to="/" className="hover:text-green-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/admission'   className="hover:text-green-600">
              Admission
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-green-600">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="hover:text-green-600">
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="hover:text-green-600">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-green-600">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Enroll Button */}
        <NavLink to="/apply" className="hidden md:block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          ENROLL NOW →
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 z-50"
        >
          <button className="text-gray-800 text-2xl absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <ul className="flex flex-col space-y-10 text-2xl  text-gray-800 font-semibold mt-10">
            <li>
              <NavLink to="/" className="hover:text-green-600">
                Home
              </NavLink>
            </li>
            <li>
            <NavLink to='/admission'   className="hover:text-green-600">
              Admission
            </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-green-600">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className="hover:text-green-600">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="hover:text-green-600">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-green-600">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/apply" className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 block text-center">
                ENROLL NOW →
              </NavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
