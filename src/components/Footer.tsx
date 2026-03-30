import { Instagram, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-heading text-3xl text-primary">NASRA</span>{" "}
              <span className="font-heading text-2xl text-foreground">AUTO PARTS</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your trusted source for genuine automobile spare parts. Serving mechanics, garages, 
              and transport companies across India for over 10 years.
            </p>
            <p className="text-primary font-heading text-lg tracking-wider">
              "POWERING EVERY ENGINE, EVERY MILE"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              {["Home", "About", "Products", "Why Us", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">CONTACT INFO</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+918320620969" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 83206 20969
              </a>
              <a href="mailto:saiyedadnans.a34@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> saiyedadnans.a34@gmail.com
              </a>
              <a href="https://instagram.com/nasraautoparts" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" /> @nasraautoparts
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nasra Auto Parts. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
