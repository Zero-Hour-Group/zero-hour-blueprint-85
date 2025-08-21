import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, MessageSquare, Phone } from "lucide-react";

const QuickContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero" id="quick-contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact info */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to Secure Your <span className="text-accent">Critical Moment</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-body">
              Don't wait for the next crisis. Our enterprise AI and cybersecurity experts are standing by.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary-foreground">Response Time</h3>
                  <p className="text-muted-foreground font-body">&lt; 2 hours for enterprise inquiries</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary-foreground">Direct Access</h3>
                  <p className="text-muted-foreground font-body">trey@zerohourgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary-foreground">Emergency Support</h3>
                  <p className="text-muted-foreground font-body">24/7 for active clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <Card className="bg-card/95 backdrop-blur border-border">
            <CardHeader>
              <CardTitle className="text-foreground font-heading">Get Expert Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-background" />
                <Input placeholder="Last Name" className="bg-background" />
              </div>
              <Input placeholder="Company Email" type="email" className="bg-background" />
              <Input placeholder="Company Name" className="bg-background" />
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Primary Interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai">AI Solutions</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="automation">Process Automation</SelectItem>
                  <SelectItem value="all">Comprehensive Solution</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Describe your challenge or timeline..." className="bg-background" />
              <Button variant="cta" className="w-full" size="lg">
                Request Consultation
              </Button>
              <p className="text-xs text-muted-foreground text-center font-body">
                Enterprise consultations typically scheduled within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;