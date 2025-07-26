import { Card, CardContent } from "@/components/ui/card";

const FoundersSection = () => {
  const founders = [
    {
      title: "Microsoft Veteran",
      description: "Bringing years of experience in cloud computing, enterprise software solutions, and strategic vision from one of the world's largest technology companies.",
      icon: "🏢"
    },
    {
      title: "Alibaba Innovation Leader", 
      description: "Expertise in leveraging large-scale cloud solutions, e-commerce innovations, and global market expansion.",
      icon: "🚀"
    },
    {
      title: "Kong Specialist",
      description: "Skilled in API management, microservices, and connectivity, ensuring seamless and secure integrations.",
      icon: "🔗"
    },
    {
      title: "GitLab Contributor",
      description: "Deep understanding of DevOps, CI/CD pipelines, and collaborative software development.",
      icon: "⚙️"
    },
    {
      title: "Dify.AI Expert",
      description: "Knowledgeable in artificial intelligence advancements, machine learning, and data analytics.",
      icon: "🧠"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            OppAI was founded by a team of seasoned professionals with rich backgrounds across 
            leading cloud and open-source vendors such as Microsoft, Alibaba, Kong, GitLab, and Dify.AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 transition-all duration-300 border-border/50"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {founder.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {founder.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {founder.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;