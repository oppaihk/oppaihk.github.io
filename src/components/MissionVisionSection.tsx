import { Card, CardContent } from "@/components/ui/card";

const MissionVisionSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                At OppAI, we believe in empowering organizations through the adoption of robust, 
                scalable, and innovative open-source solutions. We are committed to fostering a 
                community that thrives on collaboration, transparency, and continuous improvement, 
                ensuring that our clients are always ahead of the curve.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to be the leading provider of data and AI OSS solutions, enabling 
                businesses of all sizes to leverage the power of open-source technology to drive 
                innovation, efficiency, and growth. We aim to create an ecosystem where data and 
                AI advancements are accessible and beneficial to all.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;