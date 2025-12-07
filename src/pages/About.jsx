export default function About() {
  return (
    <section>
      {/* CHI SONO */}
      <section>
        <div className="container">
          <h1>Chi sono</h1>
          <p className="body-large">
            Sono Simone Leuzzi, un aspirante Front-End Developer con una forte
            attenzione alla user experience e al design. Mi piace costruire
            interfacce semplici, pulite e intuitive, unendo logica e creatività.
          </p>
        </div>
      </section>

      {/* PERCORSO */}
      <section>
        <div className="container">
          <h2>Percorso</h2>
          <p>
            Il mio percorso di studi post-liceali inizia con una Laurea
            Triennale in Scienze Psicosociali della Comunicazione, conseguita
            nel 2024. La trasversalità del programma di questo corso di laurea
            mi ha permesso di avvicinarmi allo sviluppo web, che mi ha sin da
            subito appassionato. Ho deciso così di proseguire con una Laurea
            Magistrale in Teoria e Tecnologia della Comunicazione, la quale però
            non si è dimostrata essere in linea con le mie aspettative, dunque
            ho concluso questo percorso dopo il primo anno.
          </p>
          <p>Attualmente sto studiando Web Developing presso Boolean.</p>
        </div>
      </section>

      {/* STACK TECNOLOGICO */}
      <section>
        <div className="container">
          <h2>Stack Tecnologico</h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <h3>Core</h3>
            <h3>Strumenti</h3>
            <h3>Altro</h3>
          </div>
        </div>
      </section>

      {/* COME LAVORO */}
      <section>
        <div className="container">
          <h2>Come lavoro</h2>
          <p>
            Mi piace capire il perché delle cose: ogni progetto è un’occasione
            per imparare qualcosa di nuovo. Sono una persona metodica e curiosa:
            quando incontro un problema, lo scompongo fino a trovare una
            soluzione chiara. Mi interessa molto creare interfacce coerenti e
            accessibili, con una cura particolare per i dettagli.
          </p>
        </div>
      </section>

      {/* OBIETTIVI */}
      <section>
        <div className="container">
          <h2>Obiettivi</h2>
          <p>
            Sto cercando uno stage come Front-End Developer per crescere in un
            team e lavorare su progetti reali. Nei prossimi mesi voglio
            approfondire ancora di più React e approcciarmi al lato Back-End
            (Node.js).
          </p>
        </div>
      </section>

      {/* QUALCOSA IN PIÙ */}
      <section>
        <div className="container">
          <h2>Qualcosa in più</h2>
          Fuori dal codice, amo viaggiare (soprattutto in moto) e scattare
          fotografie; dal 2021 sono volontario presso l'Ente Nazionale
          Protezione Animali. Mi definirei una persona tranquilla, determinata,
          organizzata e sempre pronta a imparare.
        </div>
      </section>
    </section>
  );
}
