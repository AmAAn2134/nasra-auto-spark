import { Truck, Cog, Car, Wrench, Droplets, Filter, CircuitBoard, Disc } from "lucide-react";

const categories = [
  { icon: Truck, name: "Truck Parts", desc: "Complete range for Tata, Ashok Leyland, Eicher & more" },
  { icon: Cog, name: "JCB Parts", desc: "Hydraulic, engine & undercarriage parts for JCB machines" },
  { icon: Car, name: "Car Parts", desc: "Suspension, brakes, clutch & electrical for all car brands" },
  { icon: Wrench, name: "Engine Parts", desc: "Pistons, liners, gaskets, bearings & crankshafts" },
  { icon: Disc, name: "Body Parts", desc: "Bumpers, panels, mirrors, lights & fenders" },
  { icon: Filter, name: "Filters", desc: "Oil, air, fuel & hydraulic filters for all vehicles" },
  { icon: Droplets, name: "Oils & Lubricants", desc: "Engine oils, gear oils, coolants & greases" },
  { icon: CircuitBoard, name: "Electrical Parts", desc: "Starters, alternators, wiring harness & sensors" },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-3">Our Products</p>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
            COMPLETE RANGE OF SPARE PARTS
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From heavy-duty truck components to precision car parts — we stock everything your vehicle needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <div
              key={c.name}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-primary transition-all duration-300" />
              <c.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-2">{c.name}</h3>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Can't find what you need?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">Contact us</a> for custom requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
