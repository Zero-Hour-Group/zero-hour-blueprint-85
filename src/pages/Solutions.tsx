import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Brain, Cog, ArrowRight, CheckCircle } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Enterprise AI Solutions",
      description: "Transform your business operations with precision-engineered AI that delivers measurable results.",
      features: [
        "Custom AI model development and deployment",
        "Machine learning pipeline automation",
        "Natural language processing for enterprise data",
        "Computer vision for quality control",
        "Predictive analytics and forecasting"
      ],
      industries: ["Manufacturing", "Healthcare", "Financial Services", "Energy"],
      cta: "Explore AI Solutions"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive protection against evolving threats with proactive monitoring and rapid response.",
      features: [
        "24/7 security operations center (SOC)",
        "Advanced threat detection and response",
        "Vulnerability assessment and penetration testing",
        "Compliance management (SOC 2, HIPAA, PCI)",
        "Security awareness training programs"
      ],
      industries: ["Banking", "Healthcare", "Government", "E-commerce"],
      cta: "Secure Your Business"
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation that reduces costs and eliminates human error.",
      features: [
        "Robotic process automation (RPA)",
        "Workflow optimization and design",
        "Legacy system integration",
        "Document processing automation",
        "Quality assurance automation"
      ],
      industries: ["Insurance", "Legal", "Logistics", "Retail"],
      cta: "Automate Processes"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
                Enterprise Solutions for the <span className="text-accent">Critical Moment</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body">
                When time is critical and precision is paramount, Zero Hour Group delivers 
                enterprise-grade AI, cybersecurity, and automation solutions that work.
              </p>
              <Button variant="cta" size="lg">
                Schedule Solution Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card key={index} className="overflow-hidden border-border">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <CardHeader className="p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-accent" />
                          </div>
                          <CardTitle className="text-2xl sm:text-3xl font-heading text-foreground">
                            {solution.title}
                          </CardTitle>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6 font-body">
                          {solution.description}
                        </p>
                        <div className="mb-6">
                          <h4 className="font-heading font-semibold text-foreground mb-3">Industries Served:</h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.industries.map((industry, i) => (
                              <Badge key={i} variant="secondary" className="font-body">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" className="group">
                          {solution.cta}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardHeader>
                      
                      <CardContent className="p-8 lg:p-12 bg-muted/20">
                        <h4 className="font-heading font-semibold text-foreground mb-6">Key Capabilities:</h4>
                        <ul className="space-y-3">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground font-body">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Our Proven Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                Every engagement follows our battle-tested methodology designed for enterprise success.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Assessment", description: "Comprehensive analysis of your current state and requirements" },
                { step: "02", title: "Strategy", description: "Custom solution design with clear timelines and milestones" },
                { step: "03", title: "Implementation", description: "Agile deployment with continuous monitoring and optimization" },
                { step: "04", title: "Support", description: "Ongoing maintenance and 24/7 support for critical systems" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-primary-foreground flex items-center justify-center text-xl font-heading font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
              Don't wait for the competition to get ahead. Start your digital transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Get Custom Solution
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;