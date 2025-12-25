import { Zap, Route, Droplets, Phone, Lightbulb, TreePine, Building, Waves } from "lucide-react";

const infrastructureItems = [
  { icon: Zap, label: "كهرباء" },
  { icon: Route, label: "طرق" },
  { icon: Waves, label: "صرف" },
  { icon: Phone, label: "هاتف" },
  { icon: Droplets, label: "مياه" },
  { icon: Lightbulb, label: "إنارة" },
  { icon: TreePine, label: "حدائق" },
  { icon: Building, label: "مساجد" },
];

export const InfrastructureGrid = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            البنية التحتية والخدمات
          </h2>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {infrastructureItems.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-4 text-center shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs font-medium text-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          تفاصيل توصيلات البنية تُوضح عند التواصل حسب مرحلة الخدمة
        </p>
      </div>
    </section>
  );
};
