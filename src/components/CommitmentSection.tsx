import { Button } from "@/components/ui/button";

const phases = [
  {
    step: "01",
    title: "Discovery Sprint",
    detail: "Map top opportunities, define success metrics, and identify integrations in 1-2 weeks.",
  },
  {
    step: "02",
    title: "Production Build",
    detail: "Deliver a hardened workflow with observability, governance controls, and handoff documentation.",
  },
  {
    step: "03",
    title: "Scale Program",
    detail: "Expand to adjacent teams with reusable templates, enablement sessions, and optimization loops.",
  },
];

const CommitmentSection = () => {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-foreground px-8 py-12 text-background shadow-[var(--shadow-glow)] sm:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-background/75">Engagement Model</p>
        <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Structured delivery from first prototype to enterprise-wide rollout.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {phases.map((phase) => (
            <div key={phase.step} className="rounded-2xl border border-white/20 bg-white/5 p-5">
              <p className="text-sm font-semibold text-primary-glow">Phase {phase.step}</p>
              <h3 className="mt-2 text-xl font-semibold">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/80">{phase.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild variant="gradient" size="lg" className="text-base">
            <a href="#contact">Discuss Your Use Case</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/35 bg-transparent text-background hover:bg-white/10 hover:text-background">
            <a href="#use-cases">Review Library</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
