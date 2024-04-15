import React, { useState, useEffect, useRef } from "react";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
	if (menuRef.current && !menuRef.current.contains(event.target)) {
	  setIsOpen(false);
	}
  };

  useEffect(() => {
	document.addEventListener("mousedown", handleClickOutside);
	return () => {
	  document.removeEventListener("mousedown", handleClickOutside);
	}
	  }, []);


  return (
	<nav className={`navbar ${isOpen ? 'open' : ''}`}>
	<button className={`hamburger-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
	  <span className="hamburger-icon"></span>
	</button>

	<div ref={menuRef} className={`menu-content ${isOpen ? 'open' : ''}`}>
	  <ul>
		<li><a href="#top" className="link" onClick={() => setIsOpen(false)}>Hem</a></li>
		<li><a href="#about" className="link" onClick={() => setIsOpen(false)}>Om mig</a></li>
		<li><a href="#projects" className="link" onClick={() => setIsOpen(false)}>Mina projekt</a></li>
		<li><a href="#knowledge" className="link" onClick={() => setIsOpen(false)}>Kunskaper</a></li>
		<li><a href="#contact" className="link" onClick={() => setIsOpen(false)}>Kontakt</a></li>
	  </ul>
	</div>
  </nav>
);
}

export default Header;