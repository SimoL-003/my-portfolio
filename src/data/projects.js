import { v4 as uuidv4 } from "uuid";
import ecommercePreview from "../assets/images/projectsPreviews/ecommerce/ecommerce-productsPage.png";
import ecommerceBudgetMode from "../assets/images/projectsPreviews/ecommerce/ecommerce-productsPage-budgetMode.png";
import ecommerceSingleProduct from "../assets/images/projectsPreviews/ecommerce/ecommerce-singleProduct.png";
import portfolioPreview from "../assets/images/projectsPreviews/portfolio/portfolio.png";
import recipesPreview from "../assets/images/projectsPreviews/recipesFilter/recipes.png";
import recipesFilter from "../assets/images/projectsPreviews/recipesFilter/recipes-filter.png";
import actorsPreview from "../assets/images/projectsPreviews/actors/actors.png";
import actorsFilter from "../assets/images/projectsPreviews/actors/actors-filter.png";
import movieAppPreview from "../assets/images/projectsPreviews/movieApp/movieApp.png";
import movieAppFilter from "../assets/images/projectsPreviews/movieApp/movieApp-searchFilter.png";
import MovieAppModal from "../assets/images/projectsPreviews/movieApp/movieApp-modal.png";

const projects = [
  {
    id: uuidv4(),
    title: "E-commerce con Budget Mode",
    imgs: [ecommercePreview, ecommerceBudgetMode, ecommerceSingleProduct],
    caption:
      "Pagina prodotti di un e-commerce progettata e sviluppata da zero. Include un Budget Mode integrato che permette all’utente di stabilire un limite di spesa e ottenere suggerimenti dinamici sui prodotti compatibili.",
    repo: "https://github.com/SimoL-003/react-context-api",
    liveDemo: "https://react-fake-store-sl.netlify.app",
    tech: ["React", "Fetch API", "React Router", "React Context"],
    inHome: true,
  },

  {
    id: uuidv4(),
    title: "Portfolio",
    imgs: [portfolioPreview],
    caption:
      "L'applicazione web che stai guardando: minimal, moderna, ottimizzata per la leggibilità e costruita con un design system modulare.",
    repo: "https://github.com/SimoL-003/my-portfolio",
    liveDemo: "https://simone-leuzzi.netlify.app",
    tech: ["React", "React Router", "Tailwind", "Framer Motion"],
    inHome: true,
  },
  {
    id: uuidv4(),
    title: "Recipes Filter",
    imgs: [recipesPreview, recipesFilter],
    caption:
      "App che mostra ricette da API esterna con filtri multipli (tag, difficoltà, tipo di piatto e cucina).",
    repo: "https://github.com/SimoL-003/js-recipes-api",
    liveDemo: "https://simol-003.github.io/js-recipes-api/",
    tech: ["JavaScript", "Fetch API", "HTML", "CSS"],
    inHome: true,
  },
  {
    id: uuidv4(),
    title: "Actors & Actresses Directory",
    imgs: [actorsPreview, actorsFilter],
    caption:
      "Galleria di attori/attrici ottenuti da API esterna, con card dettagliate e filtro per nazionalità.",
    repo: "https://github.com/SimoL-003/react-api",
    liveDemo: "https://react-api-actors.netlify.app",
    tech: [
      "React",
      "Fetch API",
      "Framer Motion",
      "useState",
      "useEffect",
      "Tailwind",
    ],
    inHome: false,
  },
  {
    id: uuidv4(),
    title: "Movie App",
    imgs: [movieAppPreview, movieAppFilter, MovieAppModal],
    caption:
      "App React per filtrare film per genere e titolo, con generi dinamici e possibilità di aggiungere nuovi film.",
    repo: "https://github.com/SimoL-003/react-movie-filter",
    liveDemo: "https://react-catalogue-movie-filter.netlify.app/",
    tech: ["React", "useState", "useEffect", "JavaScript", "Tailwind"],
    inHome: true,
  },
];

const homeProjects = projects.filter(({ inHome }) => inHome);

export { projects, homeProjects };
