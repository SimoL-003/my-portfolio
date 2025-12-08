import { useState } from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    { pageTitle: "Home", path: "/" },
    { pageTitle: "Chi sono", path: "/about-me" },
    { pageTitle: "Progetti", path: "/projects" },
    { pageTitle: "Contatti", path: "/contacts" },
  ];

  return (
    <div>
      {/* DESKTOP NAV */}
      <nav className="hidden md:flex md:gap-1 lg:gap-3">
        {navLinks.map(({ path, pageTitle }, index) => (
          <NavLink key={index} to={path} className="nav__item">
            {pageTitle}
            <span className="corner corner--tl"></span>
            <span className="corner corner--tr"></span>
            <span className="corner corner--bl"></span>
            <span className="corner corner--br"></span>
          </NavLink>
        ))}
      </nav>

      {/* MOBILE MENU */}
      <button
        className="md:hidden text-accent-primary p-3"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <FontAwesomeIcon
          icon={icons.bars}
          size="xl"
          className={`${
            openMenu ? "rotate-90" : ""
          } transition-all duration-300`}
        />
      </button>

      {/* MOBILE NAV */}
      <nav
        className={`md:hidden absolute right-0 top-14 left-0 bg-background border-b-2 border-accent-primary overflow-hidden flex flex-col gap-2 transition-all duration-300 items-center p-8 z-10
          ${
            openMenu
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        {navLinks.map(({ path, pageTitle }, index) => (
          <NavLink
            key={index}
            to={path}
            className="nav__item nav__item--mobile px-4 py-3"
            onClick={() => setOpenMenu(false)}
          >
            {pageTitle}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
