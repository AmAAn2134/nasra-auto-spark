import { useEffect, useRef } from "react";

const brands = [
  "TATA", "ASHOK LEYLAND", "MAHINDRA", "EICHER", "BHARAT BENZ",
  "JCB", "MARUTI SUZUKI", "HYUNDAI", "TOYOTA", "HONDA",
  "BAJAJ", "FORCE MOTORS", "SML ISUZU", "VOLVO", "CATERPILLAR",
];

const BrandsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    let pos = 0;
    const speed = 0.5;

    const animate = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-primary font-medium uppercase tracking-[0.3em] text-sm mb-2">
          Trusted Brands
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">
          BRANDS WE SUPPLY PARTS FOR
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-hidden gap-8 whitespace-nowrap"
        style={{ scrollbarWidth: "none" }}
      >
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex-shrink-0 w-44 h-24 rounded-lg border border-border bg-background/50 flex items-center justify-center px-4 hover:border-primary/50 transition-colors"
          >
            <span className="font-heading text-lg text-muted-foreground text-center leading-tight">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
