import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className={`hamburger-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
        <span className="hamburger-icon"></span>
      </button>

      <div className={`menu-content ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#top" className="link">Hem</a></li>
          <li><a href="#about" className="link">Om mig</a></li>
          <li><a href="#projects" className="link">Mina projekt</a></li>
          <li><a href="#knowledge" className="link">Kunskaper</a></li>
          <li><a href="#contact" className="link">Kontakt</a></li>
        </ul>
		
      </div>
    </nav>
  );
}

export default Header;