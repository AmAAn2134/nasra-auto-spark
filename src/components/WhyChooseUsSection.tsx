import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Genuine OEM & high-quality aftermarket parts",
  "Competitive wholesale & retail pricing",
  "10+ years of trusted industry experience",
  "5000+ SKUs across all vehicle categories",
  "Fast dispatch & pan-India delivery",
  "Dedicated support for mechanics & garages",
  "Easy bulk ordering for transport companies",
  "Quality-checked inventory with warranty support",
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-3">Why Choose Us</p>
            <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
              THE SMART CHOICE FOR AUTO PARTS
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Nasra Auto Parts, we believe in building long-term partnerships. Our commitment to quality, 
              fair pricing, and reliable service has made us a preferred supplier for thousands of businesses 
              and vehicle owners across India.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="font-heading text-7xl md:text-8xl text-primary">10+</div>
                  <div className="text-muted-foreground text-lg">Years in Business</div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="font-heading text-7xl md:text-8xl text-primary">5K+</div>
                  <div className="text-muted-foreground text-lg">Products Available</div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="font-heading text-7xl md:text-8xl text-primary">2K+</div>
                  <div className="text-muted-foreground text-lg">Satisfied Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
