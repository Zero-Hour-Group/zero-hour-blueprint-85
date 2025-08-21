import { Button } from "@/components/ui/button";
import heroClockImage from "@/assets/hero-clock.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroClockImage}
          alt="Professional minimalist clock representing precision timing for enterprise solutions"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Enterprise AI & Cybersecurity for the{" "}
              <span className="text-accent">Critical Moment</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl font-body">
              When every second counts, enterprise leaders trust Zero Hour Group for mission-critical AI and cybersecurity solutions that deliver results, not excuses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg">
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Solutions
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-accent/30 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-2 border-accent/50 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-accent/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-6xl font-heading font-bold text-accent">
                      00:00
                    </div>
                  </div>
                </div>
              </div>
              {/* Clock hands */}
              <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-accent origin-bottom transform -translate-x-1/2 -translate-y-full rotate-0"></div>
              <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-primary-foreground origin-bottom transform -translate-x-1/2 -translate-y-full rotate-90"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;