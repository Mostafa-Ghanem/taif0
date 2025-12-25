import { Building2, Grid3X3, Maximize, Route, LayoutGrid } from "lucide-react";

const specs = [
  { icon: Building2, label: "نوع المشروع", value: "سكني وتجاري" },
  { icon: Grid3X3, label: "عدد القطع", value: "149" },
  { icon: Maximize, label: "المساحة الإجمالية", value: "77,000 م²" },
  { icon: LayoutGrid, label: "متوسط مساحات القطع", value: "500–1400 م²" },
  { icon: Route, label: "عروض الشوارع", value: "40 / 25 / 15 م" },
];

export const SpecsBlock = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-narrow mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
          <div className="bg-primary/5 px-6 py-4 border-b border-border/50">
            <h2 className="text-xl font-bold text-foreground">مواصفات المخطط</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-border/50">
            {specs.map((spec, index) => (
              <div 
                key={index}
                className="p-6 text-center hover:bg-secondary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <spec.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                <p className="font-bold text-foreground">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
