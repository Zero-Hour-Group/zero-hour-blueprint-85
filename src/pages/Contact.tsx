import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "trey@zerohourgroup.com",
      description: "Direct access to our founder"
    },
    {
      icon: Phone,
      title: "Emergency Support",
      content: "24/7 Available",
      description: "For active enterprise clients"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "< 2 Hours",
      description: "Enterprise inquiry guarantee"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Mississippi, USA",
      description: "Serving clients globally"
    }
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Enterprise projects typically range from 2-12 weeks depending on scope. We prioritize rapid deployment with our 'zero hour' methodology."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, for active enterprise clients. Our Mississippi-based team provides round-the-clock monitoring and support for critical systems."
    },
    {
      question: "What industries do you serve?",
      answer: "We specialize in healthcare, financial services, manufacturing, and government sectors - industries where precision and security are paramount."
    },
    {
      question: "How do you ensure data security?",
      answer: "We maintain SOC 2 Type II certification and follow enterprise-grade security protocols. All data is encrypted and handled according to industry best practices."
    },
    {
      question: "What's included in a consultation?",
      answer: "Our consultation includes a comprehensive assessment of your current state, custom solution design, timeline planning, and ROI projections."
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
                Let's Discuss Your <span className="text-accent">Critical Moment</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body">
                Ready to transform your enterprise with AI and cybersecurity solutions that work? 
                Our experts are standing by to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Get Expert Consultation
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  Fill out the form below and we'll get back to you within 2 hours. 
                  For urgent matters, email trey@zerohourgroup.com directly.
                </p>

                <Card className="border-border">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2 font-body">
                            First Name *
                          </label>
                          <Input placeholder="John" required />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2 font-body">
                            Last Name *
                          </label>
                          <Input placeholder="Smith" required />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-body">
                          Company Email *
                        </label>
                        <Input type="email" placeholder="john@company.com" required />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-body">
                          Company Name *
                        </label>
                        <Input placeholder="Your Company" required />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-body">
                          Primary Interest *
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your primary need" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai">AI Solutions</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                            <SelectItem value="automation">Process Automation</SelectItem>
                            <SelectItem value="assessment">Security Assessment</SelectItem>
                            <SelectItem value="compliance">Compliance Support</SelectItem>
                            <SelectItem value="comprehensive">Comprehensive Solution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-body">
                          Project Timeline
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="When do you need to start?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (Emergency)</SelectItem>
                            <SelectItem value="1month">Within 1 month</SelectItem>
                            <SelectItem value="3months">Within 3 months</SelectItem>
                            <SelectItem value="6months">Within 6 months</SelectItem>
                            <SelectItem value="planning">Planning phase</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-body">
                          Project Details *
                        </label>
                        <Textarea 
                          placeholder="Describe your challenge, current situation, and what you're hoping to achieve..." 
                          rows={4}
                          required 
                        />
                      </div>

                      <Button variant="cta" size="lg" className="w-full">
                        <Calendar className="w-5 h-5 mr-2" />
                        Request Consultation
                      </Button>

                      <p className="text-xs text-muted-foreground text-center font-body">
                        * Required fields. We typically respond to enterprise inquiries within 2 hours.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Quick Links */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="font-body text-foreground mb-1">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground font-body">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Card className="border-border mb-8">
                  <CardHeader>
                    <CardTitle className="font-heading text-foreground flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-accent" />
                      Quick Questions?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body mb-4">
                      For immediate questions or urgent security matters:
                    </p>
                    <Button variant="outline" className="w-full mb-3">
                      Email: trey@zerohourgroup.com
                    </Button>
                    <Button variant="ghost" className="w-full">
                      LinkedIn: Connect with our team
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="font-heading text-foreground">
                      Enterprise Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body text-sm">
                      Active enterprise clients have access to 24/7 emergency support, 
                      dedicated account management, and priority response times.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
                Get answers to common questions about our enterprise AI and cybersecurity services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground font-body">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground font-body mb-4">
                Don't see your question answered?
              </p>
              <Button variant="outline" size="lg">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;