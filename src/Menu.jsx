import React, { useState } from "react";
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { id: "home", path: "/", label: "1. Bem vinda ao meu amor" },
  { id: "player", path: "/player", label: "2. O som que ouço ao te ver" },
  { id: "nos", path: "/nos", label: "3. Nós" },
  { id: "futuro", path: "/futuro", label: "4. Futuro" }
];

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Abrir menu" role="button">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
        <nav className="side-menu-links">
          {MENU_ITEMS.map((item) => (
            <Link key={item.id} to={item.path} onClick={closeMenu} className="menu-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="side-menu-footer">Eu te amo minha princesa</div>
      </aside>
    </>
  );
};

export default Menu;