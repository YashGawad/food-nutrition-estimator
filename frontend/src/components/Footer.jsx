import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3>🍽️ NutriAI</h3>
            <p>
              Your AI-powered food nutrition estimator for healthier eating
              habits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/calculator">Calculator</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#/">AI Detection</a>
              </li>
              <li>
                <a href="#/">Nutrition Tracking</a>
              </li>
              <li>
                <a href="#/">Reports</a>
              </li>
              <li>
                <a href="#/">Health Insights</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:info@nutriai.com">info@nutriai.com</a>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Global, Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="#/" className="social-link" title="GitHub">
            <Github size={20} />
          </a>
          <a href="#/" className="social-link" title="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} NutriAI. All rights reserved.</p>
          <div className="footer-links">
            <a href="#/">Privacy Policy</a>
            <span>•</span>
            <a href="#/">Terms of Service</a>
            <span>•</span>
            <a href="#/">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
