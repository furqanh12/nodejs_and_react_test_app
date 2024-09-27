import React from "react";
import "./MenuBar.css"; // Import the CSS styles
import LanguageDropdown from "../LanguageDropdown";

interface MenuBarProps {
  logo: string;
  links?: { name: string; path: string }[];
}

const MenuBar: React.FC<MenuBarProps> = ({ logo, links }) => {
  return (
    <nav className="menu-bar">
      <LanguageDropdown /> {/* Include the LanguageDropdown here */}
      <div className="logo">
        <img width={100} height={100} src={logo} alt="" />
      </div>
      <ul className="menu-links">
        {links?.map((link) => (
          <li key={link.name} className="menu-item">
            <a href={link.path} className="menu-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
