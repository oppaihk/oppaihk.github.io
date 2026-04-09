import { Card, CardContent } from "@/components/ui/card";
import { ChartLine, Database, Rocket } from "lucide-react";

const pillars = [
  {
    title: "Design for outcomes",
    description:
      "Every OSS GenAI stack program starts with measurable targets: response time, conversion, cost per case, and operational throughput.",
    icon: ChartLine,
  },
  {
    title: "Integrate existing systems",
    description:
      "We plug into CRMs, ticketing tools, internal knowledge, and messaging channels so teams adopt quickly.",
    icon: Database,
  },
  {
    title: "Ship and iterate fast",
    description:
      "Prototype in days, harden in weeks, and continuously improve with observability and feedback loops.",
    icon: Rocket,
  },
];

const MissionVisionSection = () => {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Approach</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Built like a product team, measured like an operations team.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="glass-card border-border/70">
                <CardContent className="p-7">
                  <div className="mb-4 w-fit rounded-xl bg-primary/15 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
