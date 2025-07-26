import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                For more information, partnership inquiries, or support, feel free to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">sales@oppai.hk</span>
                </div>
                <Button 
                  variant="gradient"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:sales@oppai.hk'}
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;