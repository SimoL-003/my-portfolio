import { icons } from "../assets/icons/icons";

// Type: core, tool, other

const stack = [
  {
    title: "HTML5",
    icon: icons.html,
    type: "core",
  },
  {
    title: "CSS3",
    icon: icons.css,
    type: "core",
  },
  {
    title: "javascript",
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
    title: "github",
    icon: icons.github,
    type: "tool",
  },
  {
    title: "Express js",
    icon: icons.node,
    type: "core",
  },
  {
    title: "restful api",
    icon: "",
    type: "other",
  },
  {
    title: "bootstrap css",
    icon: icons.bootstrap,
    type: "tool",
  },
  {
    title: "tailwind css",
    icon: "",
    type: "tool",
  },
  {
    title: "responsive design",
    icon: "",
    type: "other",
  },
  {
    title: "Netlify",
    icon: "",
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
