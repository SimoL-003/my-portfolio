import { icons } from "../assets/icons/icons";
import AboutSection from "../components/molecules/AboutSection";
import StackSection from "../components/organisms/StackSection";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-16"
    >
      {/* CHI SONO */}
      <section className="text-center py-12 lg:py-20">
        <div className="container">
          <h1 className="my-8">Chi sono</h1>
          <p className="body-large max-w-prose mx-auto">
            Sono <strong className="text-accent-primary">Simone Leuzzi</strong>,
            un aspirante{" "}
            <strong className="text-accent-primary">Front-End Developer</strong>{" "}
            con una forte attenzione alla user experience e al design. Mi piace
            costruire{" "}
            <strong className="text-accent-primary">
              interfacce semplici, pulite e intuitive
            </strong>
            , unendo logica e creatività.
          </p>
        </div>
      </section>

      {/* STACK TECNOLOGICO */}
      <StackSection />

      <div>
        {/* PERCORSO */}
        <AboutSection heading={"Il mio percorso"} icon={icons.university}>
          <p>
            Il mio percorso di studi post-liceali inizia con una Laurea
            Triennale in{" "}
            <strong className="text-accent-primary">
              Scienze Psicosociali della Comunicazione
            </strong>
            , conseguita nel 2024. La trasversalità del programma di questo
            corso di laurea mi ha permesso di avvicinarmi allo sviluppo web, che
            mi ha sin da subito appassionato.
          </p>
          {/* <p>
            Ho deciso così di proseguire con una Laurea Magistrale in{" "}
            <strong className="text-accent-primary">
              Teoria e Tecnologia della Comunicazione
            </strong>
            , la quale però non si è dimostrata essere in linea con le mie
            aspettative, dunque ho interrotto questo percorso dopo il primo
            anno.
          </p> */}
          <p>
            Ho quindi deciso di proseguire gli studi con un master in{" "}
            <strong className="text-accent-primary">Web Developing</strong>{" "}
            presso Boolean, che sto attualmente frequentando.
          </p>
        </AboutSection>

        {/* COME LAVORO */}
        <AboutSection heading={"Come lavoro"} icon={icons.laptop}>
          <p>
            Mi piace capire il perché delle cose: ogni progetto è un’occasione
            per imparare qualcosa di nuovo.
          </p>
          <p>
            {" "}
            Sono una{" "}
            <strong className="text-accent-primary">
              persona metodica e curiosa
            </strong>
            : quando incontro un problema, lo scompongo fino a trovare una
            soluzione chiara.
          </p>{" "}
          <p>
            Mi interessa molto creare{" "}
            <strong className="text-accent-primary">
              interfacce coerenti e accessibili
            </strong>
            , con una cura particolare per i dettagli.
          </p>
        </AboutSection>

        {/* OBIETTIVI */}
        <AboutSection heading={"Obiettivi"} icon={icons.target}>
          <p>
            Sto cercando uno stage come{" "}
            <strong className="text-accent-primary">Front-End Developer</strong>{" "}
            per crescere in un team e lavorare su progetti reali.
          </p>
          <p>
            Nei prossimi mesi voglio approfondire ancora di più{" "}
            <strong className="text-accent-primary">React</strong> e
            approcciarmi al lato{" "}
            <strong className="text-accent-primary">Back-End</strong> (Node.js).
          </p>
        </AboutSection>

        {/* QUALCOSA IN PIÙ */}
        <AboutSection heading={"Qualcosa in più"} icon={icons.hobby}>
          <p>
            Fuori dal codice, amo{" "}
            <span className="text-accent-primary">viaggiare</span> (soprattutto
            in moto) e{" "}
            <span className="text-accent-primary">scattare fotografie</span>;
            dal 2021 sono volontario presso l'
            <span className="text-accent-primary">
              Ente Nazionale Protezione Animali
            </span>
            .
          </p>{" "}
          <p>
            {" "}
            Mi definirei una persona tranquilla, determinata, organizzata e{" "}
            <strong className="text-accent-primary">
              sempre pronta a imparare
            </strong>
            .
          </p>
        </AboutSection>
      </div>
    </motion.section>
  );
}
