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
    icon: icons.javascript,
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
    title: "Express.js",
    icon: icons.expressjs,
    type: "core",
  },
  {
    title: "MySQL",
    icon: icons.mysql,
    type: "core",
  },
  {
    title: "Astro",
    icon: icons.astro,
    type: "core",
  },
  {
    title: "Vite",
    icon: icons.vitejs,
    type: "tool",
  },
  {
    title: "RESTful API",
    icon: icons.api,
    type: "other",
  },
  {
    title: "Bootstrap",
    icon: icons.bootstrap,
    type: "tool",
  },
  {
    title: "Tailwind",
    icon: icons.tailwindcss,
    type: "tool",
  },
  {
    title: "Responsive Design",
    icon: icons.responsive,
    type: "other",
  },
  {
    title: "Netlify",
    icon: icons.netlify,
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
