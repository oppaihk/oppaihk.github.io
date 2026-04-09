import { Card, CardContent } from "@/components/ui/card";

const sectors = [
  {
    title: "Financial Services",
    description: "Loan approval, compliance checks, and customer support automation with human-in-the-loop controls.",
  },
  {
    title: "Telecom and Consumer",
    description: "Reputation monitoring, personalized retention campaigns, and service workflow automation at scale.",
  },
  {
    title: "Healthcare and Life Sciences",
    description: "High-accuracy assistant experiences for product recommendations and operational case handling.",
  },
  {
    title: "IT and Shared Services",
    description: "Internal copilots for ticketing, change requests, backup reports, and infrastructure operations.",
  },
];

const FoundersSection = () => {
  return (
    <section className="bg-secondary/55 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Industry Coverage</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Use-case depth across regulated and high-volume environments.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sectors.map((sector) => (
            <Card key={sector.title} className="glass-card border-border/70">
              <CardContent className="p-7">
                <h3 className="mb-3 text-xl font-semibold">{sector.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{sector.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
