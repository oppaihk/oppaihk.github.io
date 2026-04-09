import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BriefcaseBusiness, Database, Gauge, Lock, Workflow } from "lucide-react";

type Product = {
  name: string;
  logo: string;
};

const stackProducts: Product[] = [
  { name: "Dify", logo: "https://cdn.simpleicons.org/dify" },
  { name: "Flowise", logo: "https://cdn.simpleicons.org/flowise" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n" },
  { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain" },
  { name: "LlamaIndex", logo: "https://cdn.simpleicons.org/llamaindex" },
  { name: "LiteLLM", logo: "https://cdn.simpleicons.org/litellm" },
  { name: "Kong", logo: "https://cdn.simpleicons.org/kong" },
  { name: "APISIX", logo: "https://cdn.simpleicons.org/apacheapisix" },
  { name: "Redis", logo: "https://cdn.simpleicons.org/redis" },
  { name: "Valkey", logo: "https://cdn.simpleicons.org/valkey" },
  { name: "Qdrant", logo: "https://cdn.simpleicons.org/qdrant" },
  { name: "Milvus", logo: "https://cdn.simpleicons.org/milvus" },
  { name: "Weaviate", logo: "https://cdn.simpleicons.org/weaviate" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
  { name: "Elasticsearch", logo: "https://cdn.simpleicons.org/elasticsearch" },
  { name: "ClickHouse", logo: "https://cdn.simpleicons.org/clickhouse" },
  { name: "MinIO", logo: "https://cdn.simpleicons.org/minio" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
  { name: "Helm", logo: "https://cdn.simpleicons.org/helm" },
  { name: "Terraform", logo: "https://cdn.simpleicons.org/terraform" },
  { name: "Argo CD", logo: "https://cdn.simpleicons.org/argocd" },
  { name: "Kafka", logo: "https://cdn.simpleicons.org/apachekafka" },
  { name: "RabbitMQ", logo: "https://cdn.simpleicons.org/rabbitmq" },
  { name: "Ollama", logo: "https://cdn.simpleicons.org/ollama" },
  { name: "vLLM", logo: "https://cdn.simpleicons.org/vllm" },
  { name: "MLflow", logo: "https://cdn.simpleicons.org/mlflow" },
  { name: "OpenTelemetry", logo: "https://cdn.simpleicons.org/opentelemetry" },
  { name: "Langfuse", logo: "https://cdn.simpleicons.org/langfuse" },
  { name: "Jaeger", logo: "https://cdn.simpleicons.org/jaeger" },
  { name: "Prometheus", logo: "https://cdn.simpleicons.org/prometheus" },
  { name: "Grafana", logo: "https://cdn.simpleicons.org/grafana" },
];

const capabilities = [
  {
    title: "Agent Development",
    description: "Design and ship role-based AI agents for support, operations, and specialist teams.",
    icon: Bot,
  },
  {
    title: "Workflow Development",
    description: "Build agentic workflows with approvals, retries, escalation rules, and policy-aware routing.",
    icon: Workflow,
  },
  {
    title: "Knowledge and Retrieval Layer",
    description: "Document processing, retrieval pipelines, and context enrichment for grounded outputs.",
    icon: Database,
  },
  {
    title: "Performance Engineering",
    description: "Latency tuning, load planning, and resilience design for production traffic.",
    icon: Gauge,
  },
  {
    title: "Governance and Security",
    description: "Prompt controls, redaction, monitoring, and audit-friendly deployment patterns.",
    icon: Lock,
  },
  {
    title: "Platform Operations Enablement",
    description: "Operational runbooks, ownership model, and enablement for teams managing the OSS stack.",
    icon: BriefcaseBusiness,
  },
];

const ProductBadge = ({ product }: { product: Product }) => {
  const [imageError, setImageError] = useState(false);
  const fallback = product.name
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((token) => token[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1.5">
      {imageError ? (
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
          {fallback}
        </span>
      ) : (
        <img
          src={product.logo}
          alt={`${product.name} logo`}
          className="h-5 w-5 rounded-sm object-contain"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      )}
      <span className="text-xs font-medium text-foreground/85">{product.name}</span>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Capability Stack</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Everything needed to develop and manage an OSS GenAI platform.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Platform architecture, stack operations, and agent/workflow development delivered as one integrated team.
          </p>
        </div>

        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold text-foreground">Open-source products in our delivery toolkit</p>
          <div className="flex flex-wrap gap-2">
            {stackProducts.map((product) => (
              <ProductBadge key={product.name} product={product} />
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card key={capability.title} className="glass-card border-border/70 transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 w-fit rounded-xl bg-primary/15 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold leading-tight">{capability.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
