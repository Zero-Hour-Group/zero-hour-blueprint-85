import { Shield, Award, Users, CheckCircle } from "lucide-react";

const CredentialsSection = () => {
  const credentials = [
    {
      icon: Shield,
      title: "SOC 2 Type II Certified",
      description: "Enterprise-grade security standards"
    },
    {
      icon: Award,
      title: "Microsoft Gold Partner",
      description: "Certified cloud solutions expert"
    },
    {
      icon: Users,
      title: "500+ Deployments",
      description: "Proven track record across industries"
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime SLA",
      description: "Mission-critical reliability guarantee"
    }
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
            Enterprise-Grade Credentials & Guarantees
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Your business demands proven expertise. Our certifications and track record speak for themselves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg border border-border hover:border-accent/50 transition-smooth group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">
                  {credential.title}
                </h3>
                <p className="text-xs text-muted-foreground font-body">
                  {credential.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;