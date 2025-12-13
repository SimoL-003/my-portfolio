import ecommercePreview from "../assets/images/projectsPreviews/ecommerce/ecommerce-productsPage.png";
import ecommerceBudgetMode from "../assets/images/projectsPreviews/ecommerce/ecommerce-productsPage-budgetMode.png";
import ecommerceSingleProduct from "../assets/images/projectsPreviews/ecommerce/ecommerce-singleProduct.png";
import portfolioPreview from "../assets/images/projectsPreviews/portfolio/portfolio.png";
import recipesPreview from "../assets/images/projectsPreviews/recipesFilter/recipes.png";
import recipesFilter from "../assets/images/projectsPreviews/recipesFilter/recipes-filter.png";
import recipesFilterMobile from "../assets/images/projectsPreviews/recipesFilter/recipes--mobile.png";
import actorsPreview from "../assets/images/projectsPreviews/actors/actors.png";
import actorsFilter from "../assets/images/projectsPreviews/actors/actors-filter.png";
import movieAppPreview from "../assets/images/projectsPreviews/movieApp/movieApp.png";
import movieAppFilter from "../assets/images/projectsPreviews/movieApp/movieApp-searchFilter.png";
import movieAppFilterNoResult from "../assets/images/projectsPreviews/movieApp/movieApp-searchFilter__no-result.png";
import movieAppModal from "../assets/images/projectsPreviews/movieApp/movieApp-modal.png";

const projects = [
  // E-COMMERCE
  {
    id: "e-commerce",
    title: "E-commerce con Budget Mode",
    imgs: [ecommercePreview, ecommerceBudgetMode, ecommerceSingleProduct],
    caption:
      "Pagina prodotti di un e-commerce progettata e sviluppata da zero. Include un Budget Mode che permette all’utente di impostare un limite di spesa e filtrare i prodotti di conseguenza.",
    description:
      "Questo progetto nasce con l’obiettivo di creare una pagina prodotti di un e-commerce completamente funzionale, con routing interno e una gestione dello stato scalabile. L’aspetto più interessante è la Budget Mode: l’utente può impostare un limite di spesa e il sistema filtra automaticamente i prodotti, suggerendo solo quelli compatibili. Ho gestito lo stato globale con la Context API, implementato pagine dinamiche con React Router e strutturato la UI con un design modulare. Il progetto include anche una pagina per ogni singolo prodotto, con navigazione tra il prodotto successivo e il precedente.",

    repo: "https://github.com/SimoL-003/react-context-api",
    liveDemo: "https://react-fake-store-sl.netlify.app",
    tech: ["React", "Fetch API", "React Router", "React Context"],
    inHome: true,

    problem:
      "Creare un frontend completo per un e-commerce con dati presi da API e un sistema intelligente di filtraggio basato sul budget dell’utente.",
    solution:
      "Ho sviluppato un’app con routing, pagina dettaglio, e un sistema di stato globale che gestisce la logica della Budget Mode e dei filtri.",
    learnings:
      "Context API avanzata, React Router, gestione fetch, UX per app complesse, clean code.",
  },
  // PORTFOLIO
  {
    id: "portfolio",
    title: "Portfolio",
    imgs: [portfolioPreview],
    caption:
      "L'applicazione web che stai guardando: minimal, moderna, ottimizzata per la leggibilità e costruita con un design system modulare.",
    description:
      "Il mio portfolio è costruito per essere minimalista, leggibile e professionale. Ho progettato un piccolo design system con componenti riutilizzabili, palette coerente e tipografia ben calibrata. Le animazioni sono realizzate con Framer Motion per mantenere morbidezza e fluidità. La struttura si basa su React Router con pagine e layout chiaramente separati. Ho dato molta importanza alla section Projects, che è dinamica e generata da un singolo file dati, così da permettere un aggiornamento super rapido. L’obiettivo era comunicare competenze e personalità senza appesantire la navigazione.",

    repo: "https://github.com/SimoL-003/my-portfolio",
    liveDemo: "https://simone-leuzzi.netlify.app",
    tech: ["React", "React Router", "Tailwind", "Framer Motion"],
    inHome: true,
    problem:
      "Costruire un portfolio moderno, scalabile e facile da aggiornare, con un design professionale.",
    solution:
      "Ho creato un design system modulare, una struttura pulita con React Router e animazioni leggere con Framer Motion.",
    learnings:
      "Organizzazione di un progetto su larga scala, UI/UX, animazioni professionali, component design.",
  },
  // RECIPES FILTER
  {
    id: "recipes-filter",
    title: "Recipes Filter",
    imgs: [recipesPreview, recipesFilter, recipesFilterMobile],
    caption:
      "App che mostra ricette provenienti da API esterna con filtri multipli (tag, difficoltà, tipo di piatto e cucina).",
    description:
      "Recipes Filter è un progetto JavaScript in cui ho voluto lavorare sulla logica pura: fetch API, rendering dinamico e filtri multipli combinati. L'app permette di visualizzare ricette e applicare filtri per tipologia, cucina, difficoltà e tag. Sebbene non rispecchi un reale utilizzo dei filtri API, è un'ottima palestra per la manipolazione del DOM e per la gestione della UI in base allo stato, soprattutto senza l’aiuto di framework. L’interfaccia è semplice, chiara e molto veloce.",
    repo: "https://github.com/SimoL-003/js-recipes-api",
    liveDemo: "https://simol-003.github.io/js-recipes-api/",
    tech: ["JavaScript", "Fetch API", "HTML", "CSS"],
    inHome: true,

    problem:
      "Gestire dati complessi da API esterna e permettere filtri multipli combinati, mantenendo la UI fluida.",
    solution:
      "Ho implementato fetch, rendering dinamico e un sistema di filtraggio basato su più categorie.",
    learnings:
      "JavaScript avanzato, logica dei filtri, DOM dinamico, ottimizzazione UI.",
  },
  // ACTORS DIRECTORY
  {
    id: "actors-directory",
    title: "Actors & Actresses Directory",
    imgs: [actorsPreview, actorsFilter],
    caption:
      "Galleria di attori/attrici ottenuti da API esterna, con card dettagliate e filtro per nazionalità.",
    description:
      "Questa app React mostra una lista di attori/attrici provenienti da API con card animate e un filtro per nazionalità. È stata una buona occasione per lavorare con useEffect, gestire fetch condizionali e animare elementi dinamici con Framer Motion. Le card si animano in entrata/uscita e la UI è pensata per essere reattiva e ben leggibile. Ho dato grande attenzione a come presentare informazioni complesse in modo semplice attraverso un design pulito e leggibile.",

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
    problem:
      "Mostrare dati complessi da API e fornire un filtro reattivo per nazionalità mantenendo un'esperienza fluida.",
    solution:
      "Ho realizzato card animate, fetch con gestione degli stati e un filtro dinamico per nazionalità.",
    learnings:
      "Gestione avanzata di useEffect, animazioni con Framer Motion, componente card modulare.",
  },
  // MOVIE APP
  {
    id: "movie-app",
    title: "Movie App",
    imgs: [
      movieAppPreview,
      movieAppFilter,
      movieAppFilterNoResult,
      movieAppModal,
    ],
    caption:
      "App React per filtrare film per genere e titolo, con generi dinamici e possibilità di aggiungere nuovi film.",
    description:
      'Movie App permette di filtrare film per genere, titolo e aggiungerne di nuovi. I generi del filtro vengono generati automaticamente analizzando i film esistenti, così non devono essere inseriti manualmente. Ho curato la logica del filtraggio, la gestione dello statoe la creazione di una UI semplice ma funzionale. Il form per aggiungere nuovi film ha un input per il titolo e un select per il genere (selezionando la voce "Altro" si apre un nuovo input per inserire un genere personalizzato) Il progetto è ottimo per mostrare padronanza di useState, array complessi, form handling e UI reattiva.',

    repo: "https://github.com/SimoL-003/react-movie-filter",
    liveDemo: "https://react-catalogue-movie-filter.netlify.app/",
    tech: ["React", "useState", "useEffect", "JavaScript", "Tailwind"],
    inHome: false,
    problem:
      "Creare un sistema di filtro dinamico e generi autogenerati per una lista complessa di film.",
    solution:
      "Ho sviluppato una UI con filtri, ricerca, aggiunta film e generi calcolati automaticamente.",
    learnings:
      "useState avanzato, gestione array complessi, form handling, sincronizzazione UI-dati",
  },
];

const homeProjects = projects.filter(({ inHome }) => inHome);

export { projects, homeProjects };
