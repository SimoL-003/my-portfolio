import {
  faLinkedin,
  faSquareGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import {
  faAngleLeft,
  faAnglesUp,
  faBars,
  faBullseye,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faGraduationCap,
  faHandshake,
  faLaptopCode,
  faPuzzlePiece,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";

import html from "./stack/html5.svg";
import css from "./stack/css.svg";
import javascript from "./stack/javascript.svg";
import astro from "./stack/astro.svg";
import bootstrap from "./stack/bootstrap.svg";
import expressjs from "./stack/expressjs.svg";
import figma from "./stack/figma.svg";
import git from "./stack/git.svg";
import github from "./stack/github.svg";
import netlify from "./stack/netlify.svg";
import tailwindcss from "./stack/tailwindcss.svg";
import vitejs from "./stack/vitejs.svg";
import react from "./stack/react.svg";
import api from "./stack/api.svg";
import responsive from "./stack/responsive.svg";
import mysql from "./stack/mysql.svg";

export const icons = {
  // UI
  bars: faBars /* mobile nav menu */,
  totop: faAnglesUp /* to top arrows */,
  university: faGraduationCap /* graduation cup */,
  laptop: faLaptopCode /* computer */,
  target: faBullseye /* target */,
  hobby: faPuzzlePiece /* puzzle piece (hobby) */,
  return: faAngleLeft /* < */,
  chevronLeft: faChevronLeft /* chevron left */,
  chevronRight: faChevronRight /* chevron right */,
  handsShaking: faHandshake /* hands shaking */,

  // Dev stack
  html: html,
  css: css,
  javascript: javascript,
  react: react,
  astro: astro,
  bootstrap: bootstrap,
  expressjs: expressjs,
  git: git,
  github: github,
  figma: figma,
  netlify: netlify,
  tailwindcss: tailwindcss,
  vitejs: vitejs,
  api: api,
  responsive: responsive,
  mysql: mysql,

  // Footer
  linkedIn: faLinkedin,
  email: faEnvelope,
  phone: faSquarePhone,
  discord: faDiscord,
  githubSocial: faSquareGithub,
};
