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
    <div className="relative">
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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          fill="currentColor"
          width={34}
          className={`${
            openMenu ? "rotate-90" : ""
          } transition-all duration-300`}
        >
          <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
        </svg> */}
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
        className={`md:hidden absolute right-0 top-14 bg-background border-2 border-accent-primary overflow-hidden flex flex-col w-34 transition-all duration-300 items-end p-2 mr-3 z-10
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
