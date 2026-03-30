import { Shield, Award, Clock, Users } from "lucide-react";

const features = [
  { icon: Shield, title: "Genuine Quality", desc: "We source only OEM and high-grade aftermarket parts from trusted manufacturers." },
  { icon: Award, title: "10+ Years Legacy", desc: "Over a decade of serving mechanics, garages, and transport companies across India." },
  { icon: Clock, title: "Fast Delivery", desc: "Quick dispatch and reliable supply chain to keep your vehicles running." },
  { icon: Users, title: "B2B & B2C", desc: "Wholesale rates for businesses, competitive retail prices for individuals." },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-3">About Us</p>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            YOUR TRUSTED PARTNER IN AUTO PARTS
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            <strong className="text-foreground">Nasra Auto Parts</strong> is a leading supplier of automobile spare parts in India. 
            With over 10 years of industry experience, we specialize in providing genuine and high-quality parts 
            for trucks, JCB machines, cars, and heavy vehicles. Whether you're a mechanic, garage owner, 
            transport company, or individual vehicle owner — we've got you covered with the right parts at the right price.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group">
              <f.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-2xl text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
