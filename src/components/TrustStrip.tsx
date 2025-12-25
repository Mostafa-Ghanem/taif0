import { CheckCircle2, FileText, MapPin, Users } from "lucide-react";

const trustItems = [
  {
    icon: FileText,
    title: "بيانات واضحة",
    description: "مساحات/شوارع/استخدامات",
  },
  {
    icon: MapPin,
    title: "موقع مميز",
    description: "بحي الواسط",
  },
  {
    icon: CheckCircle2,
    title: "جاهزية بنية تحتية",
    description: "كهرباء/مياه/…",
  },
  {
    icon: Users,
    title: "زيارة ميدانية",
    description: "+ إرسال ملفات فورية",
  },
];

export const TrustStrip = () => {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border/50">
      <div className="container-narrow mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
