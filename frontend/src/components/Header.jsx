import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, BarChart3, Calculator, Info } from "lucide-react";
import "../styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🍽️</span>
          <span className="logo-text">NutriAI</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to="/dashboard"
            className={`nav-link ${isActive("/dashboard")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <BarChart3 size={18} />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/calculator"
            className={`nav-link ${isActive("/calculator")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Calculator size={18} />
            <span>Calculator</span>
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Info size={18} />
            <span>About</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
