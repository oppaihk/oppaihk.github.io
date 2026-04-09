import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-secondary/55 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <Card className="glass-card border-border/70">
          <CardContent className="p-8 text-center sm:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Discovery Session</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Start a discovery session with OppAI.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Please email Warren directly to discuss your requirements.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="w-full max-w-md rounded-2xl border border-border/80 bg-background/70 p-5 text-left">
                <div className="mb-3 w-fit rounded-xl bg-primary/15 p-2 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <a href="mailto:warren@oppai.hk" className="text-sm text-muted-foreground hover:text-primary">
                  warren@oppai.hk
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
