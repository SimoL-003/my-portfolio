import { icons } from "../assets/icons/icons";

// Type: core, tool, other

const stack = [
  {
    title: "HTML",
    icon: icons.html,
    type: "core",
  },
  {
    title: "CSS",
    icon: icons.css,
    type: "core",
  },
  {
    title: "JavaScript",
    icon: icons.js,
    type: "core",
  },
  {
    title: "React",
    icon: icons.react,
    type: "core",
  },
  {
    title: "Git",
    icon: icons.git,
    type: "tool",
  },
  {
    title: "GitHub",
    icon: icons.github,
    type: "tool",
  },
  {
    title: "Express JS",
    icon: icons.node,
    type: "core",
  },
  {
    title: "RESTful API",
    icon: icons.generalSettings,
    type: "other",
  },
  {
    title: "Bootstrap CSS",
    icon: icons.bootstrap,
    type: "tool",
  },
  {
    title: "Tailwind CSS",
    icon: icons.generalCss,
    type: "tool",
  },
  {
    title: "Responsive Design",
    icon: icons.responsive,
    type: "other",
  },
  {
    title: "Netlify",
    icon: icons.sitemap,
    type: "tool",
  },
  {
    title: "Figma",
    icon: icons.figma,
    type: "tool",
  },
];

const core = stack.filter((cur) => cur.type === "core");
const tools = stack.filter((cur) => cur.type === "tool");
const others = stack.filter((cur) => cur.type === "other");

export { stack, core, tools, others };
