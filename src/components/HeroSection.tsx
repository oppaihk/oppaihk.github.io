import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, ShieldCheck, Sparkles } from "lucide-react";
import oppaiLogo from "@/assets/oppai-logo.svg";

const HeroSection = () => {
  const highlights = [
    { label: "Projects launched", value: "20+" },
    { label: "Typical go-live", value: "8-12 weeks" },
    { label: "Automation uptime", value: "99.9%" },
  ];

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-8 sm:px-10 lg:px-16">
      <div className="hero-orb animate-float-slow -left-24 top-20 h-64 w-64 bg-primary/40" />
      <div className="hero-orb animate-float-delayed -right-24 top-40 h-80 w-80 bg-accent/35" />
      <div className="absolute inset-0 tech-grid opacity-45" />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 flex items-center justify-between rounded-full border border-border/60 bg-background/80 px-4 py-3 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            OSS GenAI Platform Partner
          </p>
          <img src={oppaiLogo} alt="OppAI logo" className="h-6 w-auto" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="animate-rise rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit">
              Develop and manage OSS GenAI stacks at production scale
            </div>
            <h1 className="animate-rise delay-150 mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Develop and manage</span> your OSS GenAI stack.
            </h1>
            <p className="animate-rise delay-300 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We design and deploy full open-source AI stacks from orchestration platform to LLM gateway, semantic cache,
              vector database, and model serving. We also deliver agent and workflow development with measurable ROI and high reliability.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="gradient">
                <a href="#use-cases">
                  Explore Use Cases
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 bg-background/65">
                <a href="#contact">Start a Discovery Session</a>
              </Button>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-7">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Delivery Focus</p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/15 p-2 text-primary">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">OSS Stack Engineering</p>
                  <p className="text-sm text-muted-foreground">RAG, orchestration, gateway, cache, vector store, and integrations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/15 p-2 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Trust and Guardrails</p>
                  <p className="text-sm text-muted-foreground">Observability, fallback logic, and policy-aware workflows.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/15 p-2 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Agent and Workflow Development</p>
                  <p className="text-sm text-muted-foreground">Business-ready copilots, automations, and approval flows for operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="glass-card rounded-2xl p-5">
              <p className="text-2xl font-bold text-foreground">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
