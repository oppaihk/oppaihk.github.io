import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Generative AI & LLM Developments",
      description: "Groundbreaking tools and platforms to build, train, and deploy AI models. Comprehensive hosting, deployment, and robust managed services.",
      icon: "🤖"
    },
    {
      title: "AI Observability & Monitoring",
      description: "Innovative observability solutions for continuous performance monitoring and optimization.",
      icon: "📊"
    },
    {
      title: "Data Governance & Analytics",
      description: "Advanced solutions for data governance, quality, and analytics.",
      icon: "📈"
    },
    {
      title: "Vector Databases",
      description: "Cutting-edge vector databases for efficient data management.",
      icon: "💾"
    },
    {
      title: "Developer Tools & Platforms",
      description: "Essential tools and platforms to empower developers.",
      icon: "🛠️"
    },
    {
      title: "Security & Compliance",
      description: "Holistic security and compliance solutions to safeguard operations.",
      icon: "🔒"
    },
    {
      title: "Data Privacy & Governance",
      description: "Solutions for privacy management and ensuring data governance.",
      icon: "🛡️"
    },
    {
      title: "Federated & Distributed Systems",
      description: "Expertise in managing federated and distributed AI and ML systems.",
      icon: "🌐"
    },
    {
      title: "Training & Education",
      description: "Comprehensive training programs to upskill teams on the latest AI & OSS technologies.",
      icon: "🎓"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a broad array of products and managed services to harness the potential 
            of cutting-edge Data and AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-card)] hover:border-primary/20 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;