import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Zero Hour Group transformed our cybersecurity posture in weeks, not months. Their AI-driven approach caught threats our previous solutions missed.",
      author: "Sarah Chen",
      title: "CISO, Fortune 500 Manufacturing",
      rating: 5,
    },
    {
      quote: "When our automation project had a critical deadline, Zero Hour Group delivered a solution that exceeded expectations and came in under budget.",
      author: "Michael Rodriguez",
      title: "VP Operations, Healthcare Systems",
      rating: 5,
    },
    {
      quote: "Their Mississippi-based team understands enterprise needs. Fast response, deep expertise, and solutions that actually work.",
      author: "Jennifer Walsh",
      title: "IT Director, Financial Services",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/20" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Trusted by Enterprise Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            See why Fortune 500 companies and growing enterprises choose Zero Hour Group 
            for their most critical AI and cybersecurity challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-smooth bg-card border-border hover:border-accent/50"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground font-body leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <cite className="not-italic">
                    <div className="font-heading font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground font-body">
                      {testimonial.title}
                    </div>
                  </cite>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;