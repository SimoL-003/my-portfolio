import { useState } from "react";
import { NavLink } from "react-router-dom";

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

      <button
        className="md:hidden text-accent-primary p-3"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          fill="currentColor"
          width={34}
          className={`${
            openMenu ? "rotate-90" : ""
          } transition-all duration-300`}
        >
          <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
        </svg>
        {/* {openMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            width={34}
          >
            <path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="currentColor"
            width={34}
          >
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
          </svg>
        )} */}
      </button>

      <nav
        className={`md:hidden absolute right-0 top-14 bg-background border-2 border-accent-primary overflow-hidden flex flex-col w-34 transition-all duration-300 items-end p-2
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
            onClick={() => setOpenMenu(false)} // chiude menu al click
          >
            {pageTitle}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
