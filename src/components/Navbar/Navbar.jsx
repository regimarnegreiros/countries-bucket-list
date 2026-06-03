// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { Globe } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-header">
      <NavLink to="/" className="navbar-logo">
        <Globe className="navbar-logo-icon" />
        <span>Bucket List</span>
      </NavLink>

      <nav className="navbar-menu">
        <NavLink to="/" end className="menu-item">
          Início
        </NavLink>
        
        <NavLink to="/adicionar" className="menu-item">
          Adicionar
        </NavLink>
        
        <NavLink to="/lista" className="menu-item">
          Minha Lista
        </NavLink>
      </nav>
    </header>
  );
}