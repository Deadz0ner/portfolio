import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "/" },
  { to: "/codebase", label: "Codebase" },
  { to: "/journey", label: "Journey" },
  // { to: "/me", label: "bitsOfMe" },
  { to: "/connect", label: "Connect" },
];

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 500 },
  }),
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      {/* Hamburger button visible on small screens */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </button>

      {/* Nav items: add a class based on isOpen for toggling */}
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        {navItems.map((item, i) => (
          <motion.div
            key={item.to}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            style={{ display: "inline-block" }}
            onClick={() => setIsOpen(false)} // close menu on click (optional)
          >
            <Link to={item.to}>{item.label}</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
