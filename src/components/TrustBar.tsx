import { Shield, Clock, Users, Award } from "lucide-react";

const TrustBar = () => {
  const trustElements = [
    {
      icon: Shield,
      text: "Enterprise-Grade",
    },
    {
      icon: Award,
      text: "Trusted",
    },
    {
      icon: Clock,
      text: "Secure",
    },
    {
      icon: Users,
      text: "Professional",
    },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustElements.map((element, index) => {
            const IconComponent = element.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-smooth"
              >
                <IconComponent className="w-6 h-6 group-hover:text-accent transition-smooth" />
                <span className="font-body font-medium text-sm sm:text-base">
                  {element.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;