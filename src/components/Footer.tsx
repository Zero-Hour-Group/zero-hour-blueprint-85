import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <a 
              href="mailto:trey@zerohourgroup.com"
              className="flex items-center justify-center md:justify-start gap-2 text-primary-foreground/80 hover:text-accent transition-smooth font-body"
            >
              <Mail className="w-5 h-5" />
              trey@zerohourgroup.com
            </a>
          </div>

          {/* Center - Company Info */}
          <div className="text-center">
            <div className="font-heading font-bold text-xl mb-2">Zero Hour Group</div>
            <p className="text-primary-foreground/60 text-sm font-body">
              Enterprise AI & Cybersecurity Solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a 
              href="mailto:trey@zerohourgroup.com"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent transition-smooth"
              aria-label="Email Zero Hour Group"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#"
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:text-accent transition-smooth"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm font-body">
            &copy; 2024 Zero Hour Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;