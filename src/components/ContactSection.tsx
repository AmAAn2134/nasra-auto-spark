import { Phone, Mail, MapPin, Clock, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-3">Get In Touch</p>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
            CONTACT US TODAY
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Need a quote? Have a bulk order? Looking for a specific part? Reach out — we respond fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground">Phone</h3>
                <a href="tel:+918320620969" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 83206 20969
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground">Email</h3>
                <a href="mailto:info@nasraautoparts.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@nasraautoparts.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground">Location</h3>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground">Business Hours</h3>
                <p className="text-muted-foreground">Mon – Sat: 9:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground">Instagram</h3>
                <a href="https://instagram.com/nasraautoparts" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  @nasraautoparts
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-heading text-2xl text-foreground mb-6">SEND US A MESSAGE</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-secondary border-border" />
                <Input placeholder="Phone Number" className="bg-secondary border-border" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-secondary border-border" />
              <Input placeholder="Vehicle / Part Name" className="bg-secondary border-border" />
              <Textarea placeholder="Your Message or Requirement..." rows={4} className="bg-secondary border-border resize-none" />
              <Button className="w-full gap-2 text-lg py-6">
                <Send className="w-5 h-5" /> Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
