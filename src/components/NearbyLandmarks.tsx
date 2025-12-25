import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const landmarks = [
  "مستشفى الملك سلمان التخصصي الجديد",
  "مطار الطائف",
  "مول ذا بارك",
  "جامعة الطائف",
  "مركز صحي الواسط",
];

export const NearbyLandmarks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary aspect-[4/3] shadow-lg border border-border/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">خريطة تفاعلية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              معالم قريبة
            </h2>
            
            <ul className="space-y-3 mb-8">
              {landmarks.map((landmark, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{landmark}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" size="lg" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              عرض الموقع على الخريطة
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
