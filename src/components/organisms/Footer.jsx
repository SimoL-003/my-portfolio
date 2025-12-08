import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons/icons.js";
import { useState } from "react";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: icons.linkedIn,
      link: "https://www.linkedin.com/in/simone-leuzzi-205244193/",
    },
    {
      name: "e-mail",
      icon: icons.email,
      link: "mailto:s.leuzzi23@gmail.com",
    },
    {
      name: "Phone",
      icon: icons.phone,
      link: "tel:+393920003914",
    },
    {
      name: "GitHub",
      icon: icons.githubSocial,
      link: "https://github.com/SimoL-003",
    },
  ];
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <footer className="bg-surface-primary">
      <div className="container">
        {/* TO TOP */}
        <div className="flex justify-center">
          <a
            href="#header"
            className="-translate-y-1/2 shadow-2xl"
            onMouseEnter={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
          >
            <FontAwesomeIcon
              icon={icons.totop}
              className="text-4xl p-2 bg-accent-secondary text-background"
              bounce={mouseIn}
            />
          </a>
        </div>

        {/* ICONS CONTAINER */}
        <div className="py-10 flex justify-center gap-4">
          {socialLinks.map(({ name, icon, link }) => (
            <a key={name} href={link} target="_blank">
              <FontAwesomeIcon
                icon={icon}
                className="text-4xl md:text-5xl hover:scale-130 transition-all duration-300 p-2"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
