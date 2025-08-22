import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Download, MessageSquare, Users, Zap, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePurchase = async (productName: string, price: number) => {
    setIsLoading(true);
    try {
      // This would integrate with Stripe for actual payments
      toast({
        title: "Purchase Initiated",
        description: `Redirecting to checkout for ${productName}...`,
      });
      // Simulate purchase flow
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Success!",
          description: `${productName} purchase completed. Check your email for setup instructions.`,
        });
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Purchase failed. Please try again.",
        variant: "destructive",
      });
    }
  };

  const instantProducts = [
    {
      name: "Website FAQ Chatbot",
      summary: "Turn your business website into a 24/7 customer support machine. Our AI bot scans your website and FAQ (if provided) to answer customer questions instantly, capture leads, and route tough queries to your team.",
      price: "$249",
      icon: MessageSquare,
      features: ["24/7 customer support", "Website auto-scan technology", "FAQ integration", "Lead capture & routing"],
      requirements: ["Website URL (required for scan)", "FAQ/Docs (optional upload)", "Brand details (logo, colors)", "Contact email for delivery"]
    },
    {
      name: "Marketing Prompt Pack", 
      summary: "Unlock AI-powered marketing fast: custom content prompt packs for your business. Scan your website & social channels to instantly generate pre-filled prompts for blogs, social posts, ads, and email campaigns.",
      price: "$49",
      icon: Download,
      features: ["Website & social scan", "Pre-filled prompt templates", "Multi-channel content", "Instant download"],
      requirements: ["Website URL", "Primary social media handles", "Business category/industry", "Optional campaign goals"]
    }
  ];

  const consultativeServices = [
    {
      name: "Fully Custom AI Chatbots",
      summary: "For complex workflows or unique data sources, our experts consult and build, quoting case-by-case.",
      cta: "Book a Consultation"
    },
    {
      name: "Bespoke Marketing Automation & Advanced Prompts",
      summary: "Includes deep-dive industry research and hands-on implementation.",
      cta: "Request a Strategy Session"
    }
  ];

  const faqItems = [
    {
      q: "How fast will my chatbot or prompt pack be delivered?",
      a: "Instant for most instant-buy products! Custom services take a couple days, depending on project needs."
    },
    {
      q: "Can your bot handle complex business logic or integrate with my CRM?",
      a: "Basic bots are designed for common FAQs and lead capture. For advanced integrations, please book a consultation."
    },
    {
      q: "What if my FAQ or information changes?",
      a: "You can request an update or subscribe to our ongoing bot maintenance for automatic refreshes."
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
                AI Automation & Chatbot Solutions by <span className="text-accent">Zero Hour Group</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body">
                Get powerful automation and AI tools live on your website within minutes. 
                Purchase, install, and start benefitting instantly — no tech expertise required.
              </p>
              <Button variant="cta" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* Instant Buy Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Plug-and-Play AI Automation Tools — Buy Now
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body mb-8">
                Just buy, submit your website & info, and launch your AI bot today.
              </p>
              
              {/* Callout Banner */}
              <div className="bg-accent/10 rounded-lg p-4 max-w-4xl mx-auto">
                <p className="text-accent font-body font-medium">
                  ⚡ Marketing tasks taking too long? Try our plug-and-play prompt packs for instant results.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {instantProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <Card key={index} className="h-full flex flex-col border-border hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-heading text-foreground mb-2">
                        {product.name}
                      </CardTitle>
                      <div className="text-2xl font-heading font-bold text-accent">
                        {product.price}
                        <span className="text-sm text-muted-foreground font-body ml-1">
                          {product.name === "Marketing Prompt Pack" ? "(download)" : "(one-time)"}
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground font-body mb-4 flex-1">
                        {product.summary}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground font-body">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full" 
                        variant="cta"
                        onClick={() => handlePurchase(product.name, parseInt(product.price.replace('$', '')))}
                        disabled={isLoading}
                      >
                        {product.name === "Marketing Prompt Pack" ? "Download Now" : "Buy Now"}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Consultative Services */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Custom AI Automations & Consulting
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body mb-8">
                Need something tailor-made? Our experts will consult, build, and deploy bespoke 
                automation and AI solutions for your unique business challenges.
              </p>
              
              {/* Callout Banner */}
              <div className="bg-accent/10 rounded-lg p-4 max-w-4xl mx-auto">
                <p className="text-accent font-body font-medium">
                  📞 Need something custom? Book a free call for a tailored solution.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {consultativeServices.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading text-foreground mb-3">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground font-body mb-6">
                      {service.summary}
                    </p>
                    
                    <Button variant="outline" className="w-full group">
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Buy Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-8">
                Why Buy from Zero Hour Group?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Lightning-Fast Installs</h3>
                  <p className="text-muted-foreground font-body">Your tools work the day you buy.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Enterprise Security</h3>
                  <p className="text-muted-foreground font-body">All automations are secured and tested for enterprise needs.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">Transparent & Proven</h3>
                  <p className="text-muted-foreground font-body">Transparent pricing, fast support, and proven results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scale Up Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Scale?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
              Love your instant tool? Upgrade to custom integration or ongoing support anytime. 
              Ask about training add-ons or advanced features.
            </p>
            <Button variant="cta" size="lg">
              Supercharge My Automation
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="font-heading font-semibold text-foreground">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Take Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
              Buy your ready-made automation now or schedule a consult for something custom. 
              Don't let your business fall behind — automate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Buy Automation Now
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Free Guide: '5 Winning AI Prompts for Business'
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;