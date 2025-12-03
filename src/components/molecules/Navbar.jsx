import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { pageTitle: "Home", path: "/" },
    { pageTitle: "Chi sono", path: "/about-me" },
    { pageTitle: "Progetti", path: "/projects" },
    { pageTitle: "Contatti", path: "/contacts" },
  ];

  return (
    <nav className="flex gap-3">
      {navLinks.map(({ path, pageTitle }, index) => (
        <NavLink key={index} to={path} className={"nav__item"}>
          {pageTitle}
          <span className="corner corner--tl"></span>
          <span className="corner corner--tr"></span>
          <span className="corner corner--bl"></span>
          <span className="corner corner--br"></span>
        </NavLink>
      ))}
    </nav>
  );
}
