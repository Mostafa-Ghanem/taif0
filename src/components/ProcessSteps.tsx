import { ClipboardList, Send, MapPin, CheckCircle } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "املأ بياناتك", description: "أدخل معلومات التواصل" },
  { icon: Send, title: "نرسل الأسعار والملفات", description: "تفاصيل كاملة على واتساب" },
  { icon: MapPin, title: "زيارة ميدانية", description: "معاينة الموقع على الطبيعة" },
  { icon: CheckCircle, title: "حجز القطعة", description: "ضمان القطعة المناسبة" },
];

export const ProcessSteps = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-narrow mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            خطوات الحصول على قطعتك
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-border" />
          <div className="hidden md:block absolute top-12 right-0 w-1/4 h-1 bg-primary" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Step Number Badge */}
                <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
