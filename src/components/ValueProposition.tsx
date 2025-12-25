import { Home, TrendingUp, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValuePropositionProps {
  onOpenModal: () => void;
}

const valueCards = [
  {
    icon: Home,
    title: "سكن عائلي هادئ",
    description: "بيئة سكنية مثالية للعائلات مع مساحات واسعة وخصوصية تامة",
  },
  {
    icon: TrendingUp,
    title: "فرص استثمار وتطوير",
    description: "قطع تجارية متميزة بمواقع استراتيجية لمشاريع مربحة",
  },
  {
    icon: Navigation,
    title: "سهولة وصول وخدمات قريبة",
    description: "قرب من الطرق الرئيسية والمرافق الحيوية والخدمات اليومية",
  },
];

export const ValueProposition = ({ onOpenModal }: ValuePropositionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            لماذا مخطط ملقا الطائف يخدم السكن والاستثمار؟
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            موقع يخدم أهدافك السكنية والاستثمارية ضمن بيئة متكاملة التخطيط والخدمات والمرافق… وقيمة تنمو مع الوقت
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {valueCards.map((card, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={onOpenModal}>
            اطلب التفاصيل الآن
          </Button>
        </div>
      </div>
    </section>
  );
};
