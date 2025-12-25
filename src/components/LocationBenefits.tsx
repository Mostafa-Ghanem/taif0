import { Check } from "lucide-react";
import locationImage from "@/assets/location-map.jpg";

const benefits = [
  "سهولة الوصول إلى الطرق الرئيسية داخل الطائف",
  "مناسب للسكن العائلي والاستثمار",
  "متكامل الخدمات",
  "قرب من مرافق حيوية",
  "تنوع مساحات يناسب: فلل / مشاريع / محلات وخدمات",
];

export const LocationBenefits = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              مميزات الموقع
            </h2>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Image */}
          <div className="animate-slide-up delay-200">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
              <img 
                src={locationImage}
                alt="حي الواسط - موقع مخطط ملقا الطائف"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
