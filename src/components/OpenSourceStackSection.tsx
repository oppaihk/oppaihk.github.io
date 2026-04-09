import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Blocks, Database, Layers, Radar, Route, ServerCog, type LucideIcon } from "lucide-react";

type Product = {
  name: string;
  logo: string;
};

type StackLayer = {
  title: string;
  purpose: string;
  tools: Product[];
  icon: LucideIcon;
};

const stackLayers: StackLayer[] = [
  {
    title: "AI Orchestration Platform",
    purpose: "Design multi-step workflows, agents, and approval logic with reusable templates.",
    tools: [
      { name: "Dify", logo: "https://cdn.simpleicons.org/dify" },
      { name: "Flowise", logo: "https://cdn.simpleicons.org/flowise" },
      { name: "Langflow", logo: "https://cdn.simpleicons.org/langflow" },
      { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain" },
      { name: "LlamaIndex", logo: "https://cdn.simpleicons.org/llamaindex" },
      { name: "n8n", logo: "https://cdn.simpleicons.org/n8n" },
    ],
    icon: Blocks,
  },
  {
    title: "LLM Gateway",
    purpose: "Centralize model routing, fallback policies, auth, rate limits, and cost control.",
    tools: [
      { name: "LiteLLM", logo: "https://cdn.simpleicons.org/litellm" },
      { name: "Kong", logo: "https://cdn.simpleicons.org/kong" },
      { name: "APISIX", logo: "https://cdn.simpleicons.org/apacheapisix" },
      { name: "Envoy", logo: "https://cdn.simpleicons.org/envoyproxy" },
      { name: "NGINX", logo: "https://cdn.simpleicons.org/nginx" },
    ],
    icon: Route,
  },
  {
    title: "Semantic Cache",
    purpose: "Reduce latency and cost by returning previously matched answers for similar prompts.",
    tools: [
      { name: "GPTCache", logo: "https://cdn.simpleicons.org/gptcache" },
      { name: "Valkey", logo: "https://cdn.simpleicons.org/valkey" },
      { name: "Redis", logo: "https://cdn.simpleicons.org/redis" },
      { name: "Dragonfly", logo: "https://cdn.simpleicons.org/dragonflydb" },
    ],
    icon: Layers,
  },
  {
    title: "Vector Database",
    purpose: "Store embeddings for retrieval-augmented generation and domain-specific search.",
    tools: [
      { name: "Milvus", logo: "https://cdn.simpleicons.org/milvus" },
      { name: "Qdrant", logo: "https://cdn.simpleicons.org/qdrant" },
      { name: "Weaviate", logo: "https://cdn.simpleicons.org/weaviate" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
      { name: "Elasticsearch", logo: "https://cdn.simpleicons.org/elasticsearch" },
      { name: "OpenSearch", logo: "https://cdn.simpleicons.org/opensearch" },
    ],
    icon: Database,
  },
  {
    title: "Model Serving Layer",
    purpose: "Host open models with scalable inference for chat, extraction, and reasoning tasks.",
    tools: [
      { name: "vLLM", logo: "https://cdn.simpleicons.org/vllm" },
      { name: "Ollama", logo: "https://cdn.simpleicons.org/ollama" },
      { name: "Hugging Face", logo: "https://cdn.simpleicons.org/huggingface" },
      { name: "Ray", logo: "https://cdn.simpleicons.org/ray" },
      { name: "KServe", logo: "https://cdn.simpleicons.org/kserve" },
    ],
    icon: ServerCog,
  },
  {
    title: "Observability and Evaluation",
    purpose: "Track quality, latency, token usage, and regression risk across production workflows.",
    tools: [
      { name: "Langfuse", logo: "https://cdn.simpleicons.org/langfuse" },
      { name: "OpenTelemetry", logo: "https://cdn.simpleicons.org/opentelemetry" },
      { name: "Prometheus", logo: "https://cdn.simpleicons.org/prometheus" },
      { name: "Grafana", logo: "https://cdn.simpleicons.org/grafana" },
      { name: "Jaeger", logo: "https://cdn.simpleicons.org/jaeger" },
      { name: "Sentry", logo: "https://cdn.simpleicons.org/sentry" },
    ],
    icon: Radar,
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
    <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-2.5 py-1">
      {imageError ? (
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/15 text-[9px] font-bold text-primary">
          {fallback}
        </span>
      ) : (
        <img
          src={product.logo}
          alt={`${product.name} logo`}
          className="h-4 w-4 rounded-sm object-contain"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      )}
      <span className="text-[11px] font-medium text-foreground/85">{product.name}</span>
    </div>
  );
};

const OpenSourceStackSection = () => {
  return (
    <section className="bg-secondary/55 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Open-Source AI Stack</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">OSS GenAI stack development and management from orchestration to serving.</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            OppAI helps teams develop, operate, and evolve open architecture stacks while delivering production-ready agents and workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stackLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <Card key={layer.title} className="glass-card border-border/70">
                <CardContent className="p-6">
                  <div className="mb-4 w-fit rounded-xl bg-primary/15 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold leading-tight">{layer.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{layer.purpose}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.tools.map((tool) => (
                      <ProductBadge key={`${layer.title}-${tool.name}`} product={tool} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceStackSection;
