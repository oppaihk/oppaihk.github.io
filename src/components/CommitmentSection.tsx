import { Button } from "@/components/ui/button";

const CommitmentSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Commitment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We pride ourselves on our relentless commitment to quality, continuous innovation, 
            and exceptional customer service. By aligning ourselves with the core values of 
            open-source communities, we empower our clients with the tools and knowledge they 
            need to succeed in today's rapidly evolving technological landscape.
          </p>
          <p className="text-xl text-foreground font-medium mb-10">
            Join us on our journey to revolutionize the world of Data and AI Open Source Software. 
            Together, we can build a future where technology works for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gradient"
              size="lg"
            >
              Partner With Us
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;