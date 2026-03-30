import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Auto parts warehouse" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="relative container mx-auto text-center pt-20 px-4">
        <p className="text-primary font-medium uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-up">
          Trusted Since 10+ Years
        </p>
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          POWERING EVERY<br />
          <span className="text-gradient">ENGINE, EVERY MILE</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          India's reliable source for genuine truck, JCB, car & heavy vehicle spare parts — wholesale & retail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" asChild className="text-lg px-8 py-6 gap-2">
            <a href="#products">
              Explore Products <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 gap-2 border-primary/30 text-primary hover:bg-primary/10">
            <a href="tel:+919999999999">
              <PhoneCall className="w-5 h-5" /> Get Best Price
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { num: "10+", label: "Years Experience" },
            { num: "5000+", label: "Products" },
            { num: "2000+", label: "Happy Clients" },
            { num: "100%", label: "Genuine Parts" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-4xl md:text-5xl text-primary">{s.num}</div>
              <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
