import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import zhLogo from "@/assets/zh-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={zhLogo}
              alt="Zero Hour Group - Enterprise AI and Cybersecurity Solutions"
              className="h-8 w-auto"
              loading="eager"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground font-body font-medium hover:text-accent transition-smooth"
            >
              Home
            </Link>
            <Link 
              to="/solutions" 
              className="text-foreground font-body font-medium hover:text-accent transition-smooth"
            >
              Solutions
            </Link>
            <Link 
              to="/services" 
              className="text-foreground font-body font-medium hover:text-accent transition-smooth"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-foreground font-body font-medium hover:text-accent transition-smooth"
            >
              About
            </Link>
            <Link 
              to="/insights" 
              className="text-foreground font-body font-medium hover:text-accent transition-smooth"
            >
              Insights
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground font-body font-medium hover:text-accent transition-smooth"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button variant="cta" className="hidden sm:inline-flex">
            Book a Consultation
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;