import StackList from "./StackList";
import { core, tools, others } from "../../../data/stack";

export default function StackSection() {
  return (
    <section className="py-16 text-center">
      <div className="container">
        <h2 className="mb-12">Stack Tecnologico</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Core */}
          <div className="p-8 bg-surface-secondary shadow-sm border border-white/10">
            <h3 className="text-accent-primary mb-6">Core</h3>
            <StackList items={core} />
          </div>

          {/* Tools */}
          <div className="p-8 bg-surface-secondary shadow-sm border border-white/10">
            <h3 className="text-accent-secondary mb-6">Strumenti</h3>
            <StackList items={tools} />
          </div>

          {/* Others */}
          <div className="p-8 bg-surface-secondary shadow-sm border border-white/10 sm:max-lg:col-span-2">
            <h3 className="mb-6">Altro</h3>
            <StackList items={others} />
          </div>
        </div>
      </div>
    </section>
  );
}
