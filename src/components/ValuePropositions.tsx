import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Headphones } from "lucide-react";

const ValuePropositions = () => {
  const values = [
    {
      title: "Enterprise-Ready AI",
      description: "Precision-engineered AI solutions ready for mission-critical business.",
      icon: Shield,
    },
    {
      title: "Decisive Automation",
      description: "Automate processes with unbeatable speed and reliability.",
      icon: Clock,
    },
    {
      title: "Expert-Led",
      description: "Mississippi-based cybersecurity experts delivering scalable solutions.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-background" id="solutions">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Precision Solutions for Enterprise Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            Zero Hour Group delivers enterprise-grade AI and cybersecurity solutions 
            when time is critical and precision is paramount.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-smooth bg-card border-border hover:border-accent/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;