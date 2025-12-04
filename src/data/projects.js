import { v4 as uuidv4 } from "uuid";

const projects = [
  {
    id: uuidv4(),
    title: "E-commerce + Budget Mode",
    img: "",
    caption:
      "Pagina prodotti di un e-commerce progettata e sviluppata da zero. Include un Budget Mode integrato che permette all’utente di stabilire un limite di spesa e ottenere suggerimenti dinamici sui prodotti compatibili. UI responsive, logica pulita e focus sulla user experience.",
    repo: "",
    liveDemo: "",
    tech: ["HTML", "CSS", "JavaScript", "React", "Fetch API"],
    inHome: true,
  },

  {
    id: uuidv4(),
    title: "Landing Page Portfolio",
    img: "",
    caption:
      "La landing page che stai guardando: minimal, moderna, ottimizzata per la leggibilità e costruita con un design system modulare. Animazioni leggere, struttura scalabile e attenzione ai micro-dettagli.",
    repo: "",
    liveDemo: "",
    tech: ["React", "Tailwind", "Framer Motion"],
    inHome: true,
  },
  {
    id: uuidv4(),
    title: "Recipes Explorer",
    img: "",
    caption:
      "App che mostra ricette da API esterna con filtri multipli (tag, difficoltà, tipo di piatto e cucina).",
    repo: "",
    liveDemo: "",
    tech: ["JavaScript", "Fetch API", "HTML", "CSS"],
    inHome: true,
  },
  {
    id: uuidv4(),
    title: "Actors & Actresses Directory",
    img: "",
    caption:
      "Galleria di attori/attrici ottenuti da API esterna, con card dettagliate e filtro per nazionalità.",
    repo: "",
    liveDemo: "",
    tech: ["React", "Fetch API", "CSS"],
    inHome: true,
  },
  {
    id: uuidv4(),
    title: "Movie Filter App",
    img: "",
    caption:
      "App React per filtrare film per genere e titolo, con generi dinamici e possibilità di aggiungere nuovi film.",
    repo: "",
    liveDemo: "",
    tech: ["React", "useState", "useEffect", "CSS"],
    inHome: true,
  },
];

const homeProjects = projects.filter(({ inHome }) => inHome);

export { projects, homeProjects };
