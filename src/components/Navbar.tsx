import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-heading text-3xl md:text-4xl text-primary tracking-wider">NASRA</span>
          <span className="font-heading text-xl md:text-2xl text-foreground tracking-wider">AUTO PARTS</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <Button asChild>
            <a href="tel:+918320620969" className="gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider py-2"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="w-full">
            <a href="tel:+919999999999" className="gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
