export default function DetailsSection({ project }) {
  const { description, problem, solution, learnings } = project;

  return (
    <section className="lg:w-1/2 space-y-8 h-fit">
      <div>
        <h3 className="mb-2">Descrizione</h3>
        <p className="text-text-secondary">{description}</p>
      </div>

      <div>
        <h3 className="mb-2">Obiettivo primario</h3>
        <p className="text-text-secondary">{problem}</p>
      </div>

      <div>
        <h3 className="mb-2">Soluzione</h3>
        <p className="text-text-secondary">{solution}</p>
      </div>

      <div>
        <h3 className="mb-2">Cosa ho imparato</h3>
        <p className="text-text-secondary">{learnings}</p>
      </div>
    </section>
  );
}
