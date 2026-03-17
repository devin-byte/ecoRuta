import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="/img/ecoRuta-logo.png" alt="EcoRuta Logo" className="logo-img" />
          <h2 className="logo-text">EcoRuta</h2>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776; 
      </div>

      <ul className={isMobile ? "menu active" : "menu"}>
        <li><Link to="/">Inicio</Link></li>
         <li><Link to="/Senderismo">Senderismo</Link></li>
          <li><Link to="/tour">Tour</Link></li>
           <li><Link to="/Charla">Charlas</Link></li>
           
        <li className="dropdown">
          <Link to="/actividades">Actividades</Link>
          <ul className="dropdown-menu">
            <li><Link to="/kayak">kayak</Link></li>
            <li><Link to="/campamentos">Campamentos</Link></li>
            <li><Link to="/ciclismo">Ciclismo de montaña</Link></li>
          </ul>
        </li>
        <li><Link to="/">Nosotros</Link></li>
        <li className="nav-button">
          <Link to="/contacto">
            <button>Contáctanos</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;