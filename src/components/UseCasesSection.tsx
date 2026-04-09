import { Card, CardContent } from "@/components/ui/card";

const useCases = [
  {
    sector: "Healthcare Commerce",
    title: "AI concierge for product discovery and support",
    challenge: "Traditional chatbot had low recommendation quality and limited conversion impact.",
    solution: "Rebuilt as a retrieval-backed assistant with product context and guided responses.",
    impact: "Shipped to production in 3 months with improved response quality and faster support.",
  },
  {
    sector: "Public Services",
    title: "Domain-specific advisory chatbot for a citizen mobile app",
    challenge: "Needed high-confidence responses for sensitive, policy-linked questions.",
    solution: "Specialized retrieval strategy, extensive testing workflows, and escalation paths.",
    impact: "Delivered reliable guidance experience while keeping expert review in the loop.",
  },
  {
    sector: "Financial Services",
    title: "Regulatory material verification automation",
    challenge: "Manual compliance review took around one full workday per document set.",
    solution: "Automated comparison between submitted materials and regulatory requirements.",
    impact: "Reduced turnaround from one day to hours with more consistent checks.",
  },
  {
    sector: "Telecom",
    title: "Social reputation monitoring and customer renewal workflows",
    challenge: "High-volume social signals and renewal operations were difficult to process manually.",
    solution: "Daily web monitoring, risk scoring, and segmented renewal handling automations.",
    impact: "Faster PR risk detection and more efficient retention execution across customer segments.",
  },
  {
    sector: "Property Operations",
    title: "Document intake and field extraction pipeline",
    challenge: "Teams handled large volumes of forms with repetitive manual data entry.",
    solution: "OCR + LLM extraction + validation workflow with centralized structured output.",
    impact: "Lower manual effort and better data consistency for back-office operations.",
  },
  {
    sector: "Lending",
    title: "Automated loan intake and decision routing",
    challenge: "Approval flow relied heavily on manual review and slowed offer turnaround.",
    solution: "Guided chatbot intake, external data checks, and threshold-based decision logic.",
    impact: "Faster direct offers while preserving human oversight for high-risk scenarios.",
  },
  {
    sector: "IT Operations",
    title: "Internal support and infrastructure automation",
    challenge: "Service desks faced repetitive tickets, change-window conflicts, and backup review overhead.",
    solution: "Self-service assistant, smart validation for change requests, and anomaly-driven monitoring.",
    impact: "Improved response speed and reduced manual intervention across IT workflows.",
  },
  {
    sector: "Enterprise Support",
    title: "Voice-to-ticket automation for support centers",
    challenge: "Case creation took 10-20 minutes per call and depended on specialist staff.",
    solution: "Speech processing pipeline auto-generated structured tickets with validation layers.",
    impact: "Reduced handling time to around 3 minutes per case and saved substantial monthly effort.",
  },
  {
    sector: "Digital Trading Platform",
    title: "AI assistant features inside a mobile app",
    challenge: "Needed premium AI features in production within 2 months at high throughput.",
    solution: "Rapid prototypes, load-ready workflow architecture, and multilingual AI feature rollout.",
    impact: "Reached 500+ QPS with sub-3s latency, supporting 10M+ daily requests.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="bg-secondary/55 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Use Case Library</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Proven implementations across real enterprise environments.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Cases below are anonymized from the provided reference deck. Company names are intentionally removed.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="glass-card h-full border-border/70">
              <CardContent className="flex h-full flex-col p-6">
                <p className="mb-3 w-fit rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {useCase.sector}
                </p>
                <h3 className="mb-4 text-lg font-semibold leading-tight">{useCase.title}</h3>

                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Challenge:</span> {useCase.challenge}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Solution:</span> {useCase.solution}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Impact:</span> {useCase.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
