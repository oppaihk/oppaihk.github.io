import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-data.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            OppAI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Your premier partner for Data and AI Open Source Software solutions
          </p>
          <p className="text-lg text-foreground/80 mb-10 max-w-3xl mx-auto">
            Founded in 2024, OppAI delivers expert distribution, reselling, and service support 
            for innovative Data and AI OSS products. We empower organizations through robust, 
            scalable, and innovative open-source solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gradient"
              size="lg"
            >
              Get Started
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

export default HeroSection;