import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [toggle, showToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          EkiRakhmadani
        </a>

        <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            {/* Home */}
            <li className="nav_item">
              <a href="#home" className="nav_link active_link">
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            {/* About Me */}
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            {/* Skills */}
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>

            {/* Services */}
            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="uil uil-briefcase-alt nav_icon"></i> Services
              </a>
            </li>

            {/* Portofolio */}
            <li className="nav_item">
              <a href="#portofolio" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i> Portofolio
              </a>
            </li>

            {/* Contact */}
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => showToggle(!toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
