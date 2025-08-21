import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision-First",
      description: "Every solution is engineered for accuracy and reliability in mission-critical environments."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships, not just projects."
    },
    {
      icon: Award,
      title: "Excellence-Driven",
      description: "We set the standard for enterprise AI and cybersecurity solutions."
    }
  ];

  const team = [
    {
      name: "Trey Adcock",
      role: "Founder & CEO",
      bio: "Former enterprise security architect with 15+ years leading digital transformations for Fortune 500 companies.",
      expertise: ["Enterprise Architecture", "Cybersecurity Strategy", "AI Implementation"]
    },
    {
      name: "Sarah Martinez",
      role: "Chief Technology Officer",
      bio: "AI researcher turned enterprise practitioner, specializing in scalable machine learning deployments.",
      expertise: ["Machine Learning", "Cloud Architecture", "DevSecOps"]
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Cybersecurity",
      bio: "PhD in Computer Security with extensive experience in threat detection and incident response.",
      expertise: ["Threat Intelligence", "Security Operations", "Compliance"]
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
                Mississippi Roots, <span className="text-accent">Global Reach</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body">
                Founded in the heart of Mississippi, Zero Hour Group brings enterprise-grade 
                AI and cybersecurity expertise to businesses facing their most critical moments.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
                  Born from Real-World Enterprise Challenges
                </h2>
                <div className="space-y-6 text-muted-foreground font-body text-lg">
                  <p>
                    Zero Hour Group was founded when our team realized that enterprise businesses 
                    needed more than generic solutions—they needed partners who understood that 
                    in critical moments, there's no room for error.
                  </p>
                  <p>
                    After years of watching companies struggle with overpriced, under-delivering 
                    consultants, we built Zero Hour Group on a simple principle: deliver 
                    enterprise-grade solutions with the urgency and precision that critical 
                    business moments demand.
                  </p>
                  <p>
                    Today, we're proud to serve Fortune 500 companies and growing enterprises 
                    from our Mississippi headquarters, proving that world-class expertise 
                    doesn't require Silicon Valley overhead.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/20 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-accent mb-2">500+</div>
                    <div className="text-sm text-muted-foreground font-body">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-accent mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground font-body">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-accent mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground font-body">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-accent mb-2">&lt; 2hrs</div>
                    <div className="text-sm text-muted-foreground font-body">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                These principles guide every decision we make and every solution we deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="text-center p-8 hover:shadow-card transition-smooth border-border hover:border-accent/50"
                  >
                    <CardContent className="p-0">
                      <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-accent" />
                        </div>
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground font-body">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Meet the Expert Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                Seasoned professionals with enterprise experience and a passion for solving 
                complex business challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden border-border hover:shadow-card transition-smooth">
                  <div className="aspect-square bg-gradient-hero flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users className="w-12 h-12 text-accent" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-foreground text-xl mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-body mb-4">{member.role}</p>
                    <p className="text-muted-foreground font-body mb-4 text-sm">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs font-body">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
                Proudly Based in Mississippi
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-body">
                We believe great technology solutions can come from anywhere. Our Mississippi 
                location allows us to provide enterprise-grade services without Silicon Valley 
                overhead, delivering exceptional value to our clients across the globe.
              </p>
              <Button variant="cta" size="lg">
                Work With Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;